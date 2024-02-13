import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'var(--font-general-sans)',
      'mono': 'var(--font-inter)',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      height: {
        "navbar": "var(--navbar-height)"
      },

      borderRadius: {
        "DEFAULT": "var(--border-radius)",
      },
      spacing: {
        "navbar": "var(--navbar-height)",
        "navbar-2x": "calc(var(--navbar-height) * 2)",
      },
      maxWidth: {
        "1440": "1440px",
        "content": "var(--content-width)",
      },
      dropShadow: {
        "DEFAULT": "var(--shadow)",
      }
    },
  },
  plugins: [],
};
export default config;
