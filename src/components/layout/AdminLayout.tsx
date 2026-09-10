import { useState } from 'react'
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom'
import { SublyLogo } from '../storefront/SublyLogo'
import { Icon, type IconName } from '../ui/Icon'
import { MobileSheet } from '../feedback/MobileSheet'

const links:{tab:string;label:string;icon:IconName}[]=[
  {tab:'overview',label:'Overview',icon:'grid'}, {tab:'products',label:'Products',icon:'box'},
  {tab:'orders',label:'Orders',icon:'package'}, {tab:'inventory',label:'Inventory',icon:'briefcase'},
  {tab:'fulfillment',label:'Fulfillment',icon:'truck'},
]

function AdminNav({onNavigate}:{onNavigate?:()=>void}){
  const [params]=useSearchParams(); const active=params.get('tab')??'overview'
  return <nav className="grid gap-1" aria-label="Admin sections">{links.map(link=><NavLink key={link.tab} to={`/admin?tab=${link.tab}`} onClick={onNavigate} className={`flex min-h-11 items-center gap-3 rounded-card border-l-2 px-3 text-sm font-semibold transition ${active===link.tab?'border-blue-400 bg-blue-900 text-white':'border-transparent text-blue-100 hover:bg-blue-950 hover:text-white'}`}><Icon name={link.icon}/>{link.label}</NavLink>)}</nav>
}

export function AdminLayout(){
  const [open,setOpen]=useState(false)
  return <div className="min-h-screen bg-white md:grid md:grid-cols-[14.5rem_minmax(0,1fr)]">
    <aside className="hidden bg-navy text-white md:sticky md:top-0 md:flex md:h-screen md:flex-col"><div className="border-b border-white/10 px-5 py-5"><div className="rounded-card bg-white p-2"><SublyLogo/></div><p className="mt-4 text-[11px] font-bold uppercase tracking-[.14em] text-blue-200">Admin workspace</p></div><div className="px-3 py-4"><AdminNav/></div><div className="mt-auto border-t border-white/10 p-4"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-primary font-bold">AM</span><div><b className="text-sm">Alex Morgan</b><p className="text-xs text-blue-200">Owner · Demo admin</p></div></div><Link to="/" className="mt-4 flex items-center gap-2 px-2 py-2 text-sm font-semibold text-blue-100"><Icon name="arrow-left" className="size-4"/>Back to Subly</Link></div></aside>
    <div className="min-w-0"><header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6"><button onClick={()=>setOpen(true)} className="grid size-10 place-items-center rounded-card border border-slate-200 md:hidden" aria-label="Open admin navigation"><Icon name="menu"/></button><span className="font-semibold">Admin operations</span><span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700"><Icon name="shield-check" className="size-4"/><span className="hidden min-[390px]:inline">Frontend verified</span></span></header><main className="min-w-0 p-4 sm:p-6 lg:p-8"><div className="mx-auto max-w-[90rem]"><Outlet/></div></main></div>
    <MobileSheet open={open} onClose={()=>setOpen(false)} title="Admin workspace"><div className="rounded-card bg-navy p-3"><AdminNav onNavigate={()=>setOpen(false)}/></div><Link to="/" onClick={()=>setOpen(false)} className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary"><Icon name="arrow-left" className="size-4"/>Back to Subly</Link></MobileSheet>
  </div>
}
