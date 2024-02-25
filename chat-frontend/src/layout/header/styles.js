import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const iconsStyles = createUseStyles({
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    "& > div:first-child": {
      marginLeft: 12,
    },
    "& > *": {
      marginRight: 8,
    },
    "& .MuiButton-root": {
      padding: 0,
      minWidth: "auto",
    },
  },
  icons: {
    cursor: "pointer",
    "&:hover": {
      color: colors.green,
    },
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
  selectedCurrency: {
    color: colors.green,
  },
  bottomCategories: {
    display: "flex",
    alignItems: "center",
  },
  categoryLinks: {
    color: colors.black,
  },
  iconBtn: {
    position: "relative",
    padding: 0,
    color: colors.black,
    "& a": {
      fontSize: 0,
    },
  },
  "@media screen and (max-width: 900px)": {
    iconsContainer: {
      "& .MuiButton-root": {
        minWidth: "auto",
        padding: 0,
        paddingBottom: 3,
        marginRight: 8,
      },
    },
    icons: {
      marginRight: 8,
    },
    formatAlignIcon: {
      padding: 4,
      border: `1px solid ${colors.black}`,
    },
    itemCount: {
      right: 3,
    },
  },
});

const navbarStyles = createUseStyles({
  navList: {
    display: "flex",
    alignItems: "center",
  },
  navListItems: {
    padding: [[0, 15]],
  },
  navLinks: {
    position: "relative",
    display: "block",
    padding: [[15, 0]],
    color: colors.black,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: 500,
    transition: "all 0.3s ease 0s",
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: 3,
      background: colors.black,
      bottom: -1,
      left: 0,
      opacity: 0,
      visibility: "hidden",
      transition: ".3s",
    },
    "&:hover": {
      color: colors.green,
      "&:before": {
        opacity: 1,
        visibility: "visible",
      },
    },
  },
  activeLink: {
    color: colors.green,
    "&:before": {
      opacity: 1,
      visibility: "visible",
    },
  },
  "@media screen and (max-width: 900px)": {
    nav: {
      borderLeft: "none",
      marginTop: 25,
      alignItems: "start",
    },
    navList: {
      flexDirection: "column",
      padding: [[0, 15]],
    },
    navListItems: {
      borderBottom: `1px solid ${colors.milky}`,
      width: "100%",
      boxSizing: "border-box",
      padding: 0,
    },
    navLinks: {
      "&:before": {
        height: 2,
      },
    },
  },
});

const drawerStyles = createUseStyles({
  welcomeText: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 12,
  },
});

const headerStyles = createUseStyles({
  header: {
    display: "initial",
    background: "red",
  },
  headerParts: {
    borderBottom: `1px solid ${colors.milky}`,
  },
  stickyLine: {
    position: "sticky",
    top: "0px",
    background: colors.white,
    zIndex: 99,
  },
});

export { headerStyles, iconsStyles, navbarStyles, drawerStyles };
