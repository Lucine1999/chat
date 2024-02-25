import PropTypes from "prop-types";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../button";
import { hoverableDropdownStyles } from "./styles";

function HoverableDropdown({ value, list, change }) {
  const classes = hoverableDropdownStyles();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const handleDropdownClick = (key) => {
    popupState.close();
    return change && change(key);
  };

  return (
    <div>
      <Button
        {...bindHover(popupState)}
        color="info"
        purpose="dropdownBtn"
        state={popupState.isOpen ? "open" : ""}
        disableRipple
      >
        {value}
      </Button>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        disableScrollLock
      >
        {list.map(({ key, item }) => (
          <MenuItem
            className={classes.menuItems}
            key={key}
            onClick={() => handleDropdownClick(key)}
            disableRipple
          >
            {item}
          </MenuItem>
        ))}
      </HoverMenu>
    </div>
  );
}

HoverableDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.object,
    ]),
  ),
  change: PropTypes.func,
};

export default HoverableDropdown;
