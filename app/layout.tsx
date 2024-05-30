import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waffles Coin',
  description: 'a delicious crypto token',
  icons: {
    icon: '/waffles.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
      </head>
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
