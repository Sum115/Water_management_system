// ProblemReportForm.js

import React, { useState } from 'react';
import './ProblemReportForm.css'; // Import your component-specific CSS file

function ProblemReportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problemType: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend)
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      problemType: '',
      description: ''
    });
  };

  return (
    <div className="problem-report-form-container">
      <h2>Report a Problem</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Problem Type:</label>
          <select name="problemType" value={formData.problemType} onChange={handleChange}>
            <option value="">Select a problem type</option>
            <option value="Water not coming">Water not coming</option>
            <option value="Low water pressure">Low water pressure</option>
            <option value="Water quality issue">Water quality issue</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProblemReportForm;
