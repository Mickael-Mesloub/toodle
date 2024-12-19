import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["src/**/*.{tsx,css}"],
  plugins: [Typography, daisyui],
  daisyui: {
    themes: false,
  },
} satisfies Config;
