/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(266.04deg, #7184FD 20%, #3F7AF0 50%, #4F37EE 100%)",
        "section-heading":
          "linear-gradient(90deg, #7581f5 -5.34%, #c4c9f7 105.27%)",
        "heading-color-dark":
          "linear-gradient(90deg, #7581f5 -5.34%, #c4c9f7 105.27%)",
        "heading-color-light":
          "linear-gradient(90deg, #000 100.34%, #c4c9f7 105.27%)",
        "user-card":
          "linear-gradient(110.16deg, rgba(45, 131, 238, 0.13) -21.91%, rgba(255, 255, 255, 0) 48.11%, rgba(45, 131, 238, 0.23) 118.14%)",
        "user-card2":
          "linear-gradient(110.16deg, rgba(248, 251, 255, 0.21) 4.4%, rgba(252, 253, 255, 0.0541482) 19.94%, rgba(12, 12, 12, 0.025258) 38.31%, rgba(255, 255, 255, 0) 54.36%, rgba(255, 255, 255, 0.19) 83.82%)",
        "gradient-cardBg":
          "linear-gradient(59.26deg, #FFFFFF -22.9%, rgba(5, 0, 73, 0) 16.78%, #0C0B19 16.2%, rgba(4, 0, 57, 0) 48.95%, rgba(255, 255, 255, 0.6) 86.91%)",
      },
      boxShadow: {
        "shadow-1":
          "0px -2px 15px 1px #407BFF, 0px 3.2px 20px 0px rgba(0, 0, 0, 0.4)",
      },
      backgroundColor: {
        "color-dark": "#0A0917",
        "color-light": "#fff",
      },
      textColor: {
        "color-dark": "#fff",
        "color-light": "#000",
        "section-dark": "#fff",
        "section-light": "#00a3ff",
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
      pattern: /text-section-(dark)/,
    },
    {
      pattern: /text-section-(light)/,
    },
    {
      pattern: /bg-color-(dark)/,
    },
    {
      pattern: /bg-color-(light)/,
    },
    {
      pattern: /bg-heading-color-(dark)/,
    },
    {
      pattern: /bg-heading-color-(light)/,
    },
  ],
  plugins: [],
};
