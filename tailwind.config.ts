import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#667085",
        line: "#EAECF0",
        soft: "#F8FAFC",
        brand: "#2563EB",
        violet: "#7C3AED"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 24, 40, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
