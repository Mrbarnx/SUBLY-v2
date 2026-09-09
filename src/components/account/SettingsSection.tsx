import type { ReactNode } from 'react'
export function SettingsSection({title,children,danger=false}:{title:string;children:ReactNode;danger?:boolean}){return <section className={`rounded-card border bg-white ${danger?'border-red-200':'border-border'}`}><h2 className="border-b border-border p-5 text-xl font-bold">{title}</h2><div className="p-5">{children}</div></section>}
