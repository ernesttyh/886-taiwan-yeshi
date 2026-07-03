import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          brand: "#C41E1E",
        },
        navy: "#1B2A6B",
        cream: "#FFF5E6",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        playfair: ["var(--font-playfair-display)", "serif"],
        poppins: ["var(--font-poppins-display)", "serif"],
        inter: ["var(--font-inter-display)", "serif"],
        din: ["DIN", "sans-serif"],
        dinBlack: ["DIN Black", "sans-serif"],
        aaHongYunShouShu: ["AaHongYunShouShu", "sans-serif"],
        dincondensed: ["DIN Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
