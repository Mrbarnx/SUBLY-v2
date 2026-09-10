import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { SublyLogo } from '../storefront/SublyLogo'
import { Icon, type IconName } from '../ui/Icon'
import { MobileSheet } from '../feedback/MobileSheet'

const links:{to:string;icon:IconName;label:string}[]=[
  {to:'/dashboard',icon:'home',label:'Overview'},
  {to:'/orders',icon:'package',label:'Orders'},
  {to:'/wallet',icon:'wallet',label:'Wallet'},
  {to:'/referrals',icon:'users',label:'Referrals'},
  {to:'/profile',icon:'user',label:'Profile'},
  {to:'/settings',icon:'settings',label:'Settings'},
]

function AccountNav({onNavigate}:{onNavigate?:()=>void}){
  return <nav aria-label="Account" className="grid gap-1">{links.map(link=><NavLink key={link.to} to={link.to} onClick={onNavigate} className={({isActive})=>`flex min-h-11 items-center gap-3 rounded-card border-l-2 px-3 text-sm font-semibold transition ${isActive?'border-primary bg-blue-50 text-primary':'border-transparent text-slate-600 hover:bg-slate-50 hover:text-navy'}`}><Icon name={link.icon} className="size-5"/>{link.label}</NavLink>)}</nav>
}

export function AccountLayout(){
  const [menuOpen,setMenuOpen]=useState(false)
  return <div className="min-h-screen bg-white md:grid md:grid-cols-[14rem_minmax(0,1fr)]">
    <aside className="hidden border-r border-slate-200 bg-white md:sticky md:top-0 md:flex md:h-screen md:flex-col">
      <div className="px-5 py-6"><SublyLogo/></div>
      <div className="px-3"><AccountNav/></div>
      <div className="mt-auto border-t border-slate-200 p-4"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-blue-50 text-sm font-bold text-primary">AM</span><div className="min-w-0"><b className="block truncate text-sm">Alex Morgan</b><p className="text-xs text-slate-500">Customer account</p></div></div><NavLink to="/login" className="mt-4 flex items-center gap-2 rounded-card px-2 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"><Icon name="log-out" className="size-4"/>Log out</NavLink></div>
    </aside>
    <div className="min-w-0">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6"><div className="md:hidden"><SublyLogo/></div><span className="hidden text-sm font-medium text-slate-500 md:block">Customer account</span><div className="flex items-center gap-2"><Link to="/shop" className="hidden rounded-card bg-primary px-4 py-2 text-sm font-semibold text-white sm:inline-flex">Browse products</Link><button onClick={()=>setMenuOpen(true)} className="grid size-10 place-items-center rounded-card border border-slate-200 md:hidden" aria-label="Open account navigation"><Icon name="menu"/></button></div></header>
      <main className="min-w-0 p-4 sm:p-6 lg:p-8"><div className="mx-auto max-w-7xl"><Outlet/></div></main>
    </div>
    <MobileSheet open={menuOpen} onClose={()=>setMenuOpen(false)} title="Your account"><AccountNav onNavigate={()=>setMenuOpen(false)}/><div className="mt-5 border-t border-slate-200 pt-5"><Link to="/shop" onClick={()=>setMenuOpen(false)} className="flex min-h-11 items-center justify-center rounded-card bg-primary px-4 font-semibold text-white">Browse products</Link><Link to="/login" onClick={()=>setMenuOpen(false)} className="mt-2 flex min-h-11 items-center gap-2 px-3 text-sm font-semibold text-slate-600"><Icon name="log-out" className="size-4"/>Log out</Link></div></MobileSheet>
  </div>
}
