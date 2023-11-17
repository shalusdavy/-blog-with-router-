import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import App from "../App";
import AdminForm from "./AdminForm";

const Blogrouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api" element={<AdminForm />} />
      </Routes>
    </Router>
  );
};

export default Blogrouter;

