/** @type {import('tailwindcss').Config} */
import sharedConfig from 'tailwind-config';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography'

module.exports = {
  ...sharedConfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    forms, aspectRatio, typography
  ],
};
