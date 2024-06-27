/**
 * @file This file contains the ECommerce component, which represents a dashboard for an E-commerce application.
 * @module ECommerce
 */
"use client";
import React from "react";
import './style.css';

/**
 * The ECommerce functional component.
 * @component
 * @return {JSX.Element} The rendered ECommerce component.
 */
const ECommerce: React.FC = () => {
  return (
    <>
      <div className="ecommerce-container">
        <div className="main__content">
          <h2>Welcome in Sample Application</h2>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
