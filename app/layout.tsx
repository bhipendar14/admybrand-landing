import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADmyBRAND',
  description: 'ADmyBRAND',
  generator: 'ADmyBRAND',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (  
    <html lang="en">
      <head>
        <title>ADmyBRAND</title>
        <link rel="icon" href="https://media.licdn.com/dms/image/v2/C510BAQEQKlrf1G5QSA/company-logo_200_200/company-logo_200_200/0/1630633010795/admybrand_logo?e=2147483647&v=beta&t=SnoAxnmQ2BmOcGKQRTXOV4m_fpdVZfCqnKXOlIiRCqs" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
