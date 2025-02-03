import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'  // Add this import

// Create a client instance
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        {/* Provide the QueryClient and HelmetProvider */}
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>   {/* Wrap with HelmetProvider */}
            <App />
          </HelmetProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
