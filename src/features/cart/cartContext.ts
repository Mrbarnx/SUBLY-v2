import { createContext } from 'react'
import type { CartItem, Product } from '../../types'
export interface CartContextValue { items:CartItem[]; itemCount:number; subtotal:number; addItem:(product:Product,quantity?:number)=>void; updateQuantity:(productId:string,quantity:number)=>void; removeItem:(productId:string)=>void; clear:()=>void }
export const CartContext=createContext<CartContextValue|null>(null)
