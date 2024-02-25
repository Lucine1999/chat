import { createTheme } from "@mui/material/styles";
import { colors } from "../../constants/constants";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: colors.white,
            background: colors.green,
            "&:hover": {
              background: colors.black,
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            color: colors.white,
            background: colors.black,
            "&:hover": {
              background: colors.green,
            },
          },
        },
        {
          props: { page: "admin" },
          style: {
            textTransform: "capitalize",
            color: colors.white,
            background: "#24695c",
          },
        },
        {
          props: { color: "secondary", page: "admin" },
          style: {
            textTransform: "capitalize",
            color: colors.white,
            background: "#ba895d",
            "&:hover": {
              background: colors.black,
            },
          },
        },
        {
          props: { page: "admin", letter: "capitalize" },
          style: {
            height: 37,
            color: "white",
            background: "#a3a3a3",
            textTransform: "capitalize",
            padding: [[20, 10]],
            fontSize: 16,
            "&:hover": {
              background: "#575657",
            },
          },
        },
        {
          props: { color: "info" },
          style: {
            color: colors.black,
            background: "transparent",
            "&:hover": {
              color: colors.green,
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: 12,
            fontWeight: 700,
            height: 34,
            padding: "5px 20px",
          },
        },
        {
          props: { size: "large" },
          style: {
            height: 65,
            padding: "0 45px",
            fontSize: 15,
            fontWeight: 500,
          },
        },
        {
          props: { borders: "rounded", size: "small" },
          style: {
            borderRadius: 20,
          },
        },
        {
          props: { borders: "rounded", size: "large" },
          style: {
            borderRadius: 30,
          },
        },
        {
          props: { purpose: "dropdownBtn" },
          style: {
            textTransform: "Capitalize",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { purpose: "viewOrderProducts" },
          style: {
            backgroundColor: "transparent",
            color: colors.green,
            textTransform: "Capitalize",
            "&:hover": {
              backgroundColor: "transparent",
              color: colors.green,
            },
          },
        },
        {
          props: { purpose: "modalCancel" },
          style: {
            border: "1px solid #ddd",
            color: "#7b7474",
            padding: [[3, 8]],
            height: 36,
            background: "transparent",
            "&:hover": {
              backgroundColor: "#343535",
              color: colors.white,
            },
          },
        },
        {
          props: { purpose: "modalSubmit" },
          style: {
            background: "transparent",
            color: colors.black,
            padding: "3px 8px",
            border: `3px solid ${colors.green}`,
            "&:hover": {
              backgroundColor: colors.green,
              color: colors.white,
            },
          },
        },
        {
          props: { state: "open" },
          style: {
            color: colors.green,
          },
        },
      ],
    },
  },
});

export default theme;
