// import React from 'react';
// import './App.css';
// import ReactDOM from 'react-dom';
// import { LoginPage } from "./MyComponents/LoginPage";
// import { Dashboard } from "./MyComponents/Dashboard";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashbard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import './App.css';
import { LoginPage } from "./MyComponents/LoginPage";
import { Dashboard } from "./MyComponents/Dashboard";
import NotFound from "./MyComponents/NotFound";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;

