import { Icon } from '../ui/Icon'

const apps=[['openai','OpenAI'],['canva','Canva'],['capcut','CapCut'],['grammarly','Grammarly']] as const
const steps=[['shield-check','Verify payment'],['file-check','Process order'],['package','Prepare access'],['lock','Secure delivery']] as const

export function HeroWorkflow(){return <div className="relative mx-auto w-full max-w-[560px] py-3 lg:py-0">
  <div className="absolute inset-x-12 top-[34%] h-48 rounded-full bg-blue-400/20 blur-3xl"/>
  <div className="relative grid gap-3 sm:grid-cols-[1fr_11rem] sm:items-center">
    <div className="space-y-3">
      <section className="relative rounded-card border border-white/15 bg-white/[.08] p-4 shadow-[0_18px_40px_rgba(0,0,0,.18)] backdrop-blur-sm">
        <div className="flex items-start justify-between gap-3"><div className="flex gap-3"><span className="grid size-8 place-items-center rounded-full bg-white text-sm font-bold text-primary">1</span><div><p className="font-semibold">Customer order</p><p className="mt-1 text-xs text-blue-200">ChatGPT Plus · 1 month</p></div></div><span className="rounded bg-emerald-400/15 px-2 py-1 text-xs font-semibold text-emerald-200">Received</span></div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-blue-200"><span>Order SUB-846291</span><span>$19.99</span></div>
      </section>
      <div className="relative mx-4 rounded-card border border-blue-300/25 bg-[#0d2f77] p-4 shadow-[0_22px_55px_rgba(1,13,42,.35)]">
        <span className="absolute -top-3 left-8 h-3 border-l border-dashed border-blue-300/70"/>
        <div className="flex items-center gap-3 border-b border-white/10 pb-3"><span className="grid size-12 place-items-center overflow-hidden rounded-xl bg-white p-1.5"><img src="/brand/subly-mark.png" alt="" className="size-full object-contain"/></span><div><p className="text-xs font-semibold uppercase tracking-[.15em] text-teal">Subly workflow</p><p className="font-bold">Order processing</p></div><span className="ml-auto size-2 rounded-full bg-teal shadow-[0_0_0_5px_rgba(45,212,191,.12)]"/></div>
        <ol className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">{steps.map(([icon,label],index)=><li key={label} className="flex items-center gap-2 text-xs text-blue-50"><span className={`grid size-6 place-items-center rounded-full ${index<3?'bg-teal/15 text-soft-teal':'bg-blue-400/15 text-blue-200'}`}><Icon name={icon} className="size-3.5"/></span>{label}</li>)}</ol>
      </div>
      <section className="relative rounded-card border border-emerald-300/25 bg-emerald-400/[.09] p-4"><span className="absolute -top-3 left-8 h-3 border-l border-dashed border-teal/70"/><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-teal text-navy"><Icon name="check" className="size-5"/></span><div><p className="font-semibold">Access prepared</p><p className="mt-1 text-xs text-blue-200">Ready for secure delivery</p></div><span className="ml-auto text-xs font-semibold text-soft-teal">Completed</span></div></section>
    </div>
    <aside className="rounded-card border border-white/15 bg-white/[.07] p-3 backdrop-blur-sm sm:p-4"><p className="text-xs font-semibold uppercase tracking-[.12em] text-blue-200">Verified products</p><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-1">{apps.map(([id,name])=><div key={id} className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[.06] p-2"><span className="grid size-8 place-items-center rounded-md bg-white p-1.5"><img src={`/app-icon/${id}.svg`} alt="" className="size-full object-contain"/></span><span className="min-w-0 flex-1 truncate text-xs font-medium">{name}</span><Icon name="circle-check" className="size-4 text-soft-teal"/></div>)}</div></aside>
  </div>
</div>}
