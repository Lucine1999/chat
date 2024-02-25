import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";
import { globalStyles } from "../styles/styles";

const useStyles = createUseStyles({
  bannerLink: {
    "&:hover": {
      color: colors.green,
    },
  },
});

function Banner({ name }) {
  const globalClasses = globalStyles();
  const classes = useStyles();
  return (
    <div className={globalClasses.header}>
      <div>
        <h1>{name}</h1>
        <div>
          <Link to="/" className={classes.bannerLink}>
            Home
          </Link>{" "}
          / {name}
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Banner;
