/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#eee",
        },
        gray: {
          "100": "#8d8d8d",
          "200": "#1e1e1e",
          "300": "#0e1b39",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.6)",
          "600": "rgba(255, 255, 255, 0.15)",
          "700": "rgba(30, 30, 30, 0.9)",
          "800": "rgba(30, 30, 30, 0.6)",
          "900": "rgba(30, 40, 50, 0.5)",
          "1000": "rgba(30, 30, 30, 0.8)",
        },
        sandybrown: "#f6973f",
        darkorange: {
          "100": "#e68411",
          "200": "#e58411",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "7xl-1": "26.1px",
        "3xs": "10px",
        "lg-1": "18.1px",
        "25xl-4": "44.4px",
        xl: "20px",
        "30xl": "49px",
        "mini-3": "14.3px",
        "10xl": "29px",
        "12xl": "31px",
        "25xl": "44px",
        "13xl": "32px",
        "23xl": "42px",
      },
    },
    fontSize: {
      mini: "15px",
      mid: "17px",
      "9xl": "28px",
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "23xl": "42px",
      "6xl": "25px",
      "15xl": "34px",
      "2x3l-": "21.3px",
      "base-2": "15.2px",
      "base-8": "16.8px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "61xl": "80px",
      "21xl": "40px",
      "25xl" : "45px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};