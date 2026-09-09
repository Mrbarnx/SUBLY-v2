import type { ReactNode } from 'react'
export function AccountPageHeader({title,description,action}:{title:string;description:string;action?:ReactNode}){return <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h1 className="text-3xl font-extrabold">{title}</h1><p className="mt-1 text-slate-600">{description}</p></div>{action}</header>}
