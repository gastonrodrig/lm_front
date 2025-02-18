import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#964901" : "#EF7E1B",
      },
      secondary: {
        main: "#E6BB93",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: mode === "dark" ? "#2B1200" : "#FFFFFF",
      },
      text: {
        primary: mode === "dark" ? "#FFFBFF" : "#252020",
      },
      social_media: {
        text: mode === "dark" ? "#C0B9B3" : "#666666",
        divider: mode === "dark" ? "#5D493B" : "#C4C4C4",
      }
    },
    typography: {
      fontFamily: "'Mulish', sans-serif",
    }
  }
);