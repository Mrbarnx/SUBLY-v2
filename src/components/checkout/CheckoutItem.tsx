import type { CartItem } from '../../types'
import { formatCurrency } from '../../lib/currency'
import { AppLogo } from '../storefront/AppLogo'
export function CheckoutItem({item}:{item:CartItem}){return <div className="flex min-w-0 items-center gap-3 py-3"><AppLogo product={item.product} className="size-14 rounded-card text-sm"/><div className="min-w-0 flex-1"><p className="break-words font-semibold">{item.product.name} — 1 Month</p><p className="text-sm text-slate-500">Qty: {item.quantity}</p></div><b className="shrink-0">{formatCurrency(item.product.price*item.quantity)}</b></div>}
