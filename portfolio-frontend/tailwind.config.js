/** @type {import('tailwindcss').Config} */
// NOTE: merge this with your existing tailwind.config.js if you have plugins
// or content paths already set up — this covers the new design tokens.
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0E",
        paper: "#FFFFFF",
        void: "#050505",
        cobalt: "#2F3EFF",
        flame: "#FF4B2E",
        acid: "#DFFF3D",
        graphite: "#6E6E6E",
      },
      fontFamily: {
        display: ['"Archivo Black"', "sans-serif"],
        body: ['"Hanken Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        brut: "6px 6px 0 0 #000",
        "brut-sm": "3px 3px 0 0 #000",
        "brut-press": "2px 2px 0 0 #000",
        "brut-white": "6px 6px 0 0 #fff",
        "brut-white-sm": "3px 3px 0 0 #fff",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "marquee-fast": "marquee 14s linear infinite",
      },
    },
  },
  plugins: [],
};
