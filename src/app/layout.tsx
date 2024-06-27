/**
 * @file This file contains the RootLayout component, which serves as the root layout for the application.
 * @module RootLayout
 */
"use client";
// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import ReduxProvider from "@/redux/provider";

/**
 * The RootLayout functional component.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @return {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  /**
   * useEffect hook to simulate loading delay.
   * @function
   * @memberof RootLayout
   * @inner
   */
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : <ReduxProvider>{children}</ReduxProvider>}
        </div>
      </body>
    </html>
  );
}
