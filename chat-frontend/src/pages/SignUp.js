import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/actions";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Banner from "../components/common/Banner";
import validations from "./validations";

import { signUpInStyles } from "./styles";

function SignUp() {
  const { signUpValidation } = validations;
  const classes = signUpInStyles();

  const dispatch = useDispatch();

  const handleSignUpSubmit = (values) => {
    const { email, password, firstName, lastName } = values;

    const data = {
      email,
      password,
      firstName,
      lastName,
    };
    dispatch(signUp(data));
  };

  return (
    <>
      <Banner name="Sign Up" />
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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={signUpValidation}
            onSubmit={(values) => handleSignUpSubmit(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className={classes.formStyle}>
                <div
                  className={`${classes.mb10} ${
                    errors.firstName &&
                    touched.firstName &&
                    errors.firstName &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    value={values.firstName}
                    borders="square"
                    state="noFocus"
                    htmlFor="firstName"
                    name="firstName"
                    type="text"
                    labelValue="First name *"
                    size="large"
                    className={classes.mb10}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                </div>
                <div
                  className={`${classes.mb10} ${
                    errors.lastName &&
                    touched.lastName &&
                    errors.lastName &&
                    `${classes.errorInput}`
                  }`}
                >
                  <Input
                    value={values.lastName}
                    borders="square"
                    state="noFocus"
                    htmlFor="lastName"
                    name="lastName"
                    type="text"
                    labelValue="Last name *"
                    size="large"
                    className={classes.mb10}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div style={{ color: "#d22d3d" }}>
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </div>
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
                    required
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
                  <Link to="/signin" className={classes.authLink}>
                    Click here to Sign In
                  </Link>
                  <Button
                    color="primary"
                    borders="rounded"
                    size="small"
                    type="submit"
                  >
                    Sign Up
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

export default SignUp;
