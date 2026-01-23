import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-primary': '#0A0A0A',
        'dark-secondary': '#121212',
        'dark-accent': '#1A1A1A',
        'electric-blue': '#00D4FF',
        'vibrant-orange': '#FF6B35',
        'muted-gray': '#A0A0A0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'delay-1000',
  ],
} satisfies Config;
