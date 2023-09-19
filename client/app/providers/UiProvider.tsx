'use client'

import { NextUIProvider } from "@nextui-org/react"

type UiProp = {
    children: React.ReactNode
}

export default function UiProvider({ children }: UiProp) {
    return <NextUIProvider>{children}</NextUIProvider>
}