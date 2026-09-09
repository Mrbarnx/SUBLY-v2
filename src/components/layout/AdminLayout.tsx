import { NavLink, Outlet } from 'react-router-dom'
import { Container } from './Container'
export function AdminLayout(){return <div className="min-h-screen bg-slate-100"><header className="bg-navy text-white"><Container className="flex min-h-16 items-center justify-between"><NavLink to="/" className="font-bold">Subly</NavLink><span>Admin</span></Container></header><Container className="py-6"><main><Outlet/></main></Container></div>}
