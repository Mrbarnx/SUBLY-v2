import { useLocation } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Container } from '../components/layout/Container'
export function PlaceholderPage({title}:{title:string}){const {pathname}=useLocation();return <Container className="py-12 sm:py-16"><Card className="mx-auto max-w-2xl"><p className="text-sm font-semibold text-primary">Planned route</p><h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1><p className="mt-3 break-words text-slate-600">Placeholder for <code className="rounded bg-slate-100 px-1.5 py-0.5">{pathname}</code>. Screen design will be added in a future batch.</p></Card></Container>}
