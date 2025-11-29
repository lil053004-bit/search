/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ocean-deep': '#0A1929',
        'ocean-mid': '#1E3A5F',
        'ocean-light': '#2C5282',
        'teal-bright': '#38B2AC',
        'teal-soft': '#4FD1C5',
        'teal-light': '#81E6D9',
        'coral-soft': '#FFA07A',
        'coral-medium': '#FFB6A3',
        'coral-light': '#FFC9B9',
        'peach-soft': '#FFD7BE',
        'peach-light': '#FFE5D4',
        'cream-pale': '#FFF8F0',
        'cream-light': '#FFEEE0',
        'blue-gray': '#718096',
        'blue-gray-light': '#A0AEC0',
        'midnight-blue': '#0F172A',
        'slate-deep': '#1E293B',
        'azure-bright': '#0EA5E9',
        'sky-soft': '#7DD3FC',
        'text-light': '#F9FAFB',
        'text-muted': '#E5E7EB',
        'border-subtle': '#6B7280',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #0A1929 0%, #1E3A5F 50%, #2C5282 100%)',
        'teal-gradient': 'linear-gradient(135deg, #38B2AC 0%, #4FD1C5 100%)',
        'coral-gradient': 'linear-gradient(135deg, #FFA07A 0%, #FFB6A3 100%)',
        'blue-coral-gradient': 'linear-gradient(135deg, #2C5282 0%, #38B2AC 50%, #FFA07A 100%)',
        'ocean-radial': 'radial-gradient(circle, rgba(56, 178, 172, 0.2), transparent)',
        'teal-glow': 'radial-gradient(circle, rgba(79, 209, 197, 0.3), transparent)',
        'soft-gradient': 'linear-gradient(to bottom, #0F172A, #1E3A5F, #38B2AC)',
        'dreamy-gradient': 'linear-gradient(135deg, #1E3A5F 0%, #38B2AC 50%, #FFA07A 100%)',
      },
      boxShadow: {
        'teal-glow': '0 0 20px rgba(56, 178, 172, 0.4)',
        'teal-glow-lg': '0 0 40px rgba(56, 178, 172, 0.6)',
        'coral-glow': '0 0 15px rgba(255, 160, 122, 0.4)',
        'ocean-glow': '0 0 20px rgba(30, 58, 95, 0.5)',
        'soft-blue-glow': '0 0 30px rgba(79, 209, 197, 0.3)',
        'dreamy-glow': '0 0 25px rgba(56, 178, 172, 0.5)',
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
