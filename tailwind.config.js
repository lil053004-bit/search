/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#030712',
        'dark-slate': '#0F172A',
        'dark-blue': '#1E293B',
        'accent-coral': '#FF6F61',
        'accent-coral-light': '#FF9580',
        'accent-coral-dark': '#E8554E',
        'accent-peach': '#FFB347',
        'accent-peach-light': '#FFC875',
        'accent-peach-dark': '#FF9D1F',
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
        'coral-gradient': 'linear-gradient(135deg, #FF6F61 0%, #E8554E 100%)',
        'peach-gradient': 'linear-gradient(135deg, #FFB347 0%, #FF9D1F 100%)',
        'warm-gradient': 'linear-gradient(135deg, #0F172A 0%, #FF6F61 50%, #FFB347 100%)',
        'coral-radial': 'radial-gradient(circle, rgba(255, 111, 97, 0.1), transparent)',
        'peach-radial': 'radial-gradient(circle, rgba(255, 179, 71, 0.1), transparent)',
      },
      boxShadow: {
        'coral-glow': '0 0 20px rgba(255, 111, 97, 0.3)',
        'coral-glow-lg': '0 0 40px rgba(255, 111, 97, 0.5)',
        'peach-glow': '0 0 15px rgba(255, 179, 71, 0.3)',
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
