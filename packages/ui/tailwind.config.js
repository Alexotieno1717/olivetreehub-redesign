const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
import sharedConfig from 'tailwind-config';

export default {
  ...sharedConfig,
    content: [
      "./index.tsx",
      "./Button.tsx",
      "./Footer.tsx",
      "./Header.tsx",
      "./Modal.tsx",
      "./NavBar.tsx",
      "./SideBar.tsx",
      "./styles/index.css",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    ]
};
