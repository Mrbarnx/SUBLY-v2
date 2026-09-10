import { Link } from 'react-router-dom'
import { categories,products } from '../data/mockData'
import { Container } from '../components/layout/Container'
import { CategoryCard } from '../components/storefront/CategoryCard'
import { HeroWorkflow } from '../components/storefront/HeroWorkflow'
import { Newsletter } from '../components/storefront/Newsletter'
import { ProductCard } from '../components/storefront/ProductCard'
import { Icon, type IconName } from '../components/ui/Icon'

const benefits:{icon:IconName;title:string;description:string}[]=[
  {icon:'shield-check',title:'Verified access',description:'Every listing is reviewed so you know exactly what you are buying.'},
  {icon:'clock',title:'Clear delivery times',description:'Realistic fulfilment windows are visible before checkout.'},
  {icon:'lock',title:'Protected checkout',description:'Your order information stays private and securely handled.'},
  {icon:'headphones',title:'Human support',description:'Get practical help before and after your purchase.'},
]
const trust:{icon:IconName;value:string;label:string}[]=[
  {icon:'user',value:'10K+',label:'customers served'},{icon:'grid',value:'50+',label:'digital tools'},{icon:'headphones',value:'24/7',label:'support access'},{icon:'shield-check',value:'Secure',label:'checkout flow'},
]

export function HomePage(){return <>
  <section className="overflow-hidden bg-[linear-gradient(120deg,#06142f_0%,#082867_52%,#0b56d9_100%)] text-white">
    <Container className="grid gap-12 py-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:py-[72px]">
      <div>
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-soft-teal"><Icon name="shield-check" className="size-4"/> Trusted digital access</p>
        <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">Premium digital tools.<br/><span className="text-blue-200">Simpler access.</span></h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">Shop trusted AI, design, productivity and developer tools with clear delivery, secure order handling and support at every step.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link to="/shop" className="inline-flex items-center gap-2 rounded-card bg-white px-5 py-3 font-bold text-primary shadow-lg transition hover:bg-blue-50">Explore tools <Icon name="arrow-right" className="size-4"/></Link><Link to="/how-it-works" className="rounded-card border border-white/40 px-5 py-3 font-bold text-white transition hover:bg-white/10">How it works</Link></div>
        <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4 text-xs text-blue-100 sm:grid-cols-4">{[['zap','Fast delivery'],['lock','Secure handling'],['shield-check','Buyer protection'],['headphones','Real support']].map(([icon,label])=><span key={label} className="flex items-center gap-2"><Icon name={icon as IconName} className="size-4 text-soft-teal"/>{label}</span>)}</div>
      </div>
      <HeroWorkflow/>
    </Container>
  </section>
  <Container className="relative -mt-5 grid grid-cols-2 divide-x divide-y divide-slate-100 rounded-card border border-slate-200 bg-white py-2 shadow-[0_16px_40px_rgba(15,23,42,.1)] lg:grid-cols-4 lg:divide-y-0">{trust.map(item=><div key={item.label} className="flex items-center gap-3 p-4 sm:justify-center"><span className="grid size-9 place-items-center rounded-md bg-blue-50 text-primary"><Icon name={item.icon} className="size-5"/></span><div><strong className="block text-lg">{item.value}</strong><span className="text-xs text-slate-500">{item.label}</span></div></div>)}</Container>
  <Container className="py-14">
    <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">Explore by need</p><h2 className="mt-2 text-2xl font-bold">Browse categories</h2></div><Link to="/shop" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">View all <Icon name="arrow-right" className="size-4"/></Link></div>
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">{categories.map(c=><CategoryCard key={c.id} category={c}/>)}</div>
    <div className="mt-14 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">Customer favourites</p><h2 className="mt-2 text-2xl font-bold">Popular tools</h2></div><Link to="/shop" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Shop all <Icon name="arrow-right" className="size-4"/></Link></div>
    <div className="mt-6 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-4">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>
  </Container>
  <section className="border-y border-slate-200 bg-slate-50/60"><Container className="py-14"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">Buy with confidence</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">Everything you need for a clearer purchase</h2><p className="mt-3 text-slate-600">Subly puts product details, delivery expectations and support in one consistent experience.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(item=><article key={item.title} className="border-l-2 border-blue-100 bg-white p-5 shadow-sm"><Icon name={item.icon} className="size-7 text-primary"/><h3 className="mt-4 font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></article>)}</div></Container></section>
  <Container className="py-14"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">Community feedback</p><h2 className="mt-2 text-2xl font-bold">Trusted for everyday digital access</h2></div><div className="mt-7 grid gap-4 md:grid-cols-3">{[['Arjun Patel','Developer','Fast delivery, fair prices, and support that actually replies.'],['Maria Lopez','Designer','A smooth place to get the design tools I use in one place.'],['Daniel Kim','Student','Clear expectations and quick access made the whole process easy.']].map(([name,role,quote])=><blockquote key={name} className="border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><b>{name}</b><p className="text-xs text-slate-500">{role}</p></div><span className="flex items-center gap-1 text-xs font-semibold"><Icon name="star" className="size-4 fill-amber-400 stroke-amber-400"/>5.0</span></div><p className="mt-4 text-sm leading-6 text-slate-700">“{quote}”</p></blockquote>)}</div><div className="mt-12"><Newsletter/></div></Container>
</>}
