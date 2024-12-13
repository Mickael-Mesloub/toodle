import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [Typography, daisyui],
  daisyui: {
    themes: false,
  },
} satisfies Config;
