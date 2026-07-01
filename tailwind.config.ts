import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gcrfip-green': '#1B5E20',
        'gcrfip-navy': '#0D47A1',
        'gcrfip-gold': '#FFC107',
        'gcrfip-light-grey': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
export default config
