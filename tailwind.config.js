/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyberpunk-pink': '#f700ff',
        'cyberpunk-blue': '#00f7ff',
        'vaporwave-pink': '#ff71ce',
        'vaporwave-blue': '#01cdfe',
        'vaporwave-purple': '#b967ff',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(247, 0, 255, 0.5), 0 0 20px rgba(247, 0, 255, 0.3)',
        'neon-blue': '0 0 10px rgba(0, 247, 255, 0.5), 0 0 20px rgba(0, 247, 255, 0.3)',
      },
    },
  },
  plugins: [],
};