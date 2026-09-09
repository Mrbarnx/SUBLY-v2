import { Link } from 'react-router-dom'
import type { Category } from '../../types'
export function CategoryCard({category}:{category:Category}){return <Link to={`/shop?category=${category.slug}`} className="grid min-h-36 place-items-center rounded-card border border-border bg-white p-4 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-card"><span className="text-3xl font-bold text-primary" aria-hidden="true">{category.icon}</span><span className="font-bold">{category.name}</span><span className="text-xs text-slate-500">Browse tools</span></Link>}
