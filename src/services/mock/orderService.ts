import { orders } from '../../data/mockData'
import type { OrderService } from '../contracts'
export const orderService:OrderService={async list(){return structuredClone(orders)},async getById(id){return structuredClone(orders.find(order=>order.id===id)??null)}}
