import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "../button";
import Input from "../input";
import signInModalStyles from "./styles";
import { signIn } from "../../redux/auth/actions";

function SignInModal({ open, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = signInModalStyles();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    closeModal();
    dispatch(signIn(data));
  };

  const handleSignUp = () => {
    closeModal();
    return navigate("/signup");
  };

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
      <form className={classes.formStyle} onSubmit={handleSignInSubmit}>
        <DialogContent>
          <div>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borders="square"
              state="noFocus"
              htmlFor="email"
              name="email"
              type="email"
              labelValue="Email *"
              size="large"
            />
          </div>
          <div>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borders="square"
              state="noFocus"
              htmlFor="password"
              name="password"
              type="password"
              labelValue="Password *"
              size="large"
              autoComplete="current-password"
            />
          </div>
        </DialogContent>
        <DialogActions className={classes.modalActions}>
          <div className={classes.btnContainer}>
            <Button
              color="info"
              className={classes.authLink}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <div>
              <Button purpose="modalCancel" onClick={closeModal} disableRipple>
                Cancel
              </Button>
              <Button color="primary" type="submit" disableRipple>
                Sign In
              </Button>
            </div>
          </div>
        </DialogActions>
      </form>
    </Dialog>
  );
}

SignInModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignInModal;
