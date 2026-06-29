import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          deep: '#000000',
          soft: '#0A0A0A',
        },
        silver: {
          bright: '#E8E8E8',
          metal: '#C0C0C0',
          muted: '#8A8A8A',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-ibm-plex-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'liquid-pulse': 'liquidPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        liquidPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(192, 192, 192, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(192, 192, 192, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
