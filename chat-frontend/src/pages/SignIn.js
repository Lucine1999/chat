import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Container } from "@mui/material";
import { Formik } from "formik";
import { signIn } from "../redux/auth/actions";
import Input from "../components/input";
import Button from "../components/button";
import Banner from "../components/common/Banner";
import { signUpInStyles } from "./styles";
import validations from "./validations";

function SignIn() {
  const dispatch = useDispatch();
  const classes = signUpInStyles();
  const { signInValidation } = validations;

  const handleSignInSubmit = (values) => {
    const { email, password } = values;
    const data = {
      email,
      password,
    };
    dispatch(signIn(data));
  };

  return (
    <>
      <Banner name="Sign In" />
      <Container className={classes.containerStyle}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          className={classes.formContainer}
        >
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signInValidation}
            onSubmit={(values) => handleSignInSubmit(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form className={classes.formStyle} onSubmit={handleSubmit}>
                <div
                  className={`${classes.mb10} ${
                    errors.email &&
                    touched.email &&
                    errors.email &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    value={values.email}
                    borders="square"
                    state="noFocus"
                    htmlFor="email"
                    name="email"
                    type="email"
                    labelValue="Email *"
                    size="large"
                    className={classes.mb10}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.password &&
                    touched.password &&
                    errors.password &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    value={values.password}
                    borders="square"
                    state="noFocus"
                    htmlFor="password"
                    name="password"
                    type="password"
                    labelValue="Password *"
                    size="large"
                    autoComplete="current-password"
                    className={classes.mb10}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <div className={classes.btnContainer}>
                  <Link to="/signup" className={classes.authLink}>
                    Click here to Sign Up
                  </Link>
                  <Button
                    type="submit"
                    color="primary"
                    borders="rounded"
                    size="small"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </Grid>
      </Container>
    </>
  );
}

export default SignIn;
