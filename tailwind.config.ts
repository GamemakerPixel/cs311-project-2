import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d031d",
        secondary: "#17052b",
        accent: "#e75133",
        text: "#eeeeee",
        itext: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;
