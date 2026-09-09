import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountLayout } from '../../components/layout/AccountLayout'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { PublicLayout } from '../../components/layout/PublicLayout'
import { NotFoundPage } from '../../pages/NotFoundPage'
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
import { DashboardPage, OrdersPage, ProfilePage, ReferralsPage, SettingsPage, WalletPage } from '../../pages/AccountPages'
import { AdminPage } from '../../pages/AdminPage'
import { DataDeletionPage, PrivacyPolicyPage, TermsOfServicePage } from '../../pages/LegalPages'
export function AppRouter(){return <BrowserRouter><Routes>
  <Route element={<PublicLayout/>}>
    <Route index element={<HomePage/>}/><Route path="how-it-works" element={<HowItWorksPage/>}/><Route path="shop" element={<ShopPage/>}/><Route path="product/:slug" element={<ProductDetailPage/>}/><Route path="cart" element={<CartPage/>}/>
  </Route>
  <Route element={<AuthLayout/>}><Route path="signup" element={<SignupPage/>}/><Route path="login" element={<LoginPage/>}/><Route path="forgot-password" element={<ForgotPasswordPage/>}/><Route path="auth/confirmed" element={<EmailConfirmedPage/>}/><Route path="reset-password" element={<ResetPasswordPage/>}/><Route path="verify-otp" element={<VerifyOtpPage/>}/><Route path="onboarding" element={<OnboardingPage/>}/></Route>
  <Route element={<CheckoutLayout/>}><Route path="checkout" element={<CheckoutPage/>}/><Route path="order/success" element={<OrderSuccessPage/>}/><Route path="order/failed" element={<OrderFailedPage/>}/></Route>
  <Route element={<AccountLayout/>}><Route path="dashboard" element={<DashboardPage/>}/><Route path="orders" element={<OrdersPage/>}/><Route path="profile" element={<ProfilePage/>}/><Route path="settings" element={<SettingsPage/>}/><Route path="wallet" element={<WalletPage/>}/><Route path="referrals" element={<ReferralsPage/>}/></Route>
  <Route path="admin" element={<AdminLayout/>}><Route index element={<AdminPage/>}/></Route>
  <Route path="privacy-policy" element={<PrivacyPolicyPage/>}/><Route path="terms-of-service" element={<TermsOfServicePage/>}/><Route path="data-deletion" element={<DataDeletionPage/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes></BrowserRouter>}
