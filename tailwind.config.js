/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#203B32',
        deep: '#25443A',
        night: '#142920',
        gold: '#D5B879',
        'muted-gold': '#A4874D',
        'gold-ink': '#725A30',
        paper: '#F8F7F2',
        sand: '#F0EFE7',
        ink: '#1C2823',
        stone: '#46574F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1320px',
      },
      letterSpacing: {
        tightest: '-0.065em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(7px)' },
        },
        'slow-zoom': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
      },
    },
  },
  plugins: [],
}
