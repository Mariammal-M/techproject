// import React, { useState } from 'react';
// import './Employee.css';

// const employees = [
//   { name: 'John Doe', number: '1234567890', location: 'New York', qualification: 'B.Tech in CSE' },
//   { name: 'Jane Smith', number: '9876543210', location: 'California', qualification: 'MBA in HR' },
//   { name: 'Mike Johnson', number: '4561237890', location: 'Texas', qualification: 'Diploma in IT' },
// ];

// function EmployeePage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleQualification = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="container">
//       <div className="left-panel">
//         <h2>
//           <span className="highlight-white">Employee</span>{' '}
//           <span className="highlight-blue">Details</span>
//         </h2>
//       </div>

//       <div className="right-panel">
//         <h1>View Employee</h1>
//         <table className="employee-table">
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Employee Name</th>
//               <th>Mobile Number</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp, index) => (
//               <React.Fragment key={index}>
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>
//                     {emp.name}
//                     <br />
//                     <button onClick={() => toggleQualification(index)}>+</button>
//                   </td>
//                   <td>{emp.number}</td>
//                   <td>{emp.location}</td>
//                 </tr>
//                 {openIndex === index && (
//                   <tr className="qualification-row">
//                     <td colSpan="4">Qualification: {emp.qualification}</td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default EmployeePage;



import React, { useState } from 'react';
import './Employee.css';

const employeesInitial = [
  { name: 'John Doe', number: '1234567890', location: 'New York', qualification: 'B.Tech in CSE' },
  { name: 'Jane Smith', number: '9876543210', location: 'California', qualification: 'MBA in HR' },
  { name: 'Mike Johnson', number: '4561237890', location: 'Texas', qualification: 'Diploma in IT' },
];

function EmployeePage() {
  const [employees, setEmployees] = useState(employeesInitial);
  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    location: '',
    gender: '',
    workType: '',
  });

  const [errors, setErrors] = useState({});

  const toggleQualification = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!/^\d{10}$/.test(formData.number)) newErrors.number = 'Mobile number must be 10 digits';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.workType) newErrors.workType = 'Work Type is required';
    return newErrors;
  };

  const handleAddEmployee = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setEmployees([...employees, { ...formData, qualification: 'N/A' }]);
      setFormData({ name: '', number: '', location: '', gender: '', workType: '' });
      setShowPopup(false);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>
          <span className="highlight-white">Tech</span>
          <span className="highlight-blue">Lambdas</span>
        </h2>
      </div>

      <div className="right-panel">
        <div className="header">
          <h1> Employee View</h1>
          <button className="add-btn" onClick={() => setShowPopup(true)}>Add Employee</button>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th> </th>
              <th>S.No</th>
              <th>Employee Name</th>
              <th>Mobile Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>
                  <button onClick={() => toggleQualification(index)}>+</button>
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    
                    {emp.name}
                  </td>
                  <td>{emp.number}</td>
                  <td>{emp.location}</td>
                </tr>
                {openIndex === index && (
                  <tr className="qualification-row">
                    <td colSpan="4">Qualification: {emp.qualification}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {showPopup && (
  <div className="popup-form">
    <h2>Add New Employee</h2>

    <div className="form-group">
      <label>Name<span>*</span></label>
      <input name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <span className="error">{errors.name}</span>}
    </div>

    <div className="form-group">
      <label>Mobile Number<span>*</span></label>
      <input name="number" value={formData.number} onChange={handleChange} />
      {errors.number && <span className="error">{errors.number}</span>}
    </div>

    <div className="form-group">
      <label>Location</label>
      <input name="location" value={formData.location} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Gender<span>*</span></label>
      <div className="radio-group">
        <label><input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === "Male"} /> Male</label>
        <label><input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"} /> Female</label>
        {/* <label><input type="radio" name="gender" value="Other" onChange={handleChange} checked={formData.gender === "Other"} /> Other</label> */}
      </div>
      {errors.gender && <span className="error">{errors.gender}</span>}
    </div>

    <div className="form-group">
      <label>Work Type<span>*</span></label>
      <select name="workType" value={formData.workType} onChange={handleChange}>
        <option value="">Select Work Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Intern">Intern</option>
      </select>
      {errors.workType && <span className="error">{errors.workType}</span>}
    </div>

    <div className="popup-actions">
      <button className="submit-btn" onClick={handleAddEmployee}>Submit</button>
      <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancel</button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default EmployeePage;