import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components,sections}/**/*.{ts,tsx}",
  ],
} satisfies Config;
