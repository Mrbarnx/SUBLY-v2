import type { ReactNode, SVGProps } from 'react'
import { cn } from '../../lib/cn'

export type IconName = 'alert-triangle'|'arrow-left'|'arrow-right'|'bank'|'box'|'briefcase'|'cart'|'check'|'chevron-down'|'circle-check'|'circle-x'|'clock'|'code'|'copy'|'credit-card'|'file-check'|'filter'|'graduation-cap'|'grid'|'headphones'|'info'|'lock'|'mail'|'megaphone'|'menu'|'message-circle'|'minus'|'package'|'palette'|'plus'|'search'|'shield-check'|'sparkles'|'star'|'tag'|'trash'|'truck'|'user'|'wallet'|'x'|'zap'

const paths: Record<IconName, ReactNode> = {
  'alert-triangle': <><path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4M12 17h.01"/></>,
  'arrow-left': <><path d="m12 19-7-7 7-7M19 12H5"/></>, 'arrow-right': <><path d="M5 12h14m-7-7 7 7-7 7"/></>,
  bank: <><path d="m3 10 9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18"/></>,
  box: <><path d="m21 8-9 5-9-5m9 5v8"/><path d="M3 8l9-5 9 5v8l-9 5-9-5Z"/></>,
  briefcase: <><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 12v.01"/></>,
  cart: <><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 4h2l2.4 11.3a2 2 0 0 0 2 1.7h8.8a2 2 0 0 0 2-1.6L22 8H6"/></>,
  check: <path d="m5 12 4 4L19 6"/>, 'chevron-down': <path d="m6 9 6 6 6-6"/>,
  'circle-check': <><circle cx="12" cy="12" r="10"/><path d="m8 12 2.7 2.7L16 9"/></>,
  'circle-x': <><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6 6 6"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  code: <><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14"/></>,
  copy: <><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
  'credit-card': <><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20M6 15h2"/></>,
  'file-check': <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6m-11 7 2 2 4-4"/></>,
  filter: <path d="M4 5h16l-6 7v5l-4 2v-7Z"/>,
  'graduation-cap': <><path d="m2 10 10-5 10 5-10 5Zm4 2v5c3 2 9 2 12 0v-5"/></>,
  grid: <><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></>,
  headphones: <><path d="M4 14a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 1M4 14v5a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 1Z"/></>,
  info: <><circle cx="12" cy="12" r="10"/><path d="M12 11v5M12 8h.01"/></>,
  lock: <><rect width="16" height="12" x="4" y="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7L2 7"/></>,
  megaphone: <><path d="m3 11 18-5v12L3 14Zm8.6 5.4L13 21H7l-1.3-6"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  'message-circle': <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.9L3 21l1.9-4A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
  minus: <path d="M5 12h14"/>,
  package: <><path d="m16.5 9.4-9-5.2M3.3 7 12 12l8.7-5M12 22V12"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/></>,
  palette: <><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4a2 2 0 0 1 2-2H17a5 5 0 0 0 5-5c0-4.4-4.5-8.2-10-8.2Z"/><path d="M8 8h.01M12 6h.01M16 8h.01M7 12h.01"/></>,
  plus: <path d="M12 5v14M5 12h14"/>, search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  'shield-check': <><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="m9 12 2 2 4-4"/></>,
  sparkles: <path d="m12 3-1.2 3.2L8 7.5l2.8 1.3L12 12l1.2-3.2L16 7.5l-2.8-1.3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8ZM19 13l-.8 2.2L16 16l2.2.8L19 19l.8-2.2L22 16l-2.2-.8Z"/>,
  star: <path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3-5.9 3 1.1-6.4L2.5 9 9 8Z"/>,
  tag: <><path d="M20.6 13.6 11 4H4v7l9.6 9.6a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8Z"/><path d="M7.5 7.5h.01"/></>,
  trash: <><path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 5v5m4-5v5"/></>,
  truck: <><path d="M10 17h4V5H2v12h3m9-9h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></>,
  wallet: <><path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6m14 7h4"/></>,
  x: <path d="m18 6-12 12M6 6l12 12"/>, zap: <path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>,
}

export function Icon({name,className,...props}: SVGProps<SVGSVGElement>&{name:IconName}) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn('size-5 shrink-0',className)} {...props}>{paths[name]}</svg>
}
