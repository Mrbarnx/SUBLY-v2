import type { Product } from '../../types'
import { cn } from '../../lib/cn'
export function AppLogo({product,className}: {product:Product;className?:string}){return <div className={cn('grid aspect-square size-20 shrink-0 place-items-center rounded-2xl text-center text-xl font-black text-white shadow-sm',className)} style={{background:product.logoColor}} role="img" aria-label={`${product.name} logo`}>{product.logoText}</div>}
