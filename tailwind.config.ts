import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1408px',
      },
      colors: {
        'ibm-blue': '#0f62fe',
        'sd-plus-green': '#6edb8b',
        'ibm-home-back': '#002D9C',
        'sd-plus-home-back': '#40BF4D',
        'back':'##161616',
        'text-primary': '#161616',
        'text-secondary': '#525252',
        'text-placeholder': '#a8a8a8',
        'text-helper':'#6f6f6f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
