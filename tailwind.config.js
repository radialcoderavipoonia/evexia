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
      },
      fontFamily: {
        Roboto: ["Roboto", "sans - serif"],
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
