import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { hideSnackbar } from "../../redux/app/appSlice";

function SnackBar({ type, message, delay = 3000 }) {
  const [openSnackbar, setOpenSnackbar] = useState({
    open: true,
    vertical: "bottom",
    horizontal: "right",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  const { open, vertical, horizontal } = openSnackbar;

  const dispatch = useDispatch();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(hideSnackbar());
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [dispatch, delay]);

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={3000}
      message={message}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <Alert severity={type} variant="filled">
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

SnackBar.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default SnackBar;
