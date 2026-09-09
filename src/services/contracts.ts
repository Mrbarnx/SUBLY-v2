import type { Order, Product, Referral, User, Wallet, WalletTransaction } from '../types'
export interface ProductService { list():Promise<Product[]>; getBySlug(slug:string):Promise<Product|null> }
export interface OrderService { list():Promise<Order[]>; getById(id:string):Promise<Order|null> }
export interface AccountService { getCurrentUser():Promise<User>; getReferrals():Promise<Referral[]> }
export interface WalletService { getWallet():Promise<Wallet>; listTransactions():Promise<WalletTransaction[]> }
