import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const drawerStyles = createUseStyles({
  drawer: ({ drawerWidth }) => ({
    position: "relative",
    "& .MuiPaper-root ": {
      padding: [[50, 10, 15]],
      width: drawerWidth,
      height: "100vh",
    },
  }),
  openIcon: {
    lineHeight: 0,
    position: "relative",
  },
  itemCount: {
    position: "absolute",
    top: -8,
    right: -5,
    width: 13,
    height: 13,
    lineHeight: 1.3,
    borderRadius: "50%",
    fontSize: 10,
    color: colors.white,
    textAlign: "center",
    background: colors.green,
    padding: 2,
  },
  icons: {
    cursor: "pointer",
    "&:hover": {
      color: colors.green,
    },
  },
  outline: {
    padding: 4,
    border: `1px solid ${colors.black}`,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    color: colors.black,
    border: `1px solid ${colors.milky}`,
    borderRadius: "50%",
    cursor: "pointer",
  },
  "@media screen and (max-width: 900px)": {
    icons: {
      marginRight: 8,
    },
    itemCount: {
      right: 3,
    },
  },
});

export default drawerStyles;
