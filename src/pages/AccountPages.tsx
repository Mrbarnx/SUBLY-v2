import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import type { Order } from "../types";
import {
  accountService,
  orderService,
  productService,
  walletService,
} from "../services";
import { AccountPageHeader } from "../components/account/AccountPageHeader";
import { CopyField } from "../components/account/CopyField";
import { SettingsSection } from "../components/account/SettingsSection";
import { StatCard } from "../components/account/StatCard";
import { StatusBadge } from "../components/account/StatusBadge";
import { AppLogo } from "../components/storefront/AppLogo";
import { Button } from "../components/ui/Button";
import { Dialog, EmptyState, ErrorState } from "../components/feedback";
import { formatCurrency } from "../lib/currency";
const useAccount = () =>
  useQuery({ queryKey: ["account"], queryFn: accountService.getCurrentUser });
const useOrders = () =>
  useQuery({ queryKey: ["orders"], queryFn: orderService.list });
const useWallet = () =>
  useQuery({ queryKey: ["wallet"], queryFn: walletService.getWallet });
const useTransactions = () =>
  useQuery({
    queryKey: ["wallet-transactions"],
    queryFn: walletService.listTransactions,
  });

export function DashboardPage() {
  const user = useAccount();
  const orderQuery = useOrders();
  const wallet = useWallet();
  const products = useQuery({
    queryKey: ["products"],
    queryFn: productService.list,
  });
  if (user.isError || orderQuery.isError || wallet.isError)
    return (
      <ErrorState
        description="Account overview could not be loaded."
        onRetry={() =>
          void Promise.all([
            user.refetch(),
            orderQuery.refetch(),
            wallet.refetch(),
          ])
        }
      />
    );
  const orders = orderQuery.data ?? [];
  return (
    <>
      <AccountPageHeader
        title={`Good afternoon${user.data ? `, ${user.data.name.split(" ")[0]}` : ""}`}
        description="Here’s what’s happening with your Subly account."
      />
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard
          icon="▢"
          label="Total orders"
          value={String(orders.length)}
          detail={`${orders.filter((o) => !["completed", "refunded", "cancelled"].includes(o.status)).length} active`}
        />
        <StatCard
          icon="▣"
          label="Wallet balance"
          value={wallet.data ? formatCurrency(wallet.data.balance) : "—"}
          detail="View wallet"
        />
        <StatCard
          icon="☆"
          label="Reward points"
          value="1,840"
          detail="Demo rewards"
        />
        <StatCard
          icon="◇"
          label="Total savings"
          value={formatCurrency(orders.reduce((sum, o) => sum + o.discount, 0))}
          detail="Across orders"
        />
      </div>
      <div className="mt-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-card border border-border bg-white">
          <div className="flex justify-between border-b border-border p-5">
            <h2 className="text-xl font-bold">Recent orders</h2>
            <Link to="/orders" className="text-primary">
              View all
            </Link>
          </div>
          {orders.length ? (
            <div className="divide-y divide-border">
              {orders.slice(0, 3).map((o) => (
                <OrderLine key={o.id} order={o} />
              ))}
            </div>
          ) : (
            <div className="p-5">
              <EmptyState
                title="No orders yet"
                description="Your recent purchases will appear here."
              />
            </div>
          )}
        </section>
        <section className="rounded-card border border-border bg-white p-5">
          <h2 className="text-xl font-bold">Quick actions</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["/shop", "Browse products"],
              ["/orders", "Track an order"],
              ["/wallet", "View wallet"],
              ["mailto:support@subly.example", "Get support"],
            ].map(([to, label]) => (
              <Link
                className="rounded-card border border-border p-5 text-center font-semibold hover:border-primary hover:text-primary"
                key={label}
                to={to}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            to="/referrals"
            className="mt-4 block rounded-card bg-navy p-5 text-white"
          >
            <b>Refer & earn</b>
            <p className="mt-1 text-sm text-blue-100">
              Invite friends and view demo rewards →
            </p>
          </Link>
        </section>
      </div>
      <section className="mt-6 rounded-card border border-border bg-white p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Recommended for you</h2>
          <Link to="/shop" className="text-primary">
            Browse all
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {(products.data ?? []).slice(4, 7).map((p) => (
            <Link
              to={`/product/${p.slug}`}
              key={p.id}
              className="flex items-center gap-4"
            >
              <AppLogo product={p} className="size-16" />
              <div>
                <b>{p.name}</b>
                <p className="text-sm text-slate-500">
                  From {formatCurrency(p.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
function OrderLine({
  order,
  onSelect,
}: {
  order: Order;
  onSelect?: (order: Order) => void;
}) {
  return (
    <button
      onClick={() => onSelect?.(order)}
      className="grid w-full gap-3 p-5 text-left sm:grid-cols-[1fr_auto_auto] sm:items-center"
    >
      <div className="flex min-w-0 gap-3">
        <AppLogo
          product={order.items[0].product}
          className="size-14 rounded-card text-sm"
        />
        <div className="min-w-0">
          <b className="break-words">
            {order.items.map((i) => i.product.name).join(", ")}
          </b>
          <p className="text-sm text-slate-500">{order.reference}</p>
        </div>
      </div>
      <b>{formatCurrency(order.total)}</b>
      <StatusBadge status={order.status} />
    </button>
  );
}

export function OrdersPage() {
  const query = useOrders();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selected, setSelected] = useState<Order | null>(null);
  if (query.isError)
    return (
      <ErrorState
        description="Orders could not be loaded."
        onRetry={() => void query.refetch()}
      />
    );
  const orders = (query.data ?? []).filter(
    (o) =>
      (status === "all" || o.status === status) &&
      `${o.reference} ${o.items.map((i) => i.product.name).join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <>
      <AccountPageHeader
        title="Orders"
        description="Track purchases, delivery progress and payment status."
        action={<span>{query.data?.length ?? 0} total orders</span>}
      />
      <section className="rounded-card border border-border bg-white">
        <div className="grid gap-3 border-b border-border p-4 sm:grid-cols-[1fr_14rem_auto]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search orders"
            placeholder="Search reference or product"
            className="rounded-card border border-border px-3 py-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filter status"
            className="rounded-card border border-border bg-white px-3 py-2"
          >
            <option value="all">All statuses</option>
            {[
              "pending",
              "under-review",
              "processing",
              "completed",
              "refunded",
              "cancelled",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <button
            onClick={() => {
              setSearch("");
              setStatus("all");
            }}
            className="text-primary"
          >
            Clear filters
          </button>
        </div>
        {orders.length ? (
          <div className="dividebros divide-y divide-border">
            {orders.map((o) => (
              <OrderLine key={o.id} order={o} onSelect={setSelected} />
            ))}
          </div>
        ) : (
          <div className="p-5">
            <EmptyState
              title="No matching orders"
              description="Try clearing the filters or browse products."
              action={
                <Link to="/shop" className="text-primary">
                  Browse Products
                </Link>
              }
            />
          </div>
        )}
      </section>
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.reference ?? "Order details"}
        description="Frontend order details"
      >
        {selected && (
          <div>
            <OrderLine order={selected} />
            <p className="mt-4 text-sm text-slate-600">
              Payment method: {selected.paymentMethod.replaceAll("-", " ")}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Placed {new Date(selected.createdAt).toLocaleString()}
            </p>
          </div>
        )}
      </Dialog>
    </>
  );
}

const profileSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  country: z.string().min(2),
  language: z.string(),
  currency: z.string(),
});
type ProfileForm = z.infer<typeof profileSchema>;
export function ProfilePage() {
  const user = useAccount();
  const [saved, setSaved] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ProfileForm>({
    values: {
      name: user.data?.name ?? "",
      phone: user.data?.phone ?? "",
      country: user.data?.country ?? "",
      language: user.data?.language ?? "English",
      currency: user.data?.currency ?? "USD",
    },
  });
  async function submit(values: ProfileForm) {
    if (!profileSchema.safeParse(values).success) return;
    await new Promise((r) => window.setTimeout(r, 350));
    reset(values);
    setSaved(true);
  }
  return (
    <>
      <AccountPageHeader
        title="Profile"
        description="Manage your personal information and account security."
        action={
          saved ? (
            <span className="text-emerald-700">✓ Demo changes saved</span>
          ) : undefined
        }
      />
      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <SettingsSection title="Personal information">
          <form
            onSubmit={handleSubmit(submit)}
            className="grid gap-5 sm:grid-cols-2"
          >
            <label className="text-sm font-semibold">
              Full name
              <input
                {...register("name")}
                className="mt-2 min-h-11 w-full rounded-card border border-border px-3"
              />
            </label>
            <label className="text-sm font-semibold">
              Email address
              <input
                value={user.data?.email ?? ""}
                disabled
                className="mt-2 min-h-11 w-full rounded-card border border-border bg-slate-100 px-3"
              />
            </label>
            <label className="text-sm font-semibold">
              Phone number
              <input
                {...register("phone")}
                className="mt-2 min-h-11 w-full rounded-card border border-border px-3"
              />
            </label>
            <label className="text-sm font-semibold">
              Country
              <input
                {...register("country")}
                className="mt-2 min-h-11 w-full rounded-card border border-border px-3"
              />
            </label>
            <label className="text-sm font-semibold">
              Language
              <select
                {...register("language")}
                className="mt-2 min-h-11 w-full rounded-card border border-border bg-white px-3"
              >
                <option>English</option>
                <option>French</option>
              </select>
            </label>
            <label className="text-sm font-semibold">
              Currency
              <select
                {...register("currency")}
                className="mt-2 min-h-11 w-full rounded-card border border-border bg-white px-3"
              >
                <option>USD</option>
                <option>NGN</option>
                <option>GBP</option>
              </select>
            </label>
            <Button loading={isSubmitting} className="sm:w-fit">
              Save changes
            </Button>
          </form>
        </SettingsSection>
        <SettingsSection title="Profile photo">
          <div className="text-center">
            {avatar ? (
              <img
                src={avatar}
                alt="Profile preview"
                className="mx-auto size-32 rounded-full object-cover"
              />
            ) : (
              <span className="mx-auto grid size-32 place-items-center rounded-full bg-blue-50 text-4xl text-primary">
                AM
              </span>
            )}
            <label className="mt-5 inline-block cursor-pointer rounded-card bg-primary px-4 py-2 font-semibold text-white">
              Upload photo
              <input
                type="file"
                accept="image/png,image/jpeg"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.size <= 5_000_000)
                    setAvatar(URL.createObjectURL(file));
                }}
              />
            </label>
            {avatar && (
              <button
                onClick={() => setAvatar(null)}
                className="ml-3 text-danger"
              >
                Remove
              </button>
            )}
            <p className="mt-3 text-sm text-slate-500">
              JPG or PNG · Max 5 MB · Preview only
            </p>
          </div>
        </SettingsSection>
        <SettingsSection title="Password & security">
          <p>
            <b>Password</b>
            <br />
            <span className="text-sm text-slate-500">
              Use the secure recovery flow to change your password.
            </span>
          </p>
          <Link
            to="/forgot-password"
            className="mt-4 inline-block rounded-card border border-primary px-4 py-2 font-semibold text-primary"
          >
            Change password
          </Link>
        </SettingsSection>
      </div>
    </>
  );
}

function Preference({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-4 border-b border-border py-4 last:border-0">
      <span>
        <b>{label}</b>
        <small className="mt-1 block text-slate-500">{description}</small>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="size-6 accent-primary"
      />
    </label>
  );
}
export function SettingsPage() {
  const [email, setEmail] = useState(true);
  const [whatsapp, setWhatsapp] = useState(false);
  const [restock, setRestock] = useState(true);
  const [saved, setSaved] = useState(false);
  return (
    <>
      <AccountPageHeader
        title="Settings"
        description="Choose how Subly works for you."
        action={
          saved ? (
            <span className="text-emerald-700">
              ✓ Preferences saved locally
            </span>
          ) : undefined
        }
      />
      <div className="grid gap-5 xl:grid-cols-2">
        <div className="grid gap-5">
          <SettingsSection title="General preferences">
            <label className="font-semibold">
              Display currency
              <select className="mt-3 w-full rounded-card border border-border bg-white px-3 py-3">
                <option>USD — US Dollar</option>
                <option>NGN — Nigerian Naira</option>
                <option>GBP — British Pound</option>
              </select>
            </label>
          </SettingsSection>
          <SettingsSection title="Notifications">
            <Preference
              label="Email product updates"
              description="New arrivals and useful shopping updates"
              checked={email}
              onChange={setEmail}
            />
            <Preference
              label="WhatsApp order alerts"
              description="Presentation-only preference"
              checked={whatsapp}
              onChange={setWhatsapp}
            />
            <Preference
              label="Restock alerts"
              description="Product availability updates"
              checked={restock}
              onChange={setRestock}
            />
            <Button onClick={() => setSaved(true)} className="mt-4">
              Save changes
            </Button>
          </SettingsSection>
        </div>
        <div className="grid content-start gap-5">
          <SettingsSection title="Privacy & legal">
            <div className="grid gap-4">
              {[
                ["/privacy-policy", "Privacy policy"],
                ["/terms-of-service", "Terms of service"],
                ["/data-deletion", "Data deletion"],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="flex justify-between">
                  {label}
                  <span>→</span>
                </Link>
              ))}
            </div>
          </SettingsSection>
          <SettingsSection title="Session">
            <p>Signed in on this demo device</p>
            <Link
              to="/login"
              className="mt-4 inline-block rounded-card border border-primary px-4 py-2 text-primary"
            >
              Log out
            </Link>
          </SettingsSection>
          <SettingsSection title="Account actions" danger>
            <p className="text-sm text-slate-600">
              Account deletion is unavailable without a backend.
            </p>
            <Link
              to="/data-deletion"
              className="mt-4 inline-block rounded-card border border-danger px-4 py-2 text-danger"
            >
              Review data deletion
            </Link>
          </SettingsSection>
        </div>
      </div>
    </>
  );
}

export function WalletPage() {
  const wallet = useWallet();
  const tx = useTransactions();
  const [amount, setAmount] = useState("25");
  const [method, setMethod] = useState("Bank transfer");
  const [request, setRequest] = useState(false);
  if (wallet.isError || tx.isError)
    return <ErrorState description="Wallet data could not be loaded." />;
  return (
    <>
      <AccountPageHeader
        title="Wallet"
        description="Review your demo Subly balance and activity."
        action={<span>♢ Protected presentation</span>}
      />
      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-card bg-navy p-6 text-white">
          <p>Available balance</p>
          <strong className="mt-2 block text-4xl">
            {wallet.data ? formatCurrency(wallet.data.balance) : "—"} USD
          </strong>
          <p className="mt-3 text-blue-100">
            No frontend action can credit this balance.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/20 pt-5 text-sm">
            <span>
              Deposited
              <br />
              <b>$210.00</b>
            </span>
            <span>
              Pending
              <br />
              <b>$25.00</b>
            </span>
            <span>
              Points
              <br />
              <b>1,840</b>
            </span>
          </div>
        </section>
        <SettingsSection title="Fund your wallet">
          <label className="text-sm font-semibold">
            Amount
            <input
              type="number"
              min="5"
              max="500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-2 w-full rounded-card border border-border px-3 py-3"
            />
          </label>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Bank transfer", "USDT BEP20", "USDT TRC20"].map((item) => (
              <button
                key={item}
                onClick={() => setMethod(item)}
                className={`rounded-card border p-3 text-sm ${method === item ? "border-primary text-primary" : "border-border"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => setRequest(true)} className="mt-4 w-full">
            Create demo funding request
          </Button>
        </SettingsSection>
      </div>
      {request && (
        <section className="mt-5 rounded-card border border-amber-300 bg-white p-5">
          <div className="flex flex-wrap justify-between gap-3">
            <h2 className="text-xl font-bold">Demo funding request</h2>
            <StatusBadge status="pending" />
          </div>
          <p className="mt-4">
            Amount: <b>{amount} USD</b> · Method: <b>{method}</b>
          </p>
          <p className="mt-3 rounded bg-amber-50 p-3 text-sm text-amber-800">
            No address or payment instruction is generated. This request cannot
            fund your wallet.
          </p>
          <Button
            variant="secondary"
            onClick={() => setRequest(false)}
            className="mt-4"
          >
            Cancel request
          </Button>
        </section>
      )}
      <SettingsSection title="Recent transactions">
        <div className="divide-y divide-border">
          {(tx.data ?? []).map((item) => (
            <div
              key={item.id}
              className="grid gap-2 py-4 sm:grid-cols-[1fr_auto_auto]"
            >
              <div>
                <b>{item.description}</b>
                <p className="break-all text-xs text-slate-500">
                  {item.id} · {item.method}
                </p>
              </div>
              <b
                className={
                  item.type === "credit" ? "text-emerald-700" : "text-danger"
                }
              >
                {item.type === "credit" ? "+" : "−"}
                {formatCurrency(item.amount)}
              </b>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      </SettingsSection>
    </>
  );
}

export function ReferralsPage() {
  const query = useQuery({
    queryKey: ["referrals"],
    queryFn: accountService.getReferrals,
  });
  const referrals = query.data ?? [];
  const earned = referrals.reduce(
    (sum, item) => sum + (item.rewardAmount ?? 0),
    0,
  );
  return (
    <>
      <AccountPageHeader
        title="Referrals"
        description="Invite friends and track demo reward progress."
        action={
          <a href="mailto:support@subly.example" className="text-primary">
            Referral support
          </a>
        }
      />
      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-card bg-navy p-6 text-white">
          <h2 className="text-2xl font-bold">Invite friends. Earn together.</h2>
          <p className="mt-2 text-blue-100">
            Rewards are added only after an eligible referral is verified.
          </p>
          <div className="mt-6">
            <CopyField value="https://subly.example/r/ALEX-7K2" />
          </div>
        </section>
        <SettingsSection title="Current reward rule">
          <strong className="text-2xl">$5 wallet credit</strong>
          <p className="mt-2 text-slate-600">
            For every qualified referral in this demo program.
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>✓ Friend signs up with your link</li>
            <li>✓ Completes an eligible first order</li>
            <li>✓ Reward is manually verified</li>
          </ul>
        </SettingsSection>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          icon="♧"
          label="Total signups"
          value={String(referrals.length)}
        />
        <StatCard
          icon="✓"
          label="Qualified"
          value={String(
            referrals.filter((r) => r.status === "qualified").length,
          )}
        />
        <StatCard
          icon="◷"
          label="Pending"
          value={String(
            referrals.filter((r) => ["invited", "joined"].includes(r.status))
              .length,
          )}
        />
        <StatCard
          icon="▣"
          label="Total earned"
          value={formatCurrency(earned)}
        />
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <SettingsSection title="Referral history">
          {referrals.length ? (
            <div className="divide-y divide-border">
              {referrals.map((r) => (
                <div
                  className="grid gap-2 py-3 sm:grid-cols-[1fr_auto_auto]"
                  key={r.id}
                >
                  <span className="break-all">{r.referredEmail}</span>
                  <StatusBadge status={r.status} />
                  <b>{r.rewardAmount ? formatCurrency(r.rewardAmount) : "—"}</b>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No referrals yet"
              description="Copy your personal invitation link to get started."
            />
          )}
        </SettingsSection>
        <SettingsSection title="How it works">
          <ol className="grid gap-5">
            <li>
              <b>1. Share your link</b>
              <p className="text-sm text-slate-500">
                Send your personal demo link.
              </p>
            </li>
            <li>
              <b>2. Friend shops on Subly</b>
              <p className="text-sm text-slate-500">
                They complete an eligible first order.
              </p>
            </li>
            <li>
              <b>3. Receive your reward</b>
              <p className="text-sm text-slate-500">
                Credit follows verification.
              </p>
            </li>
          </ol>
        </SettingsSection>
      </div>
      <section className="mt-5 rounded-card border border-border bg-white p-5">
        <h2 className="font-bold">Fair use & reward rules</h2>
        <p className="mt-3 text-sm text-slate-600">
          One account per person. Self-referrals are not allowed. Cancelled or
          refunded orders do not qualify.
        </p>
      </section>
    </>
  );
}
