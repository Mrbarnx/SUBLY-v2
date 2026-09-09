import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
export function NotFoundPage(){return <main><Container className="flex min-h-screen flex-col items-center justify-center py-12 text-center"><p className="font-semibold text-primary">404</p><h1 className="mt-2 text-3xl font-bold">Page not found</h1><p className="mt-3 text-slate-600">The page you requested does not exist.</p><Link to="/" className="mt-6 rounded-card bg-primary px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700">Return home</Link></Container></main>}
