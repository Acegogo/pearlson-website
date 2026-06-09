/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#E7E6C4',
        'orange': '#FF3500',
        'olive': '#3F3826',
        'black': '#000000',
        'teal': '#008080',
        'kpsa-purple': '#B8A9D4',
        'kpsa-blue': '#7EC8E3',
        'pearlson-red': '#FF3500',
        'pearlson-navy': '#1a237e',
        'pearlson-gold': '#FFD700',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(255, 53, 0, 0.35), 0 0 40px rgba(255, 53, 0, 0.15)',
        'glow-teal': '0 0 20px rgba(0, 128, 128, 0.35), 0 0 40px rgba(0, 128, 128, 0.15)',
        'glow-purple': '0 0 20px rgba(184, 169, 212, 0.4), 0 0 40px rgba(184, 169, 212, 0.2)',
        'glow-card': '0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 53, 0, 0.1)',
        'glow-card-hover': '0 8px 32px rgba(255, 53, 0, 0.25), 0 0 24px rgba(255, 53, 0, 0.15)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 53, 0, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 53, 0, 0.4)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
