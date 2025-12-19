/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Gaming Theme Colors
        'bg-primary': '#0b0f19',
        'bg-secondary': '#151823',
        'bg-tertiary': '#1e2432',
        'primary': {
          DEFAULT: '#6C5CE7',
          50: '#f3f0ff',
          100: '#e9e0ff',
          200: '#d6c7ff',
          300: '#b8a0ff',
          400: '#9b7dff',
          500: '#6C5CE7',
          600: '#5B4BC4',
          700: '#4a3aa1',
          800: '#3d2e82',
          900: '#352668',
        },
        'accent': '#00cec9',
        'text': {
          'primary': '#ffffff',
          'secondary': '#a0a0a0',
          'muted': '#666666',
        },
        'status': {
          'success': '#00b894',
          'warning': '#fdcb6e',
          'error': '#e17055',
          'info': '#74b9ff',
        },
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C5CE7 0%, #00cec9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0b0f19 0%, #151823 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}