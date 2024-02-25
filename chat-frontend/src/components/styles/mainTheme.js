import { createTheme } from "@mui/material/styles";
import { colors } from "../../constants/constants";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: colors.black,
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "'Rubik', sans-serif",
  },
});

export default mainTheme;
