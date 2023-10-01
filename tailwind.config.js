/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "1.15rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.25rem",
        xl: "2.5rem",
        "2xl": "2.75rem",

        // tag heading ใช้ 2xl:text-2xl xl:text-xl lg:text-lg text-sm
        // tag p ใช้ text-myGray font-poppins  2xl:text-sm text-xs
        // tag button ใช้ 2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px]
      },
      fontFamily: {
        coiny: ["Coiny", "sans-serif"],
      },
      colors: {
        myGreen: "#9FFC41",
        myGray: "#616161",
        blue: "#AACFF2",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
