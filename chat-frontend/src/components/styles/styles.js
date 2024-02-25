import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const documentStyles = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
    },
    body: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
      fontFamily: "'Rubik', sans-serif",
      "& .MuiMenu-paper": {
        maxHeight: 320,
        overflow: "auto",
      },
      "@media screen and (max-width: 900px)": {
        "& .MuiMenu-paper": {
          minWidth: "auto !important",
          maxHeight: 220,
          overflow: "auto",
        },
        "& .MuiMenu-list": {
          maxHeight: "inherit",
        },
        "& .MuiMenuItem-root": {
          minHeight: "auto",
        },
      },
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
});

const globalStyles = createUseStyles({
  errorInput: {
    "& fieldset": {
      border: "1px solid #d22d3d !important",
    },
    "& textarea": {
      border: "1px solid #d22d3d !important",
    },
  },
  header: {
    background: colors.lightGrey,
    borderBottom: `1px solid ${colors.milky}`,
    padding: [[50, 0]],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& h1": {
      fontWeight: 500,
      fontSize: 42,
      marginBottom: 9,
    },
  },
  featuresSectionStyle: {
    padding: [[100, 40]],
    "& img": {
      marginBottom: 23,
    },
  },
  noData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: [[0, "auto"]],
    color: colors.black,
    paddingBottom: 32,
    "& img": {
      width: 400,
      height: 225,
      "@media screen and (max-width: 600px)": {
        width: "100%",
      },
    },
  },
  textCenter: {
    textAlign: "center",
  },
  mxAuto: {
    margin: "0 auto !important",
  },
  w100: {
    width: "100%",
  },
  mb30: {
    marginBottom: 30,
  },
  mb10: {
    marginBottom: 10,
  },
  inputStyle: {
    marginTop: 5,
    width: "100%",
  },
});

export { documentStyles, globalStyles };
