import type { ReactNode } from 'react'
import { Dialog } from './Dialog'
import { Button } from '../ui/Button'
export function ConfirmationDialog({open,onClose,onConfirm,title,description,confirmLabel='Confirm',destructive=false,loading=false,children}:{open:boolean;onClose:()=>void;onConfirm:()=>void;title:string;description:string;confirmLabel?:string;destructive?:boolean;loading?:boolean;children?:ReactNode}){return <Dialog open={open} onClose={onClose} title={title} description={description}>{children}<div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button variant={destructive?'danger':'primary'} loading={loading} onClick={onConfirm}>{confirmLabel}</Button></div></Dialog>}
