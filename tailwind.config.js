// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#009cf9",
          secondary: "#00a99d",
          dark: "#0A0A0A",
          light: "#F7FAFC",
        },
      },
      fontFamily: {
        heading: ["var(--font-lexend-deca)"],
        sans: ["var(--font-hind)"],
      },
      boxShadow: {
        brand: "0 10px 30px rgba(0,156,249,0.15)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #009cf9 0%, #00a99d 100%)",
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      maxWidth: { container: "1200px" },
    },
  },
  plugins: [],
};
