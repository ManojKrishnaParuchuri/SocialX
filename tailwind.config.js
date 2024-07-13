/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#222",
          "200": "#231f20",
          "300": "#1e1e20",
        },
        darkslateblue: {
          "100": "#3a408c",
          "200": "#004197",
        },
        tomato: "#e2342d",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f3f3f3",
        },
        darkslategray: "#4a4b4d",
        dimgray: "#707070",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        italiana: "Italiana",
        chilanka: "Chilanka",
        poppins: "Poppins",
      },
    },
    fontSize: {
      lg: "18px",
      "35xl": "54px",
      "24xl": "43px",
      "13xl": "32px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      xl: "20px",
      xs: "12px",
      "21xl": "40px",
      sm: "14px",
      "6xl": "25px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
