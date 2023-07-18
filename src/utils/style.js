import { extendTheme } from "@chakra-ui/react";
// import type { StyleFunctionProps } from "@chakra-ui/styled-system";
const activeLabelStyles = {
  transform: "scale(0.95) translateY(-45px)",
  color: "#2c5282",
};
const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      html: {
        "font-size": "16px",
        "font-style": "normal",
        bg: "white",
      },
      body: {
        margin: 0,
        padding: 0,
        "box-sizing": "border-box",
        "font-family": "Hellix",
        bg: "#ffffff",
      },
      "*": {
        margin: 0,
        padding: 0,
        "box-sizing": "border-box",
        "font-family": "Hellix !important",
      },
    },
  },
  colors: {
    bg: {
      main: "#00296B",
      subMain: "#F2F5FA",
      background: "#DAE4F3",
      rgba: "rgba(0,0,0,.6)",
      rgb: "rgba(0,0,0,.8)",
      rg: "rgba(0,0,0,.1)",
    },
    font: {
      main: "#00296B",
      submain: "#FFFFFF",
      dark: "#2A2B2C",
    },
  },

  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            input: {
              border: "none",
            },
            label: {
              top: 3,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
              transition: "1s",
            },
          },
        },
      },
    },
  },
};

export const customStyle = {
  fontSize: {
    navItem: { base: "0.7rem", md: "1rem" },
    sideItem: { base: "0.7rem", md: "1.2rem" },
    logo: { base: "1rem", md: "1.5rem" },
    logoText: { base: "1rem", md: "1.4rem" },
    bannerText: { base: "1.5rem", md: "2.8rem" },
    sectionHeader: { base: "1rem", md: "2rem" },
    paragragh: { base: "0.7rem", md: "1rem" },
    cardTitle: { base: "0.9rem", md: "1.4rem" },
  },
  fontWeight: {
    navItem: { base: "600", md: "600" },
    cardTitle: { base: "700", md: "700" },
  },
  padding: {
    psHome: { base: "1rem", md: "4rem" },
    peHome: { base: "1rem", md: "4rem" },
  },
};

export default extendTheme(theme);
