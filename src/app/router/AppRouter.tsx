import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountLayout } from '../../components/layout/AccountLayout'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { PublicLayout } from '../../components/layout/PublicLayout'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { PlaceholderPage } from '../../pages/PlaceholderPage'
const page=(title:string)=><PlaceholderPage title={title}/>
export function AppRouter(){return <BrowserRouter><Routes>
  <Route element={<PublicLayout/>}>
    <Route index element={page('Homepage')}/><Route path="how-it-works" element={page('How It Works')}/><Route path="shop" element={page('Shop')}/><Route path="product/:slug" element={page('Product Detail')}/><Route path="cart" element={page('Cart')}/><Route path="checkout" element={page('Checkout')}/><Route path="order/success" element={page('Order Success')}/><Route path="order/failed" element={page('Order Failed')}/>
    <Route path="signup" element={page('Signup')}/><Route path="login" element={page('Login')}/><Route path="forgot-password" element={page('Forgot Password')}/><Route path="auth/confirmed" element={page('Email Confirmed')}/><Route path="reset-password" element={page('Reset Password')}/><Route path="verify-otp" element={page('OTP Verification')}/><Route path="onboarding" element={page('Onboarding')}/>
    <Route path="privacy-policy" element={page('Privacy Policy')}/><Route path="terms-of-service" element={page('Terms of Service')}/><Route path="data-deletion" element={page('Data Deletion')}/>
  </Route>
  <Route element={<AccountLayout/>}><Route path="dashboard" element={page('Dashboard')}/><Route path="orders" element={page('Orders')}/><Route path="profile" element={page('Profile')}/><Route path="settings" element={page('Settings')}/><Route path="wallet" element={page('Wallet')}/><Route path="referrals" element={page('Referrals')}/></Route>
  <Route path="admin" element={<AdminLayout/>}><Route index element={page('Admin')}/></Route>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes></BrowserRouter>}
