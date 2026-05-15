/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080810',
        heading: '#F0F0F5',
        muted: '#8B8B9A',
        cyan: {
          DEFAULT: '#06B6D4',
          dim: 'rgba(6, 182, 212, 0.08)',
        },
        glass: 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
      },
      letterSpacing: {
        label: '0.15em',
        mono: '0.08em',
      },
      spacing: {
        section: '120px',
      },
      maxWidth: {
        content: '1100px',
        about: '900px',
        resume: '560px',
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        scrollLine: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(12px)', opacity: '0.8' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
