import type { Category, Order, Product, Referral, User, Wallet, WalletTransaction } from '../types'
export const categories:Category[]=[{id:'category-streaming',name:'Streaming',slug:'streaming'}]
export const products:Product[]=[{id:'product-1',name:'Premium Streaming Access',slug:'premium-streaming-access',description:'A mock product for frontend development.',price:12.99,currency:'USD',categoryId:'category-streaming',available:true}]
export const currentUser:User={id:'user-1',name:'Alex Morgan',email:'alex@example.com'}
export const orders:Order[]=[{id:'order-1',reference:'SUB-1001',items:[{product:products[0],quantity:1}],total:12.99,currency:'USD',status:'completed',createdAt:'2026-01-15T12:00:00.000Z'}]
export const wallet:Wallet={id:'wallet-1',userId:currentUser.id,balance:24.5,currency:'USD'}
export const walletTransactions:WalletTransaction[]=[{id:'transaction-1',walletId:wallet.id,type:'credit',amount:24.5,description:'Mock wallet credit',createdAt:'2026-01-14T12:00:00.000Z'}]
export const referrals:Referral[]=[{id:'referral-1',referrerId:currentUser.id,referredEmail:'friend@example.com',status:'invited',createdAt:'2026-01-16T12:00:00.000Z'}]
