import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      },
    },
  },
  colors: {
    gray: {
      50: "#F9F9F9",
      200: "#E5E4E2",
    },
    purple: {
      700: "#622EE5",
    },
    blue: {
      800: "#172765",
    },
    green: {
      500: "#69D531",
      grey: "#778899",
    },
  },
  components: {
    Button: {
      variants: {
        sidebar: {
          padding: "10px",
          bgRepeat: "no-repeat",
          bgPos: "center",
          bgColor: "#F9F9F9",
        },
        header: {
          w: "24px",
          h: "24px",
          bgRepeat: "no-repeat",
          bgPos: "center",
          bgColor: "white",
        },
        "main-page": {
          w: "80px",
          h: "40px",
          border: "1px solid #622ee5",
          borderRadius: "5px",
          ml: "5px",
          bgRepeat: "no-repeat",
          bgPosition: "center",
        },
      },
    },
    Text: {
      variants: {
        header: {
          fontSize: "12px",
          color: "purple.700",
          mr: "15px",
          _hover: { cursor: "pointer" },
        },
        "account-info": {
          display: "flex",
          color: "purple.700",
          fontSize: "13px",
          mb: "20px",
          justifyContent: "space-between",
        },
      },
    },
    Heading: {
      variants: {
        "account-type": {
          fontSize: "14px",
          mb: "5px",
        },
      },
    },
  },
});
