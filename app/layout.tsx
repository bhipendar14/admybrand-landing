import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND - AI Marketing for Developers',
  description: 'The best way to create, automate, and optimize marketing campaigns. Deliver personalized content and drive real results at scale.',
  generator: 'ADmyBRAND',
  keywords: ['AI Marketing', 'Marketing Automation', 'Content Generation', 'Analytics', 'Developer Tools'],
  authors: [{ name: 'ADmyBRAND Team' }],
  openGraph: {
    title: 'ADmyBRAND - AI Marketing for Developers',
    description: 'The best way to create, automate, and optimize marketing campaigns.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND - AI Marketing for Developers',
    description: 'The best way to create, automate, and optimize marketing campaigns.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (  
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>ADmyBRAND</title>
        <link rel="icon" href="https://media.licdn.com/dms/image/v2/C510BAQEQKlrf1G5QSA/company-logo_200_200/company-logo_200_200/0/1630633010795/admybrand_logo?e=2147483647&v=beta&t=SnoAxnmQ2BmOcGKQRTXOV4m_fpdVZfCqnKXOlIiRCqs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
