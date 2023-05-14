// import React from 'react';
// import AboutPage from './AboutPage';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// export default function NavBar() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/about" component={AboutPage} />
//       </Switch>
//     </BrowserRouter>
//   ); 
// }

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
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
  );
}

export default NavBar;
