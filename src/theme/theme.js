import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#036F8B"
    },
    secondary: {
      main: "#FFAA0F"
    },
    background: {
      default: "#F0F2F2",
      paper: "#ff"
    },
    error: {
      main: "#BF2604"
    }
  },
  typography: {
    fontFamily: ["Special Elite, cursive"].join(",")
  }
});

export default responsiveFontSizes(theme);
