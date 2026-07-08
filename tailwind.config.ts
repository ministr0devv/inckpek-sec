import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#ffffff",
          surface: "#f8fafc",
          muted: "#f1f5f9",
        },
        text: {
          main: "#0f172a",
          secondary: "#334155",
          muted: "#475569",
          inverse: "#ffffff",
        },
        brand: {
          primary: "#1e40af",
          "primary-hover": "#1e3a8a",
          secondary: "#0ea5e9",
          accent: "#0369a1",
        },
        border: {
          clean: "#e2e8f0",
          light: "#f1f5f9",
        },
        success: { DEFAULT: "#059669" },
        warning: { DEFAULT: "#d97706" },
        danger: { DEFAULT: "#dc2626" },
        info: { DEFAULT: "#0284c7" },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #1e40af, #0ea5e9)",
        "gradient-subtle":
          "linear-gradient(180deg, #f8fafc, #ffffff)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },
      boxShadow: {
        card:
          "0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.03)",
        elevated:
          "0 4px 6px rgba(15, 23, 42, 0.03), 0 2px 4px rgba(15, 23, 42, 0.02)",
        dialog:
          "0 20px 25px rgba(15, 23, 42, 0.05), 0 10px 10px rgba(15, 23, 42, 0.02)",
        nav: "0 1px 2px rgba(15, 23, 42, 0.03)",
      },
      borderRadius: {
        clean: "8px",
        smooth: "12px",
        pill: "9999px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "draw-line": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "draw-line": "draw-line 1.2s ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        80: "20rem",
        84: "21rem",
        88: "22rem",
        96: "24rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
