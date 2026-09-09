import type { Product } from '../../types'
import { formatCurrency } from '../../lib/currency'
export function PriceDisplay({product,large=false}:{product:Product;large?:boolean}){return <div className="flex flex-wrap items-baseline gap-2"><strong className={large?'text-3xl':'text-xl'}>{formatCurrency(product.price,product.currency)}</strong>{product.originalPrice&&<del className="text-sm text-slate-500">{formatCurrency(product.originalPrice,product.currency)}</del>}<span className="text-xs text-slate-500">/ month</span></div>}
