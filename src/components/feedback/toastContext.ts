import { createContext } from 'react'
export type ToastTone='info'|'success'|'error'
export type ToastInput={message:string;tone?:ToastTone}
export type ToastItem=ToastInput&{id:number}
export const ToastContext=createContext<((toast:ToastInput)=>void)|null>(null)
