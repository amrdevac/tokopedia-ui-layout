/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#259D59",
          "secondary": "#a5f7a0",
          "accent": "#d8ba65",
          "neutral": "#2E2631",
          "zzz": "#22f631",
          "base-100": "#F5F4F5",
          "info": "#72A3E4",
          "success": "#adffc4",
          "warning": "#EF850B",
          "error": "#F63148",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],

}
