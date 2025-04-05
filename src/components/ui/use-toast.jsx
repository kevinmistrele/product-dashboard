import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    function toast({ title, description }) {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((current) => [...current, { id, title, description }]);
        setTimeout(() => {
            setToasts((current) => current.filter((t) => t.id !== id));
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed top-4 right-4 space-y-2">
                {toasts.map((t) => (
                    <div key={t.id} className="bg-background border p-4 rounded-md shadow-lg">
                        <div className="font-bold">{t.title}</div>
                        {t.description && <div className="text-sm text-muted-foreground">{t.description}</div>}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}
