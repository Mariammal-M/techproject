import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeView.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function EmployeeViewPage() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ajith Kumar", mobile: "+91 9876543456", city: "Kovilpatti", gender: "Male", workType: "Cleaning" },
    { id: 2, name: "Peter John", mobile: "+91 6754378908", city: "Satur", gender: "Male", workType: "Cleaning" },
    { id: 3, name: "Prasath", mobile: "+91 7678654389", city: "Tirunelveli", gender: "Male", workType: "Receptionist" },
    { id: 4, name: "Yuvaraj", mobile: "+91 5678907530", city: "Sivagsai", gender: "Male", workType: "Receptionist" },
    { id: 5, name: "Karthik", mobile: "+91 7865439876", city: "Kovilpatti", gender: "Male", workType: "Receptionist" },
    { id: 6, name: "Senthil", mobile: "+91 6789765423", city: "SangaranKovil", gender: "Male", workType: "Cleaning" }
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);
  const navigate = useNavigate(); // for navigation

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleEditClick = (employee) => {
    setEditingEmployee({ ...employee }); // create a copy to edit
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updatedEmployees = employees.map(emp =>
      emp.id === editingEmployee.id ? editingEmployee : emp
    );
    setEmployees(updatedEmployees);
    setEditingEmployee(null);
  };

  const handleAddNew = () => {
    navigate("/add-employee");
  };

  return (
    <div className="employee-view-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Tech<span>Lambdas</span></h2>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h2>Employee View</h2>
          <button className="add-new-button" onClick={handleAddNew}>+ Add New</button>
        </header>
        
        <h3>All Employees</h3>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Employee Name</th>
              <th>Mobile Number</th>
              <th>City</th>
              <th>Gender</th>
              <th>Work Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.mobile}</td>
                <td>{employee.city}</td>
                <td>{employee.gender}</td>
                <td>{employee.workType}</td>
                <td>
                  <button className="action-button edit-button" onClick={() => handleEditClick(employee)}>
                    <FaEdit />
                  </button>
                  <button className="action-button delete-button" onClick={() => handleDelete(employee.id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Form Section */}
        {editingEmployee && (
          <div className="edit-form">
            <h3>Edit Employee</h3>
            <input
              name="name"
              value={editingEmployee.name}
              onChange={handleEditChange}
              placeholder="Name"
            />
            <input
              name="mobile"
              value={editingEmployee.mobile}
              onChange={handleEditChange}
              placeholder="Mobile"
            />
            <input
              name="city"
              value={editingEmployee.city}
              onChange={handleEditChange}
              placeholder="City"
            />
            <input
              name="gender"
              value={editingEmployee.gender}
              onChange={handleEditChange}
              placeholder="Gender"
            />
            <input
              name="workType"
              value={editingEmployee.workType}
              onChange={handleEditChange}
              placeholder="Work Type"
            />
            <div className="edit-buttons">
              <button onClick={handleSaveEdit} className="save-button">Save</button>
              <button onClick={() => setEditingEmployee(null)} className="cancel-button">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeViewPage;
