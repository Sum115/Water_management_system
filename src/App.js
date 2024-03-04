// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import ProblemReportForm from './components/ProblemReportForm';
// import WaterQualityCheck from './components/WaterQualityCheck';
// import './App.css'; // Import your CSS file for global styles
// import NoticeFunc from './components/Notice'; // Import the Notice component
// import SignupPage from './components/pages/SignupPage'; // Adjust the path for SignupPage
// import LoginPage from './components/pages/LoginPage'; // Adjust the path for LoginPage

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/report-problem" element={<ProblemReportForm />} />
//             <Route path="/water-quality" element={<WaterQualityCheck />} />
//             <Route path="/notice-view" element={<NoticeFunc />} />
//             {/* Add routes for login and signup */}
//             <Route path="/signup" element={<SignupPage />} />
//             <Route path="/login" element={<LoginPage />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProblemReportForm from './components/ProblemReportForm';
import WaterQualityCheck from './components/WaterQualityCheck';
import LoginPage from './components/pages/LoginPage'; // Import LoginPage component
import SignupPage from './components/pages/SignupPage'; // Import SignupPage component
import './App.css'; // Import your CSS file for global styles
import NoticeFunc from './components/Notice'; // Import the Notice component

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report-problem" element={<ProblemReportForm />} />
            <Route path="/water-quality" element={<WaterQualityCheck />} />
            <Route path="/notice-view" element={<NoticeFunc />} />
            <Route path="/login" element={<LoginPage />} /> {/* Add route for LoginPage */}
            <Route path="/signup" element={<SignupPage />} /> {/* Add route for SignupPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
