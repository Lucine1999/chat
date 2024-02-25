import { createUseStyles } from "react-jss";

const loaderStyles = createUseStyles({
  loader: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    minHeight: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.7)",
    zIndex: 10,
  },
});

export default loaderStyles;
