// src/App.jsx
//Implementing React-1

// import React from 'react';
// import Home from './Home';
// import './App.css'; // Import global styles
// import Addbook from './components/Addbook';
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// function App() {
//   return (
//    <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/Add' element={<Addbook/>}/>

//    </Routes>
//   );
// }

// export default App;
import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import Addbook from './components/Addbook';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Add' element={<Addbook/>}/>

   </Routes>
  );
}

export default App;