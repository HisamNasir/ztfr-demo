'use client'
import {NextUIProvider} from '@nextui-org/react'
export function NextThemeProviders({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}