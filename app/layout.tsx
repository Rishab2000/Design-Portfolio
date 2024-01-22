import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/fluidtype.css'
import './styles/font.css'

import { Providers } from "./providers";
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: "Rishab's Portfolio",
  description: 'An attempt to tell a story of my work and growth as a designer. Always workings in improving the story',
}

const myFont = localFont({
  src: './fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Variable.woff2',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
