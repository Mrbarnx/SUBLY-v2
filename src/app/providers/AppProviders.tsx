import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { ToastProvider } from '../../components/feedback/Toast'
import { CartProvider } from '../../features/cart/CartProvider'
export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 30_000, retry: 1 } } }))
  return <QueryClientProvider client={queryClient}><CartProvider><ToastProvider>{children}</ToastProvider></CartProvider></QueryClientProvider>
}
