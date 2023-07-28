import '@/styles/reset.css';
import '@/styles/global.css';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className='container'>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  )
}
