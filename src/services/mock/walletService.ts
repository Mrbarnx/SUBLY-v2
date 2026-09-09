import { wallet, walletTransactions } from '../../data/mockData'
import type { WalletService } from '../contracts'
export const walletService:WalletService={async getWallet(){return structuredClone(wallet)},async listTransactions(){return structuredClone(walletTransactions)}}
