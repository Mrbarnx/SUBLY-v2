import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountLayout } from '../../components/layout/AccountLayout'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { PublicLayout } from '../../components/layout/PublicLayout'
import { CheckoutLayout } from '../../components/layout/CheckoutLayout'
import { AuthLayout } from '../../components/auth/AuthLayout'
import { Spinner } from '../../components/ui/Spinner'
import { NotFoundPage } from '../../pages/NotFoundPage'

const publicPages=()=>import('../../pages/PublicPages')
const HomePage=lazy(()=>publicPages().then(module=>({default:module.HomePage})))
const HowItWorksPage=lazy(()=>publicPages().then(module=>({default:module.HowItWorksPage})))
const ShopPage=lazy(()=>publicPages().then(module=>({default:module.ShopPage})))
const ProductDetailPage=lazy(()=>publicPages().then(module=>({default:module.ProductDetailPage})))
const CartPage=lazy(()=>publicPages().then(module=>({default:module.CartPage})))
const CheckoutPage=lazy(()=>publicPages().then(module=>({default:module.CheckoutPage})))
const OrderSuccessPage=lazy(()=>publicPages().then(module=>({default:module.OrderSuccessPage})))
const OrderFailedPage=lazy(()=>publicPages().then(module=>({default:module.OrderFailedPage})))

const authPages=()=>import('../../pages/AuthPages')
const SignupPage=lazy(()=>authPages().then(module=>({default:module.SignupPage})))
const LoginPage=lazy(()=>authPages().then(module=>({default:module.LoginPage})))
const ForgotPasswordPage=lazy(()=>authPages().then(module=>({default:module.ForgotPasswordPage})))
const EmailConfirmedPage=lazy(()=>authPages().then(module=>({default:module.EmailConfirmedPage})))
const ResetPasswordPage=lazy(()=>authPages().then(module=>({default:module.ResetPasswordPage})))
const VerifyOtpPage=lazy(()=>authPages().then(module=>({default:module.VerifyOtpPage})))
const OnboardingPage=lazy(()=>authPages().then(module=>({default:module.OnboardingPage})))

const accountPages=()=>import('../../pages/AccountPages')
const DashboardPage=lazy(()=>accountPages().then(module=>({default:module.DashboardPage})))
const OrdersPage=lazy(()=>accountPages().then(module=>({default:module.OrdersPage})))
const ProfilePage=lazy(()=>accountPages().then(module=>({default:module.ProfilePage})))
const SettingsPage=lazy(()=>accountPages().then(module=>({default:module.SettingsPage})))
const WalletPage=lazy(()=>accountPages().then(module=>({default:module.WalletPage})))
const ReferralsPage=lazy(()=>accountPages().then(module=>({default:module.ReferralsPage})))

const AdminPage=lazy(()=>import('../../pages/AdminPage').then(module=>({default:module.AdminPage})))
const legalPages=()=>import('../../pages/LegalPages')
const PrivacyPolicyPage=lazy(()=>legalPages().then(module=>({default:module.PrivacyPolicyPage})))
const TermsOfServicePage=lazy(()=>legalPages().then(module=>({default:module.TermsOfServicePage})))
const DataDeletionPage=lazy(()=>legalPages().then(module=>({default:module.DataDeletionPage})))

function RouteFallback(){return <div className="grid min-h-[45vh] place-items-center"><Spinner label="Loading page…"/></div>}

export function AppRouter(){return <BrowserRouter><Suspense fallback={<RouteFallback/>}><Routes>
  <Route element={<PublicLayout/>}><Route index element={<HomePage/>}/><Route path="how-it-works" element={<HowItWorksPage/>}/><Route path="shop" element={<ShopPage/>}/><Route path="product/:slug" element={<ProductDetailPage/>}/><Route path="cart" element={<CartPage/>}/></Route>
  <Route element={<AuthLayout/>}><Route path="signup" element={<SignupPage/>}/><Route path="login" element={<LoginPage/>}/><Route path="forgot-password" element={<ForgotPasswordPage/>}/><Route path="auth/confirmed" element={<EmailConfirmedPage/>}/><Route path="reset-password" element={<ResetPasswordPage/>}/><Route path="verify-otp" element={<VerifyOtpPage/>}/><Route path="onboarding" element={<OnboardingPage/>}/></Route>
  <Route element={<CheckoutLayout/>}><Route path="checkout" element={<CheckoutPage/>}/><Route path="order/success" element={<OrderSuccessPage/>}/><Route path="order/failed" element={<OrderFailedPage/>}/></Route>
  <Route element={<AccountLayout/>}><Route path="dashboard" element={<DashboardPage/>}/><Route path="orders" element={<OrdersPage/>}/><Route path="profile" element={<ProfilePage/>}/><Route path="settings" element={<SettingsPage/>}/><Route path="wallet" element={<WalletPage/>}/><Route path="referrals" element={<ReferralsPage/>}/></Route>
  <Route path="admin" element={<AdminLayout/>}><Route index element={<AdminPage/>}/></Route>
  <Route path="privacy-policy" element={<PrivacyPolicyPage/>}/><Route path="terms-of-service" element={<TermsOfServicePage/>}/><Route path="data-deletion" element={<DataDeletionPage/>}/><Route path="*" element={<NotFoundPage/>}/>
</Routes></Suspense></BrowserRouter>}
