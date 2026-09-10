import type { ReactNode } from 'react'
import { Icon, type IconName } from '../ui/Icon'

export function AuthStatusPanel({tone='info',icon,title,description,children}:{tone?:'info'|'success'|'error';icon:IconName;title:string;description:string;children?:ReactNode}) {
  const styles = tone === 'success'
    ? 'border-teal/40 bg-teal/10 text-teal'
    : tone === 'error'
      ? 'border-red-200 bg-red-50 text-danger'
      : 'border-blue-200 bg-blue-50 text-primary'

  return (
    <section className="mx-auto flex w-full max-w-3xl items-center px-4 py-10 sm:px-6 sm:py-16">
      <div className="w-full border border-slate-200 bg-white px-5 py-9 text-center shadow-sm sm:px-10 sm:py-12">
        <span className={`mx-auto grid size-16 place-items-center rounded-full border ${styles}`}><Icon name={icon} className="size-8" strokeWidth={1.8} /></span>
        <h1 className="mt-5 text-2xl font-extrabold sm:text-3xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
        {children && <div className="mx-auto mt-7 max-w-md">{children}</div>}
        <p className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500"><Icon name="shield-check" className="size-4" />Subly keeps recovery and verification steps clear and private.</p>
      </div>
    </section>
  )
}
