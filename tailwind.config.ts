import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14181F",
          soft: "#1E2430",
          line: "#2B3241",
        },
        paper: {
          DEFAULT: "#F6F2EA",
          dim: "#ECE5D8",
          card: "#FFFDF9",
        },
        moss: {
          DEFAULT: "#2F6B57",
          deep: "#204A3D",
          light: "#E4EEE9",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "38rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 24, 31, 0.06), 0 8px 24px -12px rgba(20, 24, 31, 0.18)",
        lift: "0 2px 4px rgba(20, 24, 31, 0.08), 0 20px 40px -16px rgba(20, 24, 31, 0.28)",
        frame: "0 1px 1px rgba(20, 24, 31, 0.05), 0 30px 60px -24px rgba(20, 24, 31, 0.35)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
