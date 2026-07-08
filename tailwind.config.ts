import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050508",
          900: "#07070d",
          800: "#0a0a14",
          700: "#0d0d1a",
          600: "#111122",
          500: "#16162e",
          400: "#1e1e3d",
          300: "#2a2a50",
          200: "#3d3d6b",
          100: "#555589",
          50: "#7272a8",
        },
        cobalt: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        surface: {
          DEFAULT: "#050508",
          card: "#0f172a",
          elevated: "#1e293b",
          border: "#1e293b",
          hover: "#334155",
        },
        text: {
          primary: "#ffffff",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        success: {
          DEFAULT: "#22c55e",
          50: "#f0fdf4",
          500: "#22c55e",
          900: "#14532d",
        },
        alert: {
          DEFAULT: "#f97316",
          50: "#fff7ed",
          500: "#f97316",
          900: "#7c2d12",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-cobalt": "0 0 20px rgba(37, 99, 235, 0.12)",
        "glow-cobalt-lg": "0 0 40px rgba(37, 99, 235, 0.08)",
        soft: "0 1px 3px rgba(0, 0, 0, 0.5)",
        card: "0 2px 8px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
