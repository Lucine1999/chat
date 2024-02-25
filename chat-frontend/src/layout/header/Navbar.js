import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { NAV_LINKS } from "../../constants/constants";
import { navbarStyles } from "./styles";

function NavBar({ toggleDrawer }) {
  const classes = navbarStyles();
  return (
    <Grid item md={9}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {NAV_LINKS.map(({ route, name }) => (
            <li className={classes.navListItems} key={name}>
              <div
                onClick={toggleDrawer}
                role="button"
                tabIndex={0}
                onKeyDown={toggleDrawer}
              >
                <NavLink
                  to={route}
                  className={(data) =>
                    `${data.isActive ? classes.activeLink : ""} ${
                      classes.navLinks
                    }`
                  }
                >
                  {name}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </Grid>
  );
}

NavBar.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default NavBar;
