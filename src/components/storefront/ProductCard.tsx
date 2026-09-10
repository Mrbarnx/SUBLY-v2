import { Link, useNavigate } from 'react-router-dom'
import type { Product } from '../../types'
import { useCart } from '../../features/cart'
import { useToast } from '../feedback'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { AppLogo } from './AppLogo'
import { PriceDisplay } from './PriceDisplay'

export function ProductCard({product,compact=false}:{product:Product;compact?:boolean}){
  const cart=useCart(); const toast=useToast(); const navigate=useNavigate()
  const add=()=>{cart.addItem(product);toast({message:`${product.name} added to cart`,tone:'success'})}
  return <article className="group flex min-w-0 flex-col overflow-hidden rounded-card border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,.08)]">
    <Link to={`/product/${product.slug}`} className={`relative grid place-items-center border-b border-slate-100 bg-slate-50/70 ${compact?'aspect-[5/3]':'aspect-[4/3]'}`}><AppLogo product={product} className={compact?'size-14':'size-[4.75rem]'}/><span className="absolute right-3 top-3 rounded bg-white px-2 py-1 text-[10px] font-semibold text-slate-600 shadow-sm">{product.deliveryType==='assisted'?'Assisted':'Ready-made'}</span></Link>
    <div className="flex flex-1 flex-col p-4"><p className="text-xs font-medium text-slate-500">{product.deliveryType==='assisted'?'Managed activation':'Digital access'}</p><Link to={`/product/${product.slug}`} className="mt-1 font-bold leading-tight text-navy transition group-hover:text-primary">{product.name}</Link><div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600"><Icon name="star" className="size-3.5 fill-amber-400 stroke-amber-400"/><span className="font-semibold text-slate-800">{product.rating}</span><span>({product.reviewCount.toLocaleString()})</span></div><div className="mt-3"><PriceDisplay product={product}/></div><div className="mt-3 flex items-center justify-between gap-2 text-xs"><span className="flex items-center gap-1.5 text-slate-600"><Icon name="clock" className="size-3.5"/>{product.deliveryMinutes}–{product.deliveryMinutes+5} min</span><span className={`flex items-center gap-1.5 font-semibold ${product.available?'text-emerald-700':'text-danger'}`}><span className={`size-1.5 rounded-full ${product.available?'bg-emerald-500':'bg-red-500'}`}/>{product.available?'In stock':'Out of stock'}</span></div>{!compact&&<div className="mt-4 grid grid-cols-2 gap-2"><Button variant="secondary" disabled={!product.available} onClick={add} className="px-2 text-xs sm:text-sm">Add to cart</Button><Button disabled={!product.available} onClick={()=>navigate(`/product/${product.slug}`)} className="px-2 text-xs sm:text-sm">Buy now</Button></div>}{compact&&<Link to={`/product/${product.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View product <Icon name="arrow-right" className="size-4"/></Link>}</div>
  </article>
}
