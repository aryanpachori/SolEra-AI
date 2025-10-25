import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#000000",
        surface: "#0B0C10",
        primary: { 
          DEFAULT: "#2563EB", 
          hover: "#3B82F6" 
        },
        accent: "#06B6D4",
        text: { 
          primary: "#FFFFFF", 
          secondary: "#9CA3AF" 
        },
        border: "#1F2937",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        // Legacy shadcn colors for compatibility
        foreground: "#FFFFFF",
        muted: {
          DEFAULT: "#1F2937",
          foreground: "#9CA3AF",
        },
        card: {
          DEFAULT: "#0B0C10",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#0B0C10",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        ring: "#2563EB",
        input: "#1F2937",
      },
      boxShadow: {
        glow: "0 0 15px rgba(37,99,235,0.5)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        "aurora": {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "scroll": {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "shimmer": {
          from: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "-200% 0"
          }
        },
        "meteor-effect": {
          "0%": { transform: "rotate(45deg) translateX(0)" },
          "70%": { opacity: 1 },
          "100%": { 
            transform: "rotate(45deg) translateX(-500px)",
            opacity: 0
          },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        aurora: "aurora 60s linear infinite",
        scroll: "var(--animation-duration, 40s) var(--animation-timing-function, linear) var(--animation-delay, 0s) var(--animation-iteration-count, infinite) var(--animation-direction, normal) var(--animation-fill-mode, forwards) scroll",
        shimmer: "shimmer 2s linear infinite",
        "meteor-effect": "meteor-effect 5s linear infinite",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;