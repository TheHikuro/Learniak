'use client'

import { SessionProvider } from 'next-auth/react'

type AuthProp = {
    children: React.ReactNode
}

export default function AuthProvider({ children }: AuthProp) {
    return <SessionProvider>{children}</SessionProvider>
}