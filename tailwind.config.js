/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#121212',
          900: '#1a1a1a',
          800: '#2a2a2a',
        },
        amber: {
          400: '#D4AF37',
          500: '#C59B27',
        }
      }
    },
  },
  plugins: [],
}
