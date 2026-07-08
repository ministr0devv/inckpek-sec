import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030307",
          900: "#05050a",
          800: "#0a0a12",
          700: "#0f0f1a",
          600: "#141420",
          500: "#1a1a2e",
          400: "#262640",
          300: "#3a3a5c",
          200: "#555580",
          100: "#8080aa",
          50: "#aeaecf",
        },
        cian: {
          DEFAULT: "#00b4d8",
          50: "#e0f7ff",
          100: "#b3ecff",
          200: "#80e0ff",
          300: "#4dd4ff",
          400: "#26c8ff",
          500: "#00b4d8",
          600: "#0090ad",
          700: "#006c82",
          800: "#004857",
          900: "#00242d",
        },
        surface: {
          DEFAULT: "#030307",
          card: "#0a0a12",
          elevated: "#141420",
          border: "#1a1a2e",
          hover: "#262640",
        },
        text: {
          primary: "#ececf1",
          secondary: "#9d9db5",
          muted: "#5c5c7a",
        },
        success: {
          DEFAULT: "#00c853",
          50: "#e8f5e9",
          500: "#00c853",
          900: "#003d1a",
        },
        alert: {
          DEFAULT: "#ff6d00",
          50: "#fff3e0",
          500: "#ff6d00",
          900: "#4a1a00",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-cian": "0 0 20px rgba(0, 180, 216, 0.15)",
        "glow-cian-lg": "0 0 40px rgba(0, 180, 216, 0.1)",
        soft: "0 1px 3px rgba(0, 0, 0, 0.4)",
        card: "0 2px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
