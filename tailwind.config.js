/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '3000': '3000ms', // 添加自定义的 3000 毫秒
        '1500': '1500ms',
        '2000': '2000ms',
      },
      colors:{
        primary: "#f97316",
        dark: {
          background: "#1a1a1a",
          text: "#ffffff",
        },
        menu: {
          bg: "#000c17",
          text: "#000c17",
        },
        light: {
          background: "#ffffff",
          text: "#000000",
        },
        custom: {
          bg: "#1b1c26",
          text: "#9feaf9",
        },
        content: {
          bg: "#1b1b1d",
          text:"#e3e3e3",
        }
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        // 添加窗口大小设置
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      }
    },
  },
  plugins: [],
}

