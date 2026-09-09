export interface Category { id: string; name: string; slug: string; icon: string }
export type DeliveryType = 'ready-made' | 'assisted'
export interface Product { id: string; name: string; slug: string; description: string; price: number; originalPrice?: number; currency: string; categoryId: string; imageUrl?: string; logoText: string; logoColor: string; available: boolean; stock?: number; rating: number; reviewCount: number; deliveryMinutes: number; deliveryType: DeliveryType; validity: string; features: string[] }
export interface CartItem { product: Product; quantity: number }
export type OrderStatus='pending'|'under-review'|'processing'|'completed'|'refunded'|'cancelled'|'failed'
export type PaymentMethod = 'bank-transfer' | 'usdt' | 'subly-points' | 'contact' | 'mock-failure'
export interface OrderCustomer { email: string }
export interface Order { id: string; reference: string; items: CartItem[]; subtotal: number; discount: number; total: number; currency: string; customer: OrderCustomer; paymentMethod: PaymentMethod; status: OrderStatus; createdAt: string }
export interface User { id: string; name: string; email: string; phone?: string; country?: string; language?: string; currency?: string; avatarUrl?: string }
export interface Wallet { id: string; userId: string; balance: number; currency: string }
export type WalletTransactionType='credit'|'debit'
export interface WalletTransaction { id: string; walletId: string; type: WalletTransactionType; amount: number; description: string; method: string; status: 'pending'|'confirmed'|'completed'|'failed'; createdAt: string }
export interface Referral { id: string; referrerId: string; referredEmail: string; status: 'invited'|'joined'|'qualified'|'rewarded'|'ineligible'; rewardAmount?: number; createdAt: string }
