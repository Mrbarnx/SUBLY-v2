import { useEffect, useRef, type ReactNode } from 'react'
import { Icon } from '../ui/Icon'

interface MobileSheetProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function MobileSheet({ open, onClose, title, children }: MobileSheetProps) {
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => element.offsetParent !== null)
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        className="absolute inset-0 bg-navy/65"
        onClick={onClose}
        aria-label="Close menu backdrop"
      />
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        className="absolute inset-y-0 right-0 w-[min(22rem,92vw)] overflow-y-auto border-l border-slate-200 bg-white p-5 shadow-dialog"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id="sheet-title" className="text-xl font-bold">{title}</h2>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-card border border-slate-200"
          >
            <Icon name="x" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </section>
    </div>
  )
}
