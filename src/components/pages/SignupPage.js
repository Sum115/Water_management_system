// // SignupPage.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import AdminSignup from '../AdminSignup';
// import UserSignup from '../UserSignup';
// import './SignupPage.css'; // Import your component-specific CSS file

// function SignupPage() {
//   return (
//     <div className="signup-container">
//       <h1 className="signup-heading">Signup</h1>
//       <div className="signup-options">
//         <div className="signup-option">
//           <h2 className="option-heading">Admin Signup</h2>
//           <AdminSignup />
//           <button className="signup-button">Signup as Admin</button>
//         </div>
//         <div className="signup-option">
//           <h2 className="option-heading">User Signup</h2>
//           <UserSignup />
//           <button className="signup-button">Signup as User</button>
//         </div>
//       </div>
//       <div className="login-link">
//         Already registered? <Link to="/login" className="login-link">Login</Link>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;

// SignupPage.js
// SignupPage.js
// SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css'; // Import your CSS file for signup page styles

function SignupPage() {
  // State to manage selected role
  const [selectedRole, setSelectedRole] = useState('user');

  // Function to handle role selection
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div className="form-group">
          <label>Role</label>
          <div className="role-options">
            <label>
              <input
                type="radio"
                value="admin"
                checked={selectedRole === 'admin'}
                onChange={handleRoleChange}
              />
              Admin
            </label>
            <label>
              <input
                type="radio"
                value="user"
                checked={selectedRole === 'user'}
                onChange={handleRoleChange}
              />
              User
            </label>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="login-link">
        Already registered? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
