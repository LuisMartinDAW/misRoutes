import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import User from './pages/User.jsx';
import UserPage from './pages/UserPage.jsx';
import Dasboard from './pages/Dasboard.jsx';
import NotFound from './pages/NotFound.jsx';

import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <header>
     
      
        <Router>
           <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/about" element={<About/>} /> 
            <Route path="/user" element={<User/>} />
            <Route path="/userpage/:id" element={<UserPage/>} />
            <Route path="/usuarios" element={<Navigate to="/user"/>} />
            
    <Route path="/dasboard/*" element={<Dasboard/>} >
      
    <Route path="welcome" element={<p>Welcome!!!</p>} />
    <Route path="goodbye" element={<p>GoodBye!!!</p>} />      
    </Route>
            
            <Route path="*" element={<NotFound/>} />
           </Routes>
        </Router>
    </header>
  );
}

export default App;