import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        portifolio:  "#1C2027",
      },
    },
  },
  plugins: [],
};
export default config;

