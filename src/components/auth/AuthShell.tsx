import type { ReactNode } from 'react'
import { Container } from '../layout/Container'
import { Icon } from '../ui/Icon'

type Props = {
  eyebrow?: string
  title: string
  description: string
  children: ReactNode
  asideTitle?: string
  asideItems?: string[]
  compact?: boolean
}

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  asideTitle = 'Digital access, handled with care.',
  asideItems = ['Verified marketplace listings', 'Clear order updates', 'Support when you need it'],
  compact = false,
}: Props) {
  return (
    <Container className="grid min-w-0 flex-1 items-stretch px-0 md:grid-cols-[minmax(17rem,.78fr)_minmax(0,1.22fr)] lg:max-w-6xl lg:py-8">
      <aside className="relative hidden overflow-hidden bg-navy p-8 text-white md:flex md:flex-col md:justify-between lg:rounded-l-card lg:p-10">
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-primary/35 to-transparent" aria-hidden="true" />
        <div className="relative">
          <span className="grid size-11 place-items-center rounded-card border border-teal/30 bg-teal/10 text-teal">
            <Icon name="shield-check" className="size-6" />
          </span>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.14em] text-teal">{eyebrow ?? 'Welcome to Subly'}</p>
          <h2 className="mt-3 max-w-sm text-2xl font-extrabold leading-tight lg:text-3xl">{asideTitle}</h2>
          <div className="mt-8 grid gap-5">
            {asideItems.map(item => (
              <p key={item} className="flex items-center gap-3 text-sm text-blue-50">
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-teal/40 bg-teal/10 text-teal"><Icon name="check" className="size-3.5" /></span>
                <span className="font-semibold">{item}</span>
              </p>
            ))}
          </div>
        </div>
        <p className="relative mt-10 flex gap-3 border-t border-white/15 pt-6 text-xs leading-5 text-blue-100">
          <Icon name="lock" className="mt-0.5 size-4 text-teal" />
          Frontend demonstration only. No credentials are sent to an authentication provider.
        </p>
      </aside>

      <section className="flex min-w-0 items-center bg-white px-4 py-8 min-[390px]:px-6 sm:px-10 md:py-10 lg:rounded-r-card lg:border lg:border-l-0 lg:border-slate-200 lg:px-12">
        <div className={`mx-auto w-full ${compact ? 'max-w-md' : 'max-w-xl'}`}>
          {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[.14em] text-primary md:hidden">{eyebrow}</p>}
          <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">{title}</h1>
          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
          <div className="mt-7">{children}</div>
        </div>
      </section>
    </Container>
  )
}
