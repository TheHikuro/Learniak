"use client"

import { ReactElement, createContext, useContext, useMemo } from 'react';
import toast, { ToastOptions, Toaster } from 'react-hot-toast';

const toastConfig: ToastOptions = {
    duration: 4000,
    position: 'top-center',
};

type AlertContextType = {
    success: (message: string) => void
    error: (message: string) => void
    info: (message: string) => void
}

const AlertContext = createContext<AlertContextType>({} as AlertContextType)

const ToasterProvider = ({ children }: { children: ReactElement }) => {
    const contextValue = useMemo(() => {
        return {
            success: (message: string) => toast.success(message, toastConfig),
            error: (message: string) => toast.error(message, toastConfig),
            info: (message: string) => toast(message, toastConfig),
        }
    }, [])

    return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>
}

const AlertInso = () => {
    return <Toaster />
}

const useToast = () => useContext(AlertContext)

export { AlertContext, ToasterProvider, AlertInso, useToast }