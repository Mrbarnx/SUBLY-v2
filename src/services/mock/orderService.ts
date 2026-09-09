import { orders } from '../../data/mockData'
import type { Order } from '../../types'
import type { CreateOrderPayload, OrderService } from '../contracts'
let lastOrder:Order|null=null;let lastAttempt:Order|null=null
function makeOrder(payload:CreateOrderPayload,status:Order['status']):Order{const stamp=Date.now();const discount=payload.discount??0;return{id:`order-${stamp}`,reference:`SUB-${String(stamp).slice(-6)}`,items:structuredClone(payload.items),subtotal:payload.subtotal,discount,total:Math.max(0,payload.subtotal-discount),currency:'USD',customer:{email:payload.customer.email},paymentMethod:payload.paymentMethod,status,createdAt:new Date().toISOString()}}
export class MockOrderError extends Error{constructor(){super('The demo order could not be submitted.');this.name='MockOrderError'}}
export const orderService:OrderService={async list(){return structuredClone(orders)},async getById(id){return structuredClone(orders.find(order=>order.id===id)??null)},async createOrder(payload){await new Promise(resolve=>window.setTimeout(resolve,500));if(payload.paymentMethod==='mock-failure'){lastAttempt=makeOrder(payload,'failed');throw new MockOrderError()}const order=makeOrder(payload,'pending');lastOrder=order;lastAttempt=null;return structuredClone(order)},getLastOrder(){return structuredClone(lastOrder)},getLastAttempt(){return structuredClone(lastAttempt)}}
