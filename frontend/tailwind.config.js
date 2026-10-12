/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#040d08",
          900: "#07160e",
          800: "#0c2116",
          700: "#133022",
          600: "#1c4430",
        },
        paper: {
          DEFAULT: "#f3f0e6",
          2: "#e9e5d6",
          3: "#d9d4c0",
        },
        gel: {
          DEFAULT: "#c5f467",
          2: "#a6e04a",
          3: "#7fbf2a",
        },
        leaf: {
          DEFAULT: "#2f8f4e",
          dark: "#1c5a33",
        },
        sun: "#f2b45c",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        packet: {
          "0%": { transform: "translate(-100%, -100%)", opacity: "0" },
          "15%,85%": { opacity: "1" },
          "100%": { transform: "translate(1000%, 1000%)", opacity: "0" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        ping2: "ping2 2.2s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
}
