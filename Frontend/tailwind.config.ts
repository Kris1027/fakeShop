import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000ff",
        success: "#28965A",
        successHover: "#2A6041",
        warning: "#ffff00",
        dark: "#1e1b4b",
        light: "#c7d2fe",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
