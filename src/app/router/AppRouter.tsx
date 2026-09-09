import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountLayout } from '../../components/layout/AccountLayout'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { PublicLayout } from '../../components/layout/PublicLayout'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { PlaceholderPage } from '../../pages/PlaceholderPage'
import { HomePage } from '../../pages/HomePage'
import { HowItWorksPage } from '../../pages/HowItWorksPage'
import { ShopPage } from '../../pages/ShopPage'
import { ProductDetailPage } from '../../pages/ProductDetailPage'
import { CartPage } from '../../pages/CartPage'
import { CheckoutLayout } from '../../components/layout/CheckoutLayout'
import { CheckoutPage } from '../../pages/CheckoutPage'
import { OrderSuccessPage } from '../../pages/OrderSuccessPage'
import { OrderFailedPage } from '../../pages/OrderFailedPage'
import { AuthLayout } from '../../components/auth/AuthLayout'
import { EmailConfirmedPage, ForgotPasswordPage, LoginPage, OnboardingPage, ResetPasswordPage, SignupPage, VerifyOtpPage } from '../../pages/AuthPages'
const page=(title:string)=><PlaceholderPage title={title}/>
export function AppRouter(){return <BrowserRouter><Routes>
  <Route element={<PublicLayout/>}>
    <Route index element={<HomePage/>}/><Route path="how-it-works" element={<HowItWorksPage/>}/><Route path="shop" element={<ShopPage/>}/><Route path="product/:slug" element={<ProductDetailPage/>}/><Route path="cart" element={<CartPage/>}/>
    <Route path="privacy-policy" element={page('Privacy Policy')}/><Route path="terms-of-service" element={page('Terms of Service')}/><Route path="data-deletion" element={page('Data Deletion')}/>
  </Route>
  <Route element={<AuthLayout/>}><Route path="signup" element={<SignupPage/>}/><Route path="login" element={<LoginPage/>}/><Route path="forgot-password" element={<ForgotPasswordPage/>}/><Route path="auth/confirmed" element={<EmailConfirmedPage/>}/><Route path="reset-password" element={<ResetPasswordPage/>}/><Route path="verify-otp" element={<VerifyOtpPage/>}/><Route path="onboarding" element={<OnboardingPage/>}/></Route>
  <Route element={<CheckoutLayout/>}><Route path="checkout" element={<CheckoutPage/>}/><Route path="order/success" element={<OrderSuccessPage/>}/><Route path="order/failed" element={<OrderFailedPage/>}/></Route>
  <Route element={<AccountLayout/>}><Route path="dashboard" element={page('Dashboard')}/><Route path="orders" element={page('Orders')}/><Route path="profile" element={page('Profile')}/><Route path="settings" element={page('Settings')}/><Route path="wallet" element={page('Wallet')}/><Route path="referrals" element={page('Referrals')}/></Route>
  <Route path="admin" element={<AdminLayout/>}><Route index element={page('Admin')}/></Route>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes></BrowserRouter>}
