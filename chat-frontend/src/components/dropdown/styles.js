import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const hoverableDropdownStyles = createUseStyles({
  menuItems: {
    padding: 0,
    margin: [[6, 16]],
    minHeight: "auto",
    "&:hover": {
      background: "transparent",
      color: colors.green,
    },
    "& button": {
      fontWeight: 400,
      padding: 0,
      fontFamily: '"Rubik", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },
});

export { hoverableDropdownStyles };
