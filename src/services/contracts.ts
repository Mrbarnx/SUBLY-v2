import type { CartItem, Order, PaymentMethod, Product, Referral, User, Wallet, WalletTransaction } from '../types'
export interface CreateOrderPayload { items:CartItem[]; customer:{email:string}; paymentMethod:PaymentMethod; subtotal:number; discount?:number }
export interface ProductService { list():Promise<Product[]>; getBySlug(slug:string):Promise<Product|null> }
export interface OrderService { list():Promise<Order[]>; getById(id:string):Promise<Order|null>; createOrder(payload:CreateOrderPayload):Promise<Order>; getLastOrder():Order|null; getLastAttempt():Order|null }
export interface AccountService { getCurrentUser():Promise<User>; getReferrals():Promise<Referral[]> }
export interface WalletService { getWallet():Promise<Wallet>; listTransactions():Promise<WalletTransaction[]> }
