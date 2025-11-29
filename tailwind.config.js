/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0B1120',
        'dark-slate': '#1A202E',
        'dark-blue': '#1E2A3A',
        'accent-cyan': '#22D3EE',
        'accent-cyan-light': '#67E8F9',
        'accent-cyan-dark': '#06B6D4',
        'accent-orange': '#FF6B35',
        'accent-orange-light': '#FF8555',
        'accent-orange-dark': '#E5491A',
        'surface-dark': '#151922',
        'surface-light': '#242B3D',
        'text-primary': '#F8FAFC',
        'text-secondary': '#CBD5E1',
        'text-muted': '#64748B',
        'border-dark': '#334155',
        'border-light': '#475569',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #0B1120 0%, #1A202E 50%, #1E2A3A 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B35 0%, #E5491A 100%)',
        'dark-cyan-gradient': 'linear-gradient(135deg, #1A202E 0%, #22D3EE 50%, #FF6B35 100%)',
        'cyan-radial': 'radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent)',
        'orange-radial': 'radial-gradient(circle, rgba(255, 107, 53, 0.15), transparent)',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(34, 211, 238, 0.3)',
        'cyan-glow-lg': '0 0 40px rgba(34, 211, 238, 0.5)',
        'orange-glow': '0 0 15px rgba(255, 107, 53, 0.3)',
        'dark-glow': '0 0 20px rgba(26, 32, 46, 0.8)',
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
