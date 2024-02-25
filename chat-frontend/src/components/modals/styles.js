import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const signInModalStyles = createUseStyles({
  formStyle: {
    minWidth: 400,
  },
  modalActions: {
    padding: [[16, 24]],
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginLeft: 10,
    },
  },
  authLink: {
    "&:hover": {
      color: colors.green,
    },
  },
});

export default signInModalStyles;
