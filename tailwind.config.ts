import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,md,mdx,js,ts}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0f19",
        slate: "#111827",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: { xs: "2px" },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("tailwind-animate"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
