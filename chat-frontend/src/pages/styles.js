import { createUseStyles } from "react-jss";
import { colors } from "../constants/constants";

const mainStyles = createUseStyles({
  usersList: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  user: {
    borderRadius: 10,
    width: "max-content",
    height: 40,
    padding: "5px 10px",
    marginRight: 20,
    textTransform: "capitalize",
  },
  chatWrapper: {
    width: 300,
    height: "calc(100vh - 300px)",
    margin: "0px auto",
    border: "1px solid #9e9e9e54",
    marginTop: 30,
  },
  messagesWrapper: {
    width: 300,
    height: "100%",
    overflowY: "auto",
  },
  messageWrapper: {
    width: "100%",
    maxWidth: 300,
    padding: "5px 5px",
    borderRadius: "4px",
    marginTop: "5px",
    marginBottom: "5px",
    display: "flex",
    boxSizing: "border-box",
  },
  message: {
    width: "max-content",
    backgroundColor: "#00000099",
    padding: 5,
    borderRadius: 4,
    color: "white",
  },
  time: {
    fontSize: 10,
  },
  sendButtonWrapper: {
    display: "flex",
    width: "100%",
  },
  emptyMessage: {
    paddingLeft: 26,
    fontSize: 20,
    fontWeight: 500,
  },
  input: {
    borderRight: "none",
  },
});

const signUpInStyles = createUseStyles({
  formContainer: {
    padding: [[50, 0]],
  },
  errorInput: {
    "& fieldset": {
      border: "1px solid #d22d3d !important",
    },
    "& textarea": {
      border: "1px solid #d22d3d !important",
    },
  },
  formStyle: {
    width: 350,
    border: `1px solid ${colors.milky}`,
    padding: "23px 20px 29px",
    boxSizing: "border-box",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  authLink: {
    "&:hover": {
      color: colors.green,
    },
  },
  mb10: {
    marginBottom: 10,
  },
});

export { mainStyles, signUpInStyles };
