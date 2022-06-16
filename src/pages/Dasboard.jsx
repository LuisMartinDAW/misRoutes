import React from 'react';
import {useNavigate, Link, Outlet} from 'react-router-dom';

export default function Dasboard(){

  const navigate = useNavigate();
  
  const handleClick = () =>{
    navigate('/');
    
  }

  return(
    <div>
      <h1>Dasboard</h1>
        <button onClick={handleClick}>Logout</button>
      <Link to='welcome'>
        <br/>
      Say welcome!!!.
      </Link>
        <br/>
      <Link to='goodbye'>
        Say GoodBye!!!
        </Link>

      <Outlet/>
    
      
      
    </div>
  );
}