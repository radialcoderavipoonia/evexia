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
        hero: "url('/assets/images/home-page/hero/hero_section.webp')",
        commonSection: "url('/assets/common/reveal-common.webp')",
        "benefits-tabs":
          " linear-gradient(180deg, rgba(39, 170, 126, 0.22) 19.21%, rgba(0, 74, 109, 0.22) 100%),linear-gradient(89.78deg, #27AA7E 2.16%, #004A6D 99.81%)",
        "features-tabs":
          " linear-gradient(89.66deg, #27AA7E 0.22%, #004A6D 108.11%)",
        "about-us":
          " linear-gradient(180deg, rgba(39, 170, 126, 0.22) 19.21%, rgba(0, 74, 109, 0.22) 100%)",
        "card-border":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(252, 252, 252, 0.12) 3.18%, rgba(229, 229, 229, 0.12) 25.9%, rgba(176, 176, 176, 0.12) 77.42%, rgba(153, 153, 153, 0) 100%),linear-gradient(90deg, rgba(156, 156, 156, 0) 0%, rgba(0, 0, 0, 0.12) 64.52%)",
        "footer-b":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) -9.22%, rgba(255, 255, 255, 0.81) 51%, rgba(153, 153, 153, 0) 109.41%)",
      },
        colors: {
        'features-tabs-border': "linear-gradient(89.66deg, #27AA7E 0.22%, #004A6D 108.11%)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        green: "#27AA7E",
        blue: "#004A6D",
        mintcream: "#E5F4EF",
        cornflowerblue: "#3D9DF21A",
        lightWhite: "#FFFFFF3D",
        lightBlack: "#00000014",
      },
    },
  },
  plugins: [],
};
