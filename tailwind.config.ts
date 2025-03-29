/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        playfair: ["var(--font-playfair)", ...fontFamily.sans],
        sofia_sans: ["var(--font-sofia_sans)", ...fontFamily.sans],
        open_sans: ["var(--font-open_sans)", ...fontFamily.sans],
        italiana: ["var(--font-italiana)", ...fontFamily.sans],
        manrope: ["var(--font-manrope)", ...fontFamily.sans],
        times_new_roman: ["times_new_roman", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "button-bg": "url('/images/buttonbg.png')",
        "button-hover": "url('/images/buttonhover.png')",
        "button-bg-inverted": "url('/images/buttonInvertedBg.png')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        menubackground: "hsl(var(--menubackground))",
        menuprimary: {
          DEFAULT: "hsl(var(--menuprimary))",
          foreground: "hsl(var(--menuprimaryforeground))",
        },
        menuforeground: "hsl(var(--menuforeground))",
        menusecondary: {
          DEFAULT: "hsl(var(--menusecondary))",
          foreground: "hsl(var(--menusecondaryforeground))",
        },
        buttonhover: "hsl(var(--buttonhover))",
        itembackground: "hsl(var(--itembackground))",
        itemdescription: "hsl(var(--itemdescription))",
        itembutton: "hsl(var(--itembutton))",
        buttondisabled: "hsl(var(--buttondisabled))",
        mobilebg: "hsl(var(--mobilebg))",
        menuwhite: "hsl(var(--menuwhite))",
        borderinput: "hsl(var(--borderinput))",
        tabbg: "hsl(var(--tabbg))",
        inputbg: "hsl(var(--inputbg))",
        placeholder: "hsl(var(--placeholder))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
