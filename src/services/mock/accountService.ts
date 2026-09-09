import { currentUser, referrals } from '../../data/mockData'
import type { AccountService } from '../contracts'
export const accountService:AccountService={async getCurrentUser(){return structuredClone(currentUser)},async getReferrals(){return structuredClone(referrals)}}
