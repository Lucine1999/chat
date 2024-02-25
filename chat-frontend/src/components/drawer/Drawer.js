import PropTypes from "prop-types";
import MuiDrawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import drawerStyles from "./styles";

function Drawer({
  children,
  anchorDirection,
  OpenIcon,
  outline,
  open,
  toggleDrawer,
  drawerWidth,
  count,
}) {
  const classes = drawerStyles({ drawerWidth });

  return (
    <>
      <span className={classes.openIcon}>
        {!!count && <span className={classes.itemCount}>{count}</span>}
        <OpenIcon
          className={clsx(classes.icons, {
            [classes.outline]: outline,
          })}
          onClick={toggleDrawer}
        />
      </span>
      <MuiDrawer
        className={classes.drawer}
        anchor={anchorDirection}
        open={open}
        onClose={toggleDrawer}
        disableScrollLock
      >
        {children}
        <CloseIcon className={classes.closeIcon} onClick={toggleDrawer} />
      </MuiDrawer>
    </>
  );
}

Drawer.propTypes = {
  anchorDirection: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.objectOf(PropTypes.element),
  ]),
  OpenIcon: PropTypes.elementType,
  outline: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerWidth: PropTypes.number,
  count: PropTypes.number,
};

export default Drawer;
