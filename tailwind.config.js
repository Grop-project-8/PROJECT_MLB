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
        
        // text-xs: ขนาดเล็กสุด ( 0.75rem หรือ 12px)
        // text-sm: ขนาดเล็ก ( 0.875rem หรือ 14px)
        // text-base: ขนาดปกติ ( 1rem หรือ 16px)
        // text-lg: ขนาดใหญ่ ( 1.125rem หรือ 18px)
        // text-xl: ขนาดใหญ่มาก ( 1.25rem หรือ 20px)
        // text-2xl: ขนาดใหญ่มากขึ้น ( 1.5rem หรือ 24px)
        // text-3xl: ขนาดใหญ่มากขึ้นอีก ( 1.875rem หรือ 30px)
        // text-4xl: ขนาดใหญ่มากขึ้นอีก ( 2.25rem หรือ 36px)
        // text-5xl: ขนาดใหญ่สุด ( 3rem หรือ 48px)
      },
      fontFamily: {
        coiny: ["Coiny", "sans-serif"],
      },
      colors: {
        myGreen: "#9FFC41",
        myGray: "#616161",
        blue: "#AACFF2",
        mygray:'#D9D9D9'
      },
      container: {
        center: true,
        /* padding: {
          DEFAULT: "2rem",
          sm: "2rem",
        }, */
      },
    },
  },
  plugins: [],
};
