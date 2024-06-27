/**
 * @file This file contains the Default layout component component
 * @module Default layout component
 */
"use client";
import React, { useState, ReactNode } from "react";
import Header from "@/components/Header";

/**
 * Default layout component representing the overall structure of the application.
 * @param {object} props - React props for the component.
 * @param {ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} React component.
 */
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
