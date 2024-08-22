/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      customDarkBlue: "rgb(var(--custom-big-stone))",
      customBluewood: "rgb(var(--custom-bluewood))",
      customOrient: "rgb(var(--custom-orient))",
      customWedgewood: "rgb(var(--custom-wedgewood))",
      customEucalyptus: "rgb(var(--custom-eucalyptus))",
      customKeppel: "rgb(var(--custom-keppel))",
      customTallPoppy: "rgb(var(--custom-tall-poppy))",
      customAmaranth: "rgb(var(--custom-amaranth))",
    },
    extend: {},
  },
  plugins: [],
};
