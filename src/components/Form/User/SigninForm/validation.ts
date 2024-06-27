import * as yup from "yup";

/**
 * Returns a Yup validation schema for the login form.
 * @function
 * @returns {Object} Yup validation schema.
 */
export default function validation() {
  return yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .min(6, "Password must be minimum 6 digit")
      .max(15, "Password must be maximum 15 digit")
      .required("Password is required"),
  });
}
