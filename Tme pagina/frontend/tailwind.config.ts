import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "#050816",
        electric: "#2a7cff",
        cyan: "#4dd8ff",
        violet: "#9b6aff",
        surface: "rgba(10, 14, 32, 0.9)"
      },
      boxShadow: {
        glow: "0 20px 70px rgba(42, 124, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
