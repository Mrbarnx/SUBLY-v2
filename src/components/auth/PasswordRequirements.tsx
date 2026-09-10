import { Icon } from '../ui/Icon'

export function PasswordRequirements({password,confirmation}:{password:string;confirmation?:string}) {
  const rules:[string,boolean][] = [
    ['At least 8 characters',password.length>=8],
    ['One uppercase letter',/[A-Z]/.test(password)],
    ['One number',/\d/.test(password)],
    ...(confirmation===undefined?[]:[['Passwords match',password.length>0&&password===confirmation] as [string,boolean]]),
  ]
  return <ul className="grid gap-2 text-xs sm:grid-cols-2">{rules.map(([label,valid])=><li key={label} className={`flex items-center gap-2 ${valid?'font-medium text-emerald-700':'text-slate-500'}`}><Icon name={valid?'circle-check':'circle-x'} className="size-4" />{label}</li>)}</ul>
}
