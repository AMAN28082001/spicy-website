// src/components/AppWrapper.tsx
"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import "../styles/globals.css";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
