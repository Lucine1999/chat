import * as Yup from "yup";

export default {
  signInValidation: Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .matches("^[a-zA-Z0-9]{3,30}$", "Password is invalid."),
  }),
  signUpValidation: Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First name is too short.")
      .required("First name is required."),
    lastName: Yup.string()
      .min(3, "Last name is too short.")
      .required("Last name is required."),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .matches("^[a-zA-Z0-9]{3,30}$", "Password is invalid."),
  }),
};
