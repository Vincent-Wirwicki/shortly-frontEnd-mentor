import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      md: { max: "768px" },
      sm: { max: "425px" },
      xs: { max: "350px" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        // md: { max: "768px" },
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/illustration-working.svg')",
        "form-desk": "url('/bg-shorten-desktop.svg')",
        "form-mobile": "url('/bg-shorten-mobile.svg')",
        "boost-desk": "url('/bg-boost-mobile.svg')",
        "boost-mobile": "url('/bg-boost-desktop.svg')",
      },
      colors: {
        // "primary-cyan": "hsl(var(--primary-cyan))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          cyan: "hsl(var(--primary-cyan))",
          "cyan-light": "hsla(var(--primary-cyan), 0.75)",
          "dark-violet": "hsl(var(--primary-dark-violet))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          red: "hsl(var(--secondary-red))",
        },
        third: {
          gray: "hsl(var(--neutral-gray))",
          violet: "hsl(var(--neutral-violet))",
          blue: "hsl(var(--neutral-blue))",
          "dark-violet": "hsl(var(--neutral-dark-violet))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
