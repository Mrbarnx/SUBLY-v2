import type { CartItem } from '../../types'
import { formatCurrency } from '../../lib/currency'
import { AppLogo } from '../storefront/AppLogo'
export function CheckoutItem({item}:{item:CartItem}){return <div className="flex min-w-0 items-center gap-3 py-3.5"><span className="grid size-12 shrink-0 place-items-center rounded-card bg-slate-50 p-1.5"><AppLogo product={item.product} className="size-9"/></span><div className="min-w-0 flex-1"><p className="break-words text-sm font-semibold">{item.product.name} — 1 Month</p><p className="mt-0.5 text-xs text-slate-500">Quantity {item.quantity}</p></div><b className="shrink-0 text-sm">{formatCurrency(item.product.price*item.quantity)}</b></div>}
