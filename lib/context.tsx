'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react'
import { Language, translations, Translations } from '@/lib/i18n'

interface AppContextType {
  theme: 'dark' | 'light'
  language: Language
  toggleTheme: () => void
  setLanguage: (lang: Language) => void
  t: Translations
  isZh: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [language, setLanguage] = useState<Language>('zh')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('cf-theme') as 'dark' | 'light' | null
    const savedLang = localStorage.getItem('cf-language') as Language | null
    
    if (savedTheme) {
      setTheme(savedTheme)
    }
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cf-theme', theme)
      document.documentElement.classList.toggle('light', theme === 'light')
    }
  }, [theme, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cf-language', language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const t = translations[language]
  
  // Helper for language detection - more reliable than string comparison
  const isZh = language === 'zh'

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, setLanguage, t, isZh }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
