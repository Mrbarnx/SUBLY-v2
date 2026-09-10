import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
export function ErrorState({title='Something went wrong',description,onRetry}:{title?:string;description:string;onRetry?:()=>void}){return <section role="alert" className="border border-red-200 bg-red-50 p-5"><div className="flex gap-3"><Icon name="circle-x" className="text-danger"/><div><h2 className="font-bold text-danger">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-700">{description}</p></div></div>{onRetry&&<Button className="mt-4" variant="secondary" onClick={onRetry}>Try again</Button>}</section>}
