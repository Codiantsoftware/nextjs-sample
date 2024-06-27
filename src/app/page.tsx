/**
 * @file This file contains the Home component, which serves as the main entry point for the application.
 * @module Home
 */
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";

/**
 * Metadata for the Home page.
 * @typedef {Object} Metadata
 * @property {string} title - The title of the page.
 * @property {string} description - The description of the page.
 */
export const metadata: Metadata = {
  title: "Sample",
  description: "",
};

/**
 * The Home functional component.
 * @component
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <>
      <ToastContainer />
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
