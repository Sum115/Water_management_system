// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './LandingPage.css'; // Import CSS file for LandingPage styles
// import logo from './logo.png';

// function LandingPage() {
//   const location = useLocation();

//   // Check if the current location is the landing page
//   const isLandingPage = location.pathname === '/';

//   return (
//     <div className={`landing-container ${isLandingPage ? 'landing-page' : ''}`}>
//       <div className="logo-container">
//         {/* Use the imported logo image */}
//         <img src={logo} alt="logo" className="logo" />
//       </div>
//       <div className="content">
//         <div className="login-form-container">
//           <h2>Login</h2>
//           <form className="login-form">
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <Link to="/home"> {/* Redirects to home page */}
//               <button type="submit">Login</button>
//             </Link>
//             <div className="signup-link">
//               Don't have an account? <Link to="/signup">Signup</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LandingPage.css'; // Import CSS file for LandingPage styles
import logo from './logo.png';

function LandingPage() {
  const location = useLocation();

  // Check if the current location is the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <div className={`landing-container ${isLandingPage ? 'landing-page' : ''}`}>
      <div className="logo-container">
        {/* Use the imported logo image */}
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="content">
        <div className="login-form-container">
          <h2>Login</h2>
          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/home"> {/* Redirects to home page */}
              <button type="submit">Login</button>
            </Link>
            <div className="signup-link">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
        <div className="college-info">
          <p>My College Name</p>
          <p>Water Supply Management</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
















