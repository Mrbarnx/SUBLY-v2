import { useState } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Icon } from '../ui/Icon'

export function PasswordField({label,placeholder='Enter your password',registration,error}:{label:string;placeholder?:string;registration:UseFormRegisterReturn;error?:string}) {
  const [visible,setVisible]=useState(false)
  return (
    <div>
      <label className="text-sm font-semibold text-slate-800" htmlFor={registration.name}>{label}</label>
      <div className="relative mt-2">
        <input id={registration.name} type={visible?'text':'password'} placeholder={placeholder} {...registration} aria-invalid={!!error} aria-describedby={error?`${registration.name}-error`:undefined} className={`min-h-11 w-full rounded-card border bg-white px-3 pr-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 ${error?'border-red-400':'border-slate-300'}`}/>
        <button type="button" onClick={()=>setVisible(v=>!v)} className="absolute inset-y-0 right-0 grid w-11 place-items-center text-slate-500 transition hover:text-primary" aria-label={`${visible?'Hide':'Show'} ${label.toLowerCase()}`}>
          <Icon name={visible?'eye-off':'eye'} className="size-5" />
        </button>
      </div>
      {error&&<p id={`${registration.name}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-danger"><Icon name="circle-x" className="size-3.5" />{error}</p>}
    </div>
  )
}
