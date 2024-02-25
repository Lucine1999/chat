import { Suspense } from "react";
import PropTypes from "prop-types";
import Loader from "../loader";

function Fallback({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

Fallback.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Fallback;
