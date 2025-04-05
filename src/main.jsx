import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "@/contexts/AuthContext.jsx";
import { Toaster } from "sonner"
import {OrdersProvider} from "@/contexts/OrdersContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <OrdersProvider>
                <App />
                <Toaster richColors />
            </OrdersProvider>
        </AuthProvider>
    </StrictMode>,
)