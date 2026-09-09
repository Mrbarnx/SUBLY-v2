import type { Category, Order, Product, Referral, User, Wallet, WalletTransaction } from '../types'
export const categories:Category[]=[
  {id:'ai',name:'AI Tools',slug:'ai-tools',icon:'✦'},{id:'design',name:'Design Tools',slug:'design-tools',icon:'◇'},{id:'developer',name:'Developer Tools',slug:'developer-tools',icon:'</>'},{id:'productivity',name:'Productivity',slug:'productivity',icon:'✓'},{id:'student',name:'Student Essentials',slug:'student-essentials',icon:'⌂'},{id:'marketing',name:'Marketing Tools',slug:'marketing-tools',icon:'◁'},{id:'security',name:'Security & VPN',slug:'security-vpn',icon:'▣'},
]
const product=(value:Partial<Product>&Pick<Product,'id'|'name'|'slug'|'price'|'categoryId'|'logoText'|'logoColor'>):Product=>({description:`Secure premium access to ${value.name}, delivered with clear setup instructions and responsive support.`,currency:'USD',available:true,stock:24,rating:4.8,reviewCount:1245,deliveryMinutes:5,deliveryType:'ready-made',validity:'30 days',features:['Premium account access','Fast, clear delivery','Setup guidance included','Support when you need it'],...value})
export const products:Product[]=[
  product({id:'chatgpt',name:'ChatGPT Plus',slug:'chatgpt-plus',price:19.99,originalPrice:24.99,categoryId:'ai',logoText:'◎',logoColor:'#10a37f',reviewCount:3241}),
  product({id:'canva',name:'Canva Pro',slug:'canva-pro',price:12.99,originalPrice:15.99,categoryId:'design',logoText:'Canva',logoColor:'#7c3aed',deliveryMinutes:15}),
  product({id:'capcut',name:'CapCut Pro',slug:'capcut-pro',price:9.99,originalPrice:11.99,categoryId:'design',logoText:'✕',logoColor:'#111827',rating:4.7}),
  product({id:'grammarly',name:'Grammarly Premium',slug:'grammarly-premium',price:11.66,originalPrice:13.99,categoryId:'productivity',logoText:'G',logoColor:'#059669',rating:4.6}),
  product({id:'notion',name:'Notion Plus',slug:'notion-plus',price:8,originalPrice:10,categoryId:'productivity',logoText:'N',logoColor:'#111827',rating:4.7}),
  product({id:'copilot',name:'GitHub Copilot',slug:'github-copilot',price:10,categoryId:'developer',logoText:'◉',logoColor:'#334155'}),
  product({id:'coursera',name:'Coursera Plus',slug:'coursera-plus',price:39,originalPrice:59,categoryId:'student',logoText:'coursera',logoColor:'#2563eb',deliveryMinutes:30,deliveryType:'assisted'}),
  product({id:'nordvpn',name:'NordVPN Standard',slug:'nordvpn-standard',price:3.49,originalPrice:4.99,categoryId:'security',logoText:'▲',logoColor:'#2563eb',reviewCount:2341}),
  product({id:'figma',name:'Figma Professional',slug:'figma-professional',price:12,originalPrice:15,categoryId:'design',logoText:'F',logoColor:'#ef4444'}),
  product({id:'microsoft',name:'Microsoft 365 Personal',slug:'microsoft-365-personal',price:29.99,originalPrice:39.99,categoryId:'productivity',logoText:'⊞',logoColor:'#f97316',validity:'1 year'}),
  product({id:'adobe',name:'Adobe Creative Cloud',slug:'adobe-creative-cloud',price:54.99,originalPrice:59.99,categoryId:'design',logoText:'CC',logoColor:'#f43f5e',deliveryType:'assisted'}),
  product({id:'youtube',name:'YouTube Premium',slug:'youtube-premium',price:11.99,categoryId:'marketing',logoText:'▶',logoColor:'#ef4444'}),
]
export const currentUser:User={id:'user-1',name:'Alex Morgan',email:'alex@example.com'}
export const orders:Order[]=[]
export const wallet:Wallet={id:'wallet-1',userId:currentUser.id,balance:24.5,currency:'USD'}
export const walletTransactions:WalletTransaction[]=[{id:'transaction-1',walletId:wallet.id,type:'credit',amount:24.5,description:'Mock wallet credit',createdAt:'2026-01-14T12:00:00.000Z'}]
export const referrals:Referral[]=[{id:'referral-1',referrerId:currentUser.id,referredEmail:'friend@example.com',status:'invited',createdAt:'2026-01-16T12:00:00.000Z'}]
