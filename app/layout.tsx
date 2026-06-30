'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import Footer from '@/components/Footer'
import { AppProvider } from '@/lib/context'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F0F14" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Cyber Foundation | AI × Science Fiction</title>
        <meta name="description" content="Cyber Foundation - 连接前沿AI技术与想象力驱动的科幻创作。由学生主导的学会，以平等的双轨架构同时承载AI应用与科幻文学两大创作社群。" />
        <meta name="keywords" content="AI, Science Fiction, Cyber Foundation, HKUST, 人工智能, 科幻, 香港科技大学" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cyber Foundation | AI × Science Fiction" />
        <meta property="og:description" content="连接前沿AI技术与想象力驱动的科幻创作" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_HK" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cyber Foundation | AI × Science Fiction" />
        <meta name="twitter:description" content="连接前沿AI技术与想象力驱动的科幻创作" />
      </head>
      <body className="font-body bg-black-deep text-silver-bright antialiased">
        <AppProvider>
          <ScrollProgress />
          <ParticleBackground />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
