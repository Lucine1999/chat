import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Header from "./header";
import Loader from "../components/loader";

function Layout({ children }) {
  const showLoader = useSelector((state) => state.auth.loading);

  return (
    <>
      <Header />
      {children}
      {showLoader && <Loader />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Layout;
