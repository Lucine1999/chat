import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Fallback from "../components/common/Fallback";
import Layout from "../layout";
import Loader from "../components/loader";

const Main = lazy(() => import("../pages/Main"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));

function PageRoutes() {
  const userRole = useSelector((state) => state.auth.role);
  const loading = useSelector((state) => state.auth.authLoading);

  let allowedRoutes;

  if (userRole === "") {
    allowedRoutes = (
      <>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <Layout>
      <Fallback>
        <Routes>
          <Route path="/" element={<Main />} />
          {allowedRoutes}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Fallback>
    </Layout>
  );
}

export default PageRoutes;
