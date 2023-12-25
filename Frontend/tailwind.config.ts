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
        secondary: "#ff0000",
        success: "#00ff00",
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
