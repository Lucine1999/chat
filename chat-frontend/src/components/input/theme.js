import { createTheme } from "@mui/material/styles";
import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const theme = createTheme({
  components: {
    MuiTextField: {
      variants: [
        {
          props: { size: "small" },
          style: {
            "& input": {
              fontSize: 14,
              height: 34,
              boxSizing: "border-box",
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            "& input": {
              height: 40,
              fontSize: 14,
              boxSizing: "border-box",
            },
          },
        },
        {
          props: { borders: "rounded", size: "small" },
          style: {
            "& >div": {
              borderRadius: 20,
            },
          },
        },
        {
          props: { borders: "rounded", size: "large" },
          style: {
            "& >div": {
              borderRadius: 30,
            },
          },
        },
        {
          props: { borders: "square" },
          style: {
            "& >div": {
              borderRadius: 0,
            },
          },
        },
        {
          props: { state: "noFocus" },
          style: {
            "& fieldset": {
              border: `1px solid ${colors.milky} !important`,
            },
          },
        },
        {
          props: { borders: "none" },
          style: {
            "& fieldset": {
              border: "none !important",
            },
            "& >div:hover fieldset": {
              border: "none !important",
            },
          },
        },
      ],
    },
  },
});

const globalInputStyles = createUseStyles({
  w100: {
    width: "100%",
  },
  inputLabelStyle: {
    position: "relative",
    transform: "none",
  },
});

export { theme, globalInputStyles };
