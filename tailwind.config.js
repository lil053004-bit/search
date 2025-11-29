/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#030712',
        'dark-slate': '#0F172A',
        'dark-blue': '#1E293B',
        'accent-yellow': '#FCD34D',
        'accent-yellow-light': '#FDE68A',
        'accent-yellow-dark': '#F59E0B',
        'accent-orange': '#FF6B35',
        'accent-orange-light': '#FF8555',
        'accent-orange-dark': '#E5491A',
        'surface-dark': '#0A0F1E',
        'surface-light': '#1A1F2E',
        'text-primary': '#F8FAFC',
        'text-secondary': '#CBD5E1',
        'text-muted': '#64748B',
        'border-dark': '#334155',
        'border-light': '#475569',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #030712 0%, #0F172A 50%, #1E293B 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B35 0%, #E5491A 100%)',
        'dark-yellow-gradient': 'linear-gradient(135deg, #0F172A 0%, #FCD34D 50%, #FF6B35 100%)',
        'yellow-radial': 'radial-gradient(circle, rgba(252, 211, 77, 0.1), transparent)',
        'orange-radial': 'radial-gradient(circle, rgba(255, 107, 53, 0.1), transparent)',
      },
      boxShadow: {
        'yellow-glow': '0 0 20px rgba(252, 211, 77, 0.3)',
        'yellow-glow-lg': '0 0 40px rgba(252, 211, 77, 0.5)',
        'orange-glow': '0 0 15px rgba(255, 107, 53, 0.3)',
        'dark-glow': '0 0 20px rgba(15, 23, 42, 0.8)',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-rotate': 'float-rotate 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
        'float-rotate': {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(5deg) translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        'title': ['HYYaKuHeiW', 'Noto Sans JP', 'sans-serif'],
        'subtitle': ['Adobe Heiti Std', 'Hiragino Sans', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
      borderRadius: {
        'modern-xl': '20px',
        'modern-lg': '16px',
        'modern-md': '12px',
      },
    },
  },
  plugins: [],
};
