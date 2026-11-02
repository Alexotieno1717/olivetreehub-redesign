/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "../../packages/ui/index.tsx",
      "../../packages/ui/Button.tsx",
      "../../packages/ui/Footer.tsx",
      "../../packages/ui/Header.tsx",
      "../../packages/ui/Modal.tsx",
      "../../packages/ui/NavBar.tsx",
      "../../packages/ui/SideBar.tsx",
    ],
    theme: {
      extend: {
        colors: {
          "primary-dark": '#0F211B',
          "primary-light": "#65DB9F",
          "primary-light2": "#62B84E",
          "primary-light3": "#00793F",
          "primary-amber": "#FFBF1B",
          "primary-white": "#FBFBFB",
          "primary-bonga": "#70D5FF",
          "secondary-dark": "#101828",
          "primary-lighter": "#CCE7C6",
          "primary-lighter2": "#A2D392",
          "primary-dark2": "#0B301A",
          "primary-gray": "#71808F",
          "primary-amber-dark": 'rgba(255, 191, 27, 0.15)',
          "primary-light-dark": 'rgba(101, 219, 159, 0.15)',
          "primary-white2": '#F9F9F9',
          "primary-card": 'rgba(251,251,251,0.1)',
          "scene-img": "rgba(101,219,159,0.1)",
          "scene-img2": "rgba(101,219,159,0.1)",
          "primary-light4": "#11DC62",
          "primary-light4-dark": "rgba(17, 220, 98, 0.15)",
          "primary-light5-dark": 'rgba(101, 219, 159, 0.67)',
          "primary-yellow-light": '#A7A111;',
          "primary-yellow-dark": 'rgba(241, 237, 173, 0.25)',
          "primary-yellow-light2": '#DCD411',
          'primary-bonga2': '#00698C',
          'primary-bonga3': '#0787B1',
          "primary-bonga4-light": '#70D5FF',
          "primary-bonga4-dark": 'rgba(112, 213, 255, 0.15)'

        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
}
