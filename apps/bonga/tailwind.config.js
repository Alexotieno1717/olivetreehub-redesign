/** @type {import('tailwindcss').Config} */
import sharedConfig from 'tailwind-config/tailwind.config.js';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography'

export default {
  ...sharedConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms, aspectRatio, typography
  ],
}

