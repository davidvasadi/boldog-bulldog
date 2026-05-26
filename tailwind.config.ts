import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F3',
        sand: '#F3EBDD',
        beige: '#E8DCC8',
        latte: '#C9B79C',
        cocoa: '#8A6F52',
        bark: '#5C4A37',
        ink: '#2E2620',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(92, 74, 55, 0.18)',
        glow: '0 0 40px -8px rgba(201, 183, 156, 0.7)',
      },
      backdropBlur: {
        xl: '24px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,183,156,0.5)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(201,183,156,0.35)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
