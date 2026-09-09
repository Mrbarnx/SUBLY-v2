export interface Category { id: string; name: string; slug: string }
export interface Product { id: string; name: string; slug: string; description: string; price: number; currency: string; categoryId: string; imageUrl?: string; available: boolean }
export interface CartItem { product: Product; quantity: number }
export type OrderStatus='pending'|'completed'|'failed'
export interface Order { id: string; reference: string; items: CartItem[]; total: number; currency: string; status: OrderStatus; createdAt: string }
export interface User { id: string; name: string; email: string; avatarUrl?: string }
export interface Wallet { id: string; userId: string; balance: number; currency: string }
export type WalletTransactionType='credit'|'debit'
export interface WalletTransaction { id: string; walletId: string; type: WalletTransactionType; amount: number; description: string; createdAt: string }
export interface Referral { id: string; referrerId: string; referredEmail: string; status: 'invited'|'joined'|'rewarded'; rewardAmount?: number; createdAt: string }
