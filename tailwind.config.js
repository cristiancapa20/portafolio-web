/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#0b0c0e",
        surface: "#16181d",
        "surface-2": "#1e2127",
        line: "rgba(255,255,255,0.08)",
        content: "#e6e7e9",
        muted: "#9aa0a6",
        accent: {
          DEFAULT: "#e0b341",
          soft: "#ecc25a",
        },
      },
      maxWidth: {
        content: "1100px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease both",
      },
    },
  },
  plugins: [],
};
