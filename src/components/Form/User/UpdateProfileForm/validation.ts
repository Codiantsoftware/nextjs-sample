import * as yup from "yup";

/**
 * Validation schema for user profile form.
 * @returns {yup.ObjectSchema} Yup validation schema.
 */
export default function validation() {
  // Regular expression for validating phone number (allowing only numeric values)
  const phoneRegExp = /^[0-9]+$/;
  return yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Minimum 3 Character required"),

    email: yup.string().required("Email is required").email("Invalid email"),
    userName: yup.string().required("User name is required"),

    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .test("is-valid-phone", "Please enter valid phone number", (value) => {
        if (!value || phoneRegExp.test(value)) {
          return true;
        } else {
          return false;
        }
      }),
  });
}
