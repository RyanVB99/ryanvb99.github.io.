// import { useState } from 'react';
// import NavBar from './NavBar';
// import Board from './Board';

// /* 
// Jagged Array
// Get row of specified index as opposed to checking move (rename function)
// Check which boxes have been checked this turn "old state" and "working state" (new moves list) and "visible board"
// */

// export default function Website() {
//   return (
//     <div>
//       <NavBar />
//       <Board />
//     </div>
//   );
// } 

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

// Hello there

export default App;

