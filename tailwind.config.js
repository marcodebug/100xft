/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFEBEB',
          100: '#FFC9C9',
          200: '#FF9E9E',
          300: '#FF7272',
          400: '#FF4D4D',
          500: '#FF1F1F',
          600: '#E60000',
          700: '#C20000',
          800: '#8E0404',
          900: '#4B0101'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-lux': 'radial-gradient(circle at center, #8E0404 0%, #1F0000 50%, transparent 100%)',
        'gradient-radial-lux-2': 'radial-gradient(circle at 30% 70%, #8E0404 0%, #1F0000 40%, transparent 80%)',
      },
      animation: {
        'gradient-rotate': 'gradientRotate 20s ease-in-out infinite',
        'gradient-rotate-reverse': 'gradientRotateReverse 25s ease-in-out infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'number-change': 'numberChange 0.3s ease-in-out',
        'tab-underline': 'tabUnderline 0.2s ease-in-out',
        'scale-102': 'scale-102 0.2s ease-in-out',
        'glass-morph': 'glass-morph 0.3s ease-in-out',
      },
      keyframes: {
        gradientRotate: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '33%': { transform: 'rotate(120deg) scale(1.1)' },
          '66%': { transform: 'rotate(240deg) scale(0.9)' },
        },
        gradientRotateReverse: {
          '0%, 100%': { transform: 'rotate(360deg) scale(1.05)' },
          '50%': { transform: 'rotate(180deg) scale(0.95)' },
        },
        shimmer: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.2)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.1, transform: 'scale(1)' },
          '50%': { opacity: 0.3, transform: 'scale(1.05)' },
        },
        numberChange: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        tabUnderline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'scale-102': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        'glass-morph': {
          '0%': { backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)' },
          '100%': { backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.2)' },
        }
      },
      zIndex: {
        '-20': '-20',
        '-15': '-15',
        '-10': '-10',
      },
      scale: {
        '102': '1.02',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}