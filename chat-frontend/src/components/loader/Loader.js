import CircularProgress from "@mui/material/CircularProgress";
import loaderStyles from "./styles";

function Loader() {
  const classes = loaderStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress color="success" size={80} />
    </div>
  );
}

export default Loader;
