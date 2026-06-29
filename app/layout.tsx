import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cyber Foundation | HKUSTSFAIC',
  description: '香港科技大学AI×Sci-Fi社 - 连接前沿AI技术与想象力驱动的科幻创作',
  keywords: ['AI', 'Science Fiction', 'HKUST', 'Cyber Foundation', 'HKUSTSFAIC', 'Vibe Coding'],
  authors: [{ name: 'Cyber Foundation' }],
  openGraph: {
    title: 'Cyber Foundation | HKUSTSFAIC',
    description: '香港科技大学AI×Sci-Fi社',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-black-deep text-silver-bright antialiased">
        <ParticleBackground />
        <Navigation />
        <main>{children}</main>
        
        {/* Footer */}
        <footer className="relative border-t border-white/5 bg-black-deep/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Logo & Description */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <defs>
                      <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E8E8E8" />
                        <stop offset="100%" stopColor="#8A8A8A" />
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1.5"/>
                    <path d="M20 8 L32 16 L32 28 L20 36 L8 28 L8 16 Z" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1.5"/>
                    <text x="20" y="24" textAnchor="middle" fill="url(#footerLogoGradient)" fontSize="10" fontFamily="var(--font-space-grotesk)" fontWeight="bold">CF</text>
                  </svg>
                  <div>
                    <div className="font-display font-bold text-lg text-silver-bright">Cyber Foundation</div>
                    <div className="text-xs text-silver-muted">HKUSTSFAIC</div>
                  </div>
                </div>
                <p className="text-sm text-silver-muted/70 leading-relaxed">
                  连接前沿AI技术与想象力驱动的科幻创作
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-display font-semibold text-silver-bright mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-silver-muted/70">
                  <li><a href="/about" className="hover:text-silver-bright transition-colors">社团架构</a></li>
                  <li><a href="/activities" className="hover:text-silver-bright transition-colors">活动中心</a></li>
                  <li><a href="/projects" className="hover:text-silver-bright transition-colors">项目展示</a></li>
                  <li><a href="/join" className="hover:text-silver-bright transition-colors">加入我们</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-display font-semibold text-silver-bright mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-silver-muted/70">
                  <li>Email: contact@hkustsfaic.org</li>
                  <li>Discord: CyberFoundationHK</li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-silver-muted/20 to-transparent mb-6" />

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-silver-muted/50">
              <p>© 2026 Cyber Foundation. All rights reserved.</p>
              <p className="font-mono">HKUSTSFAIC · 香港科技大学AI×Sci-Fi社</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
