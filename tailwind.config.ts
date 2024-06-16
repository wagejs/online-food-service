import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors:{
        brand: {
          'white-yellow': '#FFFAEB',
          primary: '#F9B800',
          dark: '#262626',
          'light-2': '#FFE18B',
        }

      }
    },
  },
  plugins: [],
} satisfies Config

