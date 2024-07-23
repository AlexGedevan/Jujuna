/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      beforeTablet: "570px",
      tablet: "760px",
      desktop: "900px",
      biggerDesktop: "1200px",
    },
    extend: {
      backgroundImage: {
        marani: "url('/images/marani.png')",
        cocktail1: "url('/images/cocktail1.png')",
        mobileBar: "url('/images/banner2.png')",
        contactUsBanner: "url('/images/banner1.png')",
      },
      fontFamily: {
        tommaso: "tommaso",
        geo: "geo",
      },
      colors: {
        backgroundColor: {
          purpleStart: "#A583D1",
          purpleMid: "#724AA4",
          purpleEnd: "#1E122E",
          siaxleebi: "#EAEAEA",
        },

        borderColor: {
          gray: "#848282",
        },

        textColor: {
          primary: "#FFF",
          secondary: "#aea6b7",
          black: "#000",
        },

        logoColor: {
          circle: "#BA92ED",
          insideCircle: "#000",
        },

        buttonColor: {
          primary: "#613994",
          secondary: "#000",
        },

        inputColor: {
          primary: "#000",
          secondary: "#D0CFCF",
        },
      },
    },
  },
  plugins: [],
};
