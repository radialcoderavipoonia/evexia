/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/home-page/hero/hero-section.webp')",
        commonSection: "url('/assets/common/reveal-common.webp')",
        "benefits-tabs":
          " linear-gradient(180deg, rgba(39, 170, 126, 0.22) 19.21%, rgba(0, 74, 109, 0.22) 100%),linear-gradient(89.78deg, #27AA7E 2.16%, #004A6D 99.81%)",
      },
      borderGradient: {
        custom:
          "linear-gradient(0deg, #000000, #000000), linear-gradient(89.66deg, #27AA7E 0.22%, #004A6D 108.11%)",
      },
      backgroundSize: {
        '300': '150% 150%',
       
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        green: "#27AA7E",
        blue: "#004A6D",
      },
    },
  },
  plugins: [],
};
