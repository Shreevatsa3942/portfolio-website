/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
            900: '#0a192f',
            800: '#112240',
            700: '#233554',
        },
        slate: {
            light: '#8892b0',
            lightest: '#ccd6f6',
            dark: '#495670',
        },
        teal: {
            300: '#64ffda',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
