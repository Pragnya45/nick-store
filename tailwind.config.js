/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-dark": "#0A0917",
        "color-light": "#fff",
      },
    },
  },
  safelist: [
    {
      pattern: /text-color-(dark)/,
    },
    {
      pattern: /text-color-(light)/,
    },
    {
      pattern: /text-color-subtitle-(dark)/,
    },
    {
      pattern: /text-color-subtitle-(light)/,
    },
    {
      pattern: /bg-color-(dark)/,
    },
    {
      pattern: /bg-color-(light)/,
    },
    {
      pattern: /bg-color-secondary-(dark)/,
    },
    {
      pattern: /bg-color-red-(dark)/,
    },
    {
      pattern: /bg-color-banner-(dark)/,
    },
    {
      pattern: /bg-color-sidebar-(dark)/,
    },
    {
      pattern: /bg-color-sidebar-(light)/,
    },
    {
      pattern: /border-color-(dark)/,
    },
    {
      pattern: /border-color-input-(dark)/,
    },
  ],
  plugins: [],
};
