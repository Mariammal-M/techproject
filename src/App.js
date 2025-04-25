import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import EmployeeViewPage from "./components/EmployeeView";
import EmployeePage from "./components/employee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/employee" element={<EmployeeViewPage />} />
        <Route path="/add-employee" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
}

export default App;