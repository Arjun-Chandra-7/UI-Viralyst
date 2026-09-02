/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: '#FAF7F2',
        surface: '#FFFFFF',
        'surface-warm': '#F5EFE6',
        'surface-paper': '#EFECE6',
        ink: {
          DEFAULT: '#0D0C11',
          soft: '#2A2930',
          muted: '#6B6875',
          faint: '#A6A2B0',
        },
        signal: {
          amber: '#FF9E00',
          orange: '#FF5500',
          butter: '#FAED8F',
          gold: '#FACC15',
          pulse: '#10B981',
          crimson: '#E11D48',
        }
      },
      fontFamily: {
        display: ['"Obviously Extended Black"', '"Obviously"', 'Syne', '"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'editorial-sm': '3px 3px 0px 0px #0D0C11',
        'editorial': '5px 5px 0px 0px #0D0C11',
        'editorial-lg': '9px 9px 0px 0px #0D0C11',
        'editorial-hover': '12px 12px 0px 0px #0D0C11',
        'editorial-amber': '5px 5px 0px 0px #FF9E00',
        'editorial-butter': '5px 5px 0px 0px #FAED8F',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.75rem',
        '6xl': '3.5rem',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.92)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        filmScrub: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-10%)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        ticker: 'ticker 28s linear infinite',
      }
    },
  },
  plugins: [],
}
