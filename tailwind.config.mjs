/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores semánticos TodoNerds para Construcción
        primary: {
          DEFAULT: "#F26419", // Orange Industrial (Alert/Action)
          dark: "#CC4E10",
        },
        secondary: {
          DEFAULT: "#2F4858", // Deep Navy (Trust/Solid)
          light: "#43657B",
        },
        accent: {
          DEFAULT: "#F6AE2D", // Yellow Gold (Quality)
        },
        surface: {
          100: "#FFFFFF", // Pure white
          200: "#F8F9FA", // Light concrete
          300: "#E9ECEF", // Muted gray
          900: "#212529", // Rich dark text
        },
      },
      fontFamily: {
        // Definidas vía @fontsource en el Layout
        title: ['"Bebas Neue"', "sans-serif"], // Headlines potentes
        body: ['"Inter"', "sans-serif"], // Legibilidad en servicios
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
