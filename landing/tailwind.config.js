export default {
  content: ["./*.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e4d8c",
          dark: "#153a6b",
          light: "#2d6cb5",
        },
        accent: {
          DEFAULT: "#d4af37",
          light: "#e8c96a",
          dark: "#b8942e",
        },
        surface: "#f8fafc",
        muted: "#64748b",
      },
      fontFamily: {
        sans: ["Vazirmatn", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(30, 77, 140, 0.35)",
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 40px -12px rgba(30, 77, 140, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(30,77,140,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,77,140,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
