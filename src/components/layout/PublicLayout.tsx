import { useState, type FormEvent } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Container } from './Container'
import { SublyLogo } from '../storefront/SublyLogo'
import { Footer } from '../storefront/Footer'
import { Icon } from '../ui/Icon'
import { useCart } from '../../features/cart'

const navClass = ({isActive}:{isActive:boolean}) => `relative py-5 transition-colors hover:text-primary ${isActive?'text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary':'text-slate-700'}`

export function PublicLayout(){
  const [open,setOpen]=useState(false); const [search,setSearch]=useState(''); const navigate=useNavigate(); const {itemCount}=useCart()
  function submit(e:FormEvent){e.preventDefault();navigate(`/shop?q=${encodeURIComponent(search)}`);setOpen(false)}
  return <div className="public-commerce min-h-screen bg-white">
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <SublyLogo/>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-semibold md:flex"><NavLink className={navClass} to="/shop">Shop</NavLink><NavLink className={navClass} to="/how-it-works">How It Works</NavLink><NavLink className={navClass} to="/shop">Categories</NavLink></nav>
        <form onSubmit={submit} className="relative hidden min-w-0 max-w-md flex-1 lg:block"><label className="sr-only" htmlFor="site-search">Search products</label><Icon name="search" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"/><input id="site-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search tools and subscriptions" className="h-10 w-full rounded-card border border-slate-200 bg-slate-50/60 pl-10 pr-4 text-sm transition focus:border-primary focus:bg-white"/></form>
        <div className="hidden items-center gap-3 text-sm md:flex"><NavLink to="/login" className="px-2 py-2 font-semibold text-slate-700 hover:text-primary">Log in</NavLink><NavLink to="/signup" className="rounded-card bg-primary px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700">Create account</NavLink><NavLink to="/cart" className="relative grid size-10 place-items-center rounded-card border border-slate-200 text-slate-700 transition hover:border-primary hover:text-primary" aria-label={`Cart with ${itemCount} items`}><Icon name="cart"/>{itemCount>0&&<span className="absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold leading-5 text-white">{itemCount}</span>}</NavLink></div>
        <button className="grid size-10 place-items-center rounded-card border border-slate-200 text-slate-800 md:hidden" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Close navigation':'Open navigation'}><Icon name={open?'x':'menu'}/></button>
      </Container>
      {open&&<div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden"><form onSubmit={submit} className="relative"><Icon name="search" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"/><input value={search} onChange={e=>setSearch(e.target.value)} aria-label="Search products" placeholder="Search products" className="h-11 w-full rounded-card border border-slate-200 pl-10 pr-20"/><button className="absolute right-1 top-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white">Search</button></form><nav className="mt-3 grid" aria-label="Mobile primary">{[['/shop','Shop'],['/how-it-works','How It Works'],['/cart',`Cart (${itemCount})`],['/login','Log in'],['/signup','Create account']].map(([to,label])=><NavLink onClick={()=>setOpen(false)} className="flex items-center justify-between border-b border-slate-100 px-2 py-3 font-semibold last:border-0" key={to} to={to}><span>{label}</span><Icon name="arrow-right" className="size-4 text-slate-400"/></NavLink>)}</nav></div>}
    </header><main><Outlet/></main><Footer/>
  </div>
}
