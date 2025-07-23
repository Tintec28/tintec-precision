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
        'tintec-blue': '#0066CC',
        'tintec-dark': '#1a1a1a',
        'tintec-gray': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
