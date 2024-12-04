/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {},
      borderRadius: {
        default: "2.875rem",
      },
      colors: {
        amarillo: "#fdfe7c",
        azul: "#6dbacc",
        bagie: "#b48271",
        bagiecrema: "#f0d6bf",
        blanco: "#ffffff",
        lavanda: "#979bb9",
        lima: "#9bc385",
        morado: "#1f1e31",
        negro: "#191512",
        turquesa: "#8cf7f1",
      },
      spacing: {},
    },
  },
  plugins: [],
};
