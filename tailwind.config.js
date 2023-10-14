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
        darkblue: "#122231",
        blue: "rgb(0, 51, 153)",
        skyblue: "#3296FF",
        green: "#39C277",
        pink: "#E5489B",
        blueblack: "#6A7279",
        purple: "#7913E5",
        ash: "#F2F7F8",
        bblue:"rgb(0, 51, 153)",
        dash: "rgb(66, 74, 87)",

        
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'ss': {'max': '300px'},
    },
  },
  plugins: [require("daisyui")],
}