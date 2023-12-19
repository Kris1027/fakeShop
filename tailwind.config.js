/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      success: "#16a34a",
      warning: "#f97316",
      error: "#b91c1c",
      dark: "#022c22",
      light: "#14b8a6",
    },
    darkMode: "class",
  },
  plugins: [],
};
