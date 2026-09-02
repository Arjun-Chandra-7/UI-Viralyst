/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: {
            light: '#FFFDE0',
            butter: '#FAED8F',
            gold: '#FACC15',
            amber: '#F59E0B',
            orange: '#EA580C',
          },
          pink: {
            soft: '#FDF2F8',
            blush: '#FCE7F3',
            bubblegum: '#F472B6',
            magenta: '#DB2777',
          },
          cyan: {
            ice: '#ECFEFF',
            mint: '#CFFAFE',
            electric: '#22D3EE',
            teal: '#0D9488',
          },
          lavender: {
            light: '#F5F3FF',
            purple: '#8B5CF6',
            dark: '#32225F',
          },
          dark: '#12111A',
          charcoal: '#1E1E24',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        display: ['"Obviously Extended Black"', '"Obviously"', 'Syne', '"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', '"Patrick Hand"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'pop': '0 8px 0px 0px rgba(18, 17, 26, 1)',
        'pop-hover': '0 12px 0px 0px rgba(18, 17, 26, 1)',
        'pop-active': '0 2px 0px 0px rgba(18, 17, 26, 1)',
        'pop-yellow': '0 8px 0px 0px #F59E0B',
        'pop-pink': '0 8px 0px 0px #DB2777',
        'pop-cyan': '0 8px 0px 0px #0284C7',
        'soft': '0 20px 40px -15px rgba(0,0,0,0.07)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
