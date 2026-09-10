import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { useForm, useWatch, type UseFormRegisterReturn } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { AuthShell } from '../components/auth/AuthShell'
import { AuthStatusPanel } from '../components/auth/AuthStatusPanel'
import { PasswordField } from '../components/auth/PasswordField'
import { PasswordRequirements } from '../components/auth/PasswordRequirements'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

type FormErrors=Record<string,string>
function zodErrors(result:z.ZodSafeParseError<unknown>){return Object.fromEntries(result.error.issues.map(issue=>[String(issue.path[0]),issue.message]))}
const password=z.string().min(8,'Use at least 8 characters.').regex(/[A-Z]/,'Add one uppercase letter.').regex(/\d/,'Add one number.')
const fieldClass='mt-2 min-h-11 w-full rounded-card border border-slate-300 bg-white px-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 aria-[invalid=true]:border-red-400'

function Field({label,registration,error,type='text',placeholder,children}:{label:string;registration?:UseFormRegisterReturn;error?:string;type?:string;placeholder?:string;children?:ReactNode}){
  const id=registration?.name??label.toLowerCase().replaceAll(' ','-')
  return <div><label className="text-sm font-semibold text-slate-800" htmlFor={id}>{label}</label>{children??<input id={id} {...registration} type={type} placeholder={placeholder} aria-invalid={!!error} aria-describedby={error?`${id}-error`:undefined} className={fieldClass}/>} {error&&<p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-danger"><Icon name="circle-x" className="size-3.5"/>{error}</p>}</div>
}

const signupSchema=z.object({name:z.string().min(2,'Enter your full name.'),email:z.email('Enter a valid email.'),country:z.string().min(1),phone:z.string().min(7,'Enter a valid phone number.'),password,confirm:z.string(),terms:z.boolean().refine(Boolean,'Accept the terms to continue.')}).refine(data=>data.password===data.confirm,{path:['confirm'],message:'Passwords must match.'})
type SignupValues=z.input<typeof signupSchema>

export function SignupPage(){
  const navigate=useNavigate(); const [errors,setErrors]=useState<FormErrors>({})
  const {register,handleSubmit,control,formState:{isSubmitting}}=useForm<SignupValues>({defaultValues:{name:'',email:'',country:'Nigeria',phone:'',password:'',confirm:'',terms:false}})
  const pass=useWatch({control,name:'password'}); const confirm=useWatch({control,name:'confirm'})
  async function submit(values:SignupValues){setErrors({});const parsed=signupSchema.safeParse(values);if(!parsed.success){setErrors(zodErrors(parsed));return}await new Promise(r=>window.setTimeout(r,450));navigate(`/verify-otp?email=${encodeURIComponent(values.email)}`)}
  return <AuthShell title="Create your Subly account" description="Use one account to shop, track orders, and manage your digital access." asideTitle="A simpler way to manage digital tools.">
    <form onSubmit={handleSubmit(submit)} className="grid gap-4" noValidate>
      <Field label="Full name" registration={register('name')} error={errors.name} placeholder="Enter your full name"/>
      <Field label="Email address" registration={register('email')} error={errors.email} type="email" placeholder="you@example.com"/>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Country"><select id="country" {...register('country')} className={fieldClass}><option>Nigeria</option><option>Ghana</option><option>Kenya</option><option>United States</option><option>United Kingdom</option></select></Field>
        <Field label="Phone number" registration={register('phone')} error={errors.phone} type="tel" placeholder="801 234 5678"/>
      </div>
      <div className="grid gap-4 sm:grid-cols-2"><PasswordField label="Password" registration={register('password')} error={errors.password}/><PasswordField label="Confirm password" placeholder="Re-enter password" registration={register('confirm')} error={errors.confirm}/></div>
      <div className="rounded-card bg-slate-50 p-3"><PasswordRequirements password={pass} confirmation={confirm}/></div>
      <label className="flex items-start gap-3 text-sm leading-5 text-slate-600"><input type="checkbox" {...register('terms')} className="mt-0.5 size-4.5 rounded border-slate-300 accent-primary"/><span>I agree to the <Link className="font-semibold text-primary hover:underline" to="/terms-of-service">Terms of Service</Link> and <Link className="font-semibold text-primary hover:underline" to="/privacy-policy">Privacy Policy</Link>.</span></label>
      {errors.terms&&<p className="-mt-2 flex items-center gap-1.5 text-xs font-medium text-danger"><Icon name="circle-x" className="size-3.5"/>{errors.terms}</p>}
      <div className="flex items-center gap-2 rounded-card border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5 text-xs text-slate-500"><Icon name="shield-check" className="size-4"/>Human verification is disabled in this frontend demo.</div>
      <Button loading={isSubmitting} className="w-full">Create account</Button>
      <p className="text-center text-sm text-slate-600">Already have an account? <Link to="/login" className="font-semibold text-primary">Log in</Link></p>
    </form>
  </AuthShell>
}

const loginSchema=z.object({email:z.email('Enter a valid email.'),password:z.string().min(1,'Enter your password.'),remember:z.boolean()})
type LoginValues=z.infer<typeof loginSchema>
export function LoginPage(){
  const navigate=useNavigate(); const [errors,setErrors]=useState<FormErrors>({})
  const {register,handleSubmit,formState:{isSubmitting}}=useForm<LoginValues>({defaultValues:{email:'',password:'',remember:false}})
  async function submit(values:LoginValues){setErrors({});const parsed=loginSchema.safeParse(values);if(!parsed.success){setErrors(zodErrors(parsed));return}await new Promise(r=>window.setTimeout(r,400));navigate('/dashboard')}
  return <AuthShell compact eyebrow="Welcome back" title="Log in to Subly" description="Enter your account details to continue." asideTitle="Pick up exactly where you left off." asideItems={['Track active orders','Manage your digital access','Reach support quickly']}>
    <form onSubmit={handleSubmit(submit)} className="grid gap-5" noValidate>
      <Field label="Email address" registration={register('email')} error={errors.email} type="email" placeholder="you@example.com"/>
      <PasswordField label="Password" registration={register('password')} error={errors.password}/>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm"><label className="flex items-center gap-2 text-slate-600"><input type="checkbox" {...register('remember')} className="size-4 accent-primary"/>Remember me</label><Link to="/forgot-password" className="font-semibold text-primary hover:underline">Forgot password?</Link></div>
      <Button loading={isSubmitting} className="w-full">Log in</Button>
      <p className="text-center text-sm text-slate-600">New to Subly? <Link to="/signup" className="font-semibold text-primary">Create an account</Link></p>
      <p className="flex items-center justify-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500"><Icon name="lock" className="size-3.5"/>Demo login does not create an authenticated session.</p>
    </form>
  </AuthShell>
}

export function ForgotPasswordPage(){
  const [sent,setSent]=useState(false); const [error,setError]=useState(''); const {register,handleSubmit,formState:{isSubmitting}}=useForm<{email:string}>()
  async function submit(values:{email:string}){setError('');const result=z.email().safeParse(values.email);if(!result.success){setError('Enter a valid email address.');return}await new Promise(r=>window.setTimeout(r,400));setSent(true)}
  return <AuthShell compact eyebrow="Account recovery" asideTitle="Recover access without exposing your account." asideItems={['Use your account email','Check inbox and spam','Recovery links expire']} title={sent?'Check your inbox':'Forgot your password?'} description={sent?'Your request was handled with a private, generic response.':'Enter your email to prepare a frontend-only recovery acknowledgement.'}>
    {sent?<div className="grid gap-5"><div className="border border-teal/40 bg-teal/10 p-5"><span className="grid size-10 place-items-center rounded-full bg-white text-teal"><Icon name="mail"/></span><h2 className="mt-4 font-bold text-emerald-900">Demo request acknowledged</h2><p className="mt-2 text-sm leading-6 text-slate-600">If an eligible account existed, recovery instructions would be sent. No email was actually delivered.</p></div><Link to="/reset-password?demo=valid" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card bg-primary px-4 font-semibold text-white">Continue to demo reset <Icon name="arrow-right" className="size-4"/></Link></div>:<form onSubmit={handleSubmit(submit)} className="grid gap-5" noValidate><Field label="Email address" registration={register('email')} error={error} type="email" placeholder="you@example.com"/><Button loading={isSubmitting} className="w-full">Send reset link</Button></form>}
    <Link to="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"><Icon name="arrow-left" className="size-4"/>Back to Log in</Link>
  </AuthShell>
}

export function EmailConfirmedPage(){
  const [params]=useSearchParams(); const invalid=params.get('state')==='invalid'
  return <AuthStatusPanel tone={invalid?'error':'success'} icon={invalid?'circle-x':'circle-check'} title={invalid?'Confirmation link unavailable':'Your email is confirmed'} description={invalid?'This demo link is invalid or expired. Return to signup to restart the frontend flow.':'The frontend verification step is complete. Continue to the next part of the demo flow.'}><div className="grid gap-3"><Link to={invalid?'/signup':'/onboarding'} className="rounded-card bg-primary px-5 py-3 font-bold text-white">{invalid?'Return to signup':'Continue setup'}</Link>{!invalid&&<Link to="/login" className="rounded-card border border-primary px-5 py-3 font-bold text-primary">Continue to Log in</Link>}<Link to="/" className="py-2 text-sm font-semibold text-slate-600">Return to store</Link></div></AuthStatusPanel>
}

type ResetValues={password:string;confirm:string}
export function ResetPasswordPage(){
  const [params]=useSearchParams(); const valid=params.get('demo')==='valid'; const [done,setDone]=useState(false); const [errors,setErrors]=useState<FormErrors>({})
  const {register,handleSubmit,control,formState:{isSubmitting}}=useForm<ResetValues>({defaultValues:{password:'',confirm:''}}); const pass=useWatch({control,name:'password'}); const confirm=useWatch({control,name:'confirm'})
  async function submit(values:ResetValues){setErrors({});const result=z.object({password,confirm:z.string()}).refine(v=>v.password===v.confirm,{path:['confirm'],message:'Passwords must match.'}).safeParse(values);if(!result.success){setErrors(zodErrors(result));return}await new Promise(r=>window.setTimeout(r,400));setDone(true)}
  if(!valid)return <AuthStatusPanel tone="error" icon="circle-x" title="Recovery link required" description="Open this screen from the demo recovery acknowledgement to preview password reset safely."><Link to="/forgot-password" className="inline-block rounded-card bg-primary px-5 py-3 font-bold text-white">Request a demo reset</Link></AuthStatusPanel>
  if(done)return <AuthStatusPanel tone="success" icon="circle-check" title="Password updated in this demo" description="No account password was changed. You can now continue to the mock login screen."><Link to="/login" className="inline-block rounded-card bg-primary px-5 py-3 font-bold text-white">Continue to Log in</Link></AuthStatusPanel>
  return <AuthShell compact eyebrow="Secure recovery" title="Create a new password" description="Choose a strong password you have not used before." asideTitle="Secure your account" asideItems={['Use at least 8 characters','Mix letters and numbers','Never share your password']}><form onSubmit={handleSubmit(submit)} className="grid gap-5"><PasswordField label="New password" placeholder="Enter a new password" registration={register('password')} error={errors.password}/><PasswordField label="Confirm password" placeholder="Re-enter your password" registration={register('confirm')} error={errors.confirm}/><div className="rounded-card bg-slate-50 p-3"><PasswordRequirements password={pass} confirmation={confirm}/></div><Button loading={isSubmitting} className="w-full">Save new password</Button><p className="text-center text-sm text-slate-600">Remember your password? <Link className="font-semibold text-primary" to="/login">Log in</Link></p></form></AuthShell>
}

export function VerifyOtpPage(){
  const [params]=useSearchParams(); const email=params.get('email')??'customer@example.com'; const [digits,setDigits]=useState(['','','','','','']); const [error,setError]=useState(''); const [busy,setBusy]=useState(false); const [countdown,setCountdown]=useState(42); const refs=useRef<Array<HTMLInputElement|null>>([]); const navigate=useNavigate()
  useEffect(()=>{if(countdown<=0)return;const timer=window.setInterval(()=>setCountdown(value=>Math.max(0,value-1)),1000);return()=>window.clearInterval(timer)},[countdown])
  function change(index:number,value:string){const digit=value.replace(/\D/g,'').slice(-1);setDigits(items=>items.map((item,i)=>i===index?digit:item));setError('');if(digit)refs.current[index+1]?.focus()}
  function key(index:number,event:KeyboardEvent<HTMLInputElement>){if(event.key==='Backspace'&&!digits[index])refs.current[index-1]?.focus();if(event.key==='ArrowLeft')refs.current[index-1]?.focus();if(event.key==='ArrowRight')refs.current[index+1]?.focus()}
  function paste(value:string){const next=value.replace(/\D/g,'').slice(0,6).split('');if(!next.length)return;setDigits(Array.from({length:6},(_,i)=>next[i]??''));refs.current[Math.min(next.length,6)-1]?.focus()}
  async function verify(){if(digits.join('').length!==6){setError('Enter all six digits.');return}setBusy(true);await new Promise(r=>window.setTimeout(r,400));navigate('/auth/confirmed')}
  return <AuthShell compact title="Enter verification code" description={`Enter the demo code prepared for ${email}. No message was sent.`} asideTitle="Keep verification codes private" asideItems={['Codes expire shortly','One-time use only','Attempts are limited']}><div><div className="flex items-center gap-2 text-sm font-semibold text-slate-800"><Icon name="lock" className="size-4 text-primary"/>Six-digit verification code</div><div className="mt-3 grid grid-cols-6 gap-1.5 min-[390px]:gap-2">{digits.map((digit,i)=><input key={i} ref={node=>{refs.current[i]=node}} value={digit} onChange={e=>change(i,e.target.value)} onKeyDown={e=>key(i,e)} onPaste={e=>{e.preventDefault();paste(e.clipboardData.getData('text'))}} inputMode="numeric" autoComplete={i===0?'one-time-code':'off'} aria-label={`Digit ${i+1}`} aria-invalid={!!error} className="aspect-square min-w-0 rounded-card border border-slate-300 text-center text-xl font-bold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 aria-[invalid=true]:border-red-400"/>)}</div>{error&&<p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-danger"><Icon name="circle-x" className="size-3.5"/>{error}</p>}<Button onClick={verify} loading={busy} className="mt-6 w-full">Verify code</Button><div className="mt-5 text-center text-sm text-slate-500">{countdown>0?<>Resend available in <b className="tabular-nums text-slate-700">00:{String(countdown).padStart(2,'0')}</b></>:<button onClick={()=>setCountdown(42)} className="font-semibold text-primary">Restart demo timer</button>}</div><div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-5 text-sm"><Link className="inline-flex items-center gap-1.5 font-semibold text-primary" to="/signup"><Icon name="arrow-left" className="size-4"/>Back to signup</Link><a className="font-semibold text-primary" href="mailto:support@subly.example">Contact support</a></div></div></AuthShell>
}

export function OnboardingPage(){
  const [emailUpdates,setEmailUpdates]=useState(true); const [alerts,setAlerts]=useState(true); const [selected,setSelected]=useState<string[]>(['AI Tools','Design Tools']); const navigate=useNavigate()
  function toggle(value:string){setSelected(items=>items.includes(value)?items.filter(i=>i!==value):[...items,value])}
  return <AuthShell eyebrow="Quick setup · Step 1 of 1" title="Make Subly work for you" description="Choose a few lightweight preferences. You can update them later." asideTitle="A useful start, without a long questionnaire." asideItems={['Discover relevant products','Choose useful updates','Change preferences anytime']}><section><div className="flex items-center gap-3 border-b border-slate-200 pb-5"><span className="grid size-10 place-items-center rounded-full bg-blue-50 font-bold text-primary">1</span><div className="min-w-0 flex-1"><div className="flex justify-between text-xs font-semibold"><span>Preferences</span><span>1 of 1</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-full bg-primary"/></div></div></div><h2 className="mt-6 text-lg font-bold">Stay in the loop</h2><div className="mt-2 divide-y divide-slate-200"><Toggle label="Email product updates" description="New arrivals, price drops, and shopping tips" checked={emailUpdates} onChange={setEmailUpdates}/><Toggle label="WhatsApp order alerts" description="Order and delivery updates in this demo" checked={alerts} onChange={setAlerts}/></div><h2 className="mt-6 text-lg font-bold">Your shopping preferences</h2><div className="mt-3 grid gap-3 sm:grid-cols-3"><label className="text-xs font-semibold text-slate-600">Country<select className={`${fieldClass} text-sm`} defaultValue="Nigeria"><option>Nigeria</option><option>Ghana</option><option>Kenya</option></select></label><label className="text-xs font-semibold text-slate-600">Language<select className={`${fieldClass} text-sm`} defaultValue="English"><option>English</option><option>French</option></select></label><label className="text-xs font-semibold text-slate-600">Currency<select className={`${fieldClass} text-sm`} defaultValue="USD"><option>USD</option><option>NGN</option><option>GHS</option></select></label></div><p className="mt-5 text-sm font-semibold">What are you interested in?</p><div className="mt-3 flex flex-wrap gap-2">{['AI Tools','Design Tools','Developer Tools','Productivity','Student Essentials','Security & VPN'].map(item=><button type="button" key={item} aria-pressed={selected.includes(item)} onClick={()=>toggle(item)} className={`rounded-card border px-3 py-2 text-sm font-medium transition ${selected.includes(item)?'border-primary bg-blue-50 text-primary':'border-slate-300 text-slate-600 hover:border-primary'}`}>{selected.includes(item)&&<Icon name="check" className="mr-1 inline size-3.5"/>}{item}</button>)}</div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button onClick={()=>navigate('/dashboard')} className="sm:min-w-52">Start browsing</Button><button onClick={()=>navigate('/dashboard')} className="px-5 py-3 text-sm font-semibold text-primary">Skip for now</button></div><p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><Icon name="lock" className="size-3.5"/>Preferences remain temporary frontend state.</p></section></AuthShell>
}

function Toggle({label,description,checked,onChange}:{label:string;description:string;checked:boolean;onChange:(value:boolean)=>void}){
  return <label className="flex cursor-pointer items-center justify-between gap-4 py-4"><span className="min-w-0"><b className="text-sm">{label}</b><span className="mt-1 block text-xs leading-5 text-slate-500">{description}</span></span><span className={`relative h-6 w-11 shrink-0 rounded-full transition ${checked?'bg-primary':'bg-slate-300'}`}><input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} className="peer sr-only"/><span className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${checked?'translate-x-5':'translate-x-0.5'}`}/></span></label>
}
