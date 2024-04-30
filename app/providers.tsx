// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import 'react-material-symbols/rounded'; 

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}