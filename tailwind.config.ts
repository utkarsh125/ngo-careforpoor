// tailwind.config.ts

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'], // Added Montserrat
      },
    },
  },
  plugins: [],
};

export default config;
