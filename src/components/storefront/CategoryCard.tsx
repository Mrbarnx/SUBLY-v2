import { Link } from 'react-router-dom'
import type { Category } from '../../types'
import { Icon, type IconName } from '../ui/Icon'

const icons:Record<string,IconName>={ai:'sparkles',design:'palette',developer:'code',productivity:'briefcase',student:'graduation-cap',marketing:'megaphone',security:'shield-check'}
export function CategoryCard({category}:{category:Category}){return <Link to={'/shop?category='+category.slug} className="group flex min-h-32 flex-col justify-between rounded-card border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-card"><span className="grid size-10 place-items-center rounded-card bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon name={icons[category.id]??'grid'} className="size-5"/></span><span><strong className="block text-sm leading-tight">{category.name}</strong><span className="mt-1 block text-xs text-slate-500">Explore tools</span></span></Link>}
