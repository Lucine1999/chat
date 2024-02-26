import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { HoverableDropdown } from "../../components/dropdown";
import { signOut } from "../../redux/auth/actions";
import Button from "../../components/button";
import { iconsStyles } from "./styles";
import SignInModal from "../../components/modals/SignInModal";

function AccountLinks() {
  const [signOutModal, setSignOutModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const classes = iconsStyles();

  const handleSignOut = () => {
    dispatch(signOut());
    setSignOutModal(false);
  };

  const signOutModalElement = (
    <Dialog
      open={signOutModal}
      onClose={() => setSignOutModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={{ padding: 20 }}>
        <DialogTitle
          id="alert-dialog-title"
          style={{ padding: 0, marginBottom: 20 }}
        >
          Are you sure you want to sign out?
        </DialogTitle>
        <DialogActions>
          <Button
            purpose="modalCancel"
            onClick={() => setSignOutModal(false)}
            disableRipple
          >
            Cancel
          </Button>
          <Button color="primary" onClick={handleSignOut} disableRipple>
            Sign Out
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );

  let allowedLinks;
  if (role) {
    allowedLinks = [
      {
        item: (
          <Button
            key="signout"
            color="info"
            purpose="dropdownBtn"
            onClick={() => setSignOutModal(true)}
            disableRipple
          >
            Sign out
          </Button>
        ),
        key: "signout",
      },
    ];

    if (role === "USER") {
      allowedLinks.splice(1, 0);
    }
  } else {
    allowedLinks = [
      {
        item: (
          <Link key="signin" to="/signin">
            Sign In
          </Link>
        ),
        key: "signIn",
      },
      {
        item: (
          <Link key="signup" to="/signup">
            Sign Up
          </Link>
        ),
        key: "signUp",
      },
    ];
  }

  return (
    <Grid item md={2} className={classes.iconsContainer}>
      <HoverableDropdown value={<PeopleOutlineIcon />} list={allowedLinks} />
      {signOutModalElement}
      <SignInModal
        open={signInModal}
        closeModal={() => setSignInModal(false)}
      />
    </Grid>
  );
}

export default AccountLinks;
