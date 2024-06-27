/**
 * @file This file contains the update user profile component, which contains a form for update user profile.
 * @module LoginForm
 */
"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import validation from "./validation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

/**
 * Represents the props for the update user profile component.
 * @typedef {Object} UpdateProfileFormProps
 * @property {Function} onSubmit - Callback function for form submission.
 */
interface UpdateProfileFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    userName: string;
    phoneNumber: string;
  }) => void;
}

/**
 * Represents the initial values for the update user profile component.
 * @typedef {Object} InitialValues
 * @property {string} name - The user's name.
 * @property {string} email - The user's email.
 * @property {string} userName - The user's userName.
 * @property {string} phoneNumber - The user's phoneNumber.
 */
interface InitialValues {
  name: string;
  email: string;
  userName: string;
  phoneNumber: string;
}

/**
 * Component for updating user profile information.
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.onSubmit - Function to handle form submission.
 * @returns {JSX.Element} JSX element representing the UpdateProfileForm component.
 */
const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({ onSubmit }) => {
  
const userData = useSelector((state: RootState) => state.auth.auth);
  /**
   * Initial values for the form fields.
   * @type {Object}
   * @property {string} name - User's name.
   * @property {string} email - User's email.
   * @property {string} userName - User's username.
   * @property {string} phoneNumber - User's phone number.
   */
  const initialValues: InitialValues = {
    email: userData?.email || "",
    name: userData?.name || "",
    userName: userData?.userName||"",
    phoneNumber: userData?.phoneNumber||"",
  };

  useEffect(() => {
    initialValues.email = userData?.email || "";
    initialValues.name = userData?.name || "";
    initialValues.userName = userData?.userName || "";
    initialValues.phoneNumber = userData?.phoneNumber || "";

  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={validation}
      >
        {(props) => {
          return (
            <Form>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fullName"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <Field
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter name"
                    />
                    {props?.errors?.name && props?.touched?.name ? (
                      <div style={{ color: "red" }}>{props?.errors?.name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <Field
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter phone number"
                  />
                  {props?.errors?.phoneNumber && props?.touched?.phoneNumber ? (
                    <div style={{ color: "red" }}>
                      {props?.errors?.phoneNumber}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Field
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  {props?.errors?.email && props?.touched?.email ? (
                    <div style={{ color: "red" }}>{props?.errors?.email}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="Username"
                >
                  Username
                </label>
                <Field
                  className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  name="userName"
                  placeholder="Enter user name"
                />
                {props?.errors?.userName && props?.touched?.userName ? (
                  <div style={{ color: "red" }}>{props?.errors?.userName}</div>
                ) : null}
              </div>

              <div className="flex justify-end gap-4.5">
                <button
                  className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                  type="submit"
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                  type="submit"
                >
                  Save
                </button>
              </div>  
            </Form>
          ); 
        }}
      </Formik>
    </>
  );
};

export default UpdateProfileForm;
