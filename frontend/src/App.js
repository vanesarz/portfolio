// import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
// import AppRoutes from './routes'

// function App() {
//   return (
//     <Router>
//       <div className="main-content">
//         <Sidebar />
//         <AppRoutes />
//       </div>
//     </Router>
//   )
// }

// export default App

import React from 'react';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <AppRoutes />
    </div>
  );
}

export default App;


// import React from 'react';

// export default function TestComponent() {
//   return <div>Hello React!</div>;
// }