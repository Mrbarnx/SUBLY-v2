import { Link, Outlet } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SublyLogo } from '../storefront/SublyLogo'
import { Icon } from '../ui/Icon'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-navy">
      <header className="border-b border-slate-200 bg-white">
        <Container className="flex min-h-16 items-center justify-between gap-4">
          <SublyLogo />
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-primary">
            <Icon name="arrow-left" className="size-4" />
            <span className="hidden min-[360px]:inline">Back to store</span>
          </Link>
        </Container>
      </header>
      <main className="flex min-w-0 flex-1"><Outlet /></main>
      <footer className="border-t border-slate-200 bg-white">
        <Container className="flex flex-col gap-3 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Subly</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Authentication footer">
            <Link className="hover:text-primary" to="/privacy-policy">Privacy</Link>
            <Link className="hover:text-primary" to="/terms-of-service">Terms</Link>
            <Link className="hover:text-primary" to="/data-deletion">Data deletion</Link>
            <a className="hover:text-primary" href="mailto:support@subly.example">Support</a>
          </nav>
        </Container>
      </footer>
    </div>
  )
}
