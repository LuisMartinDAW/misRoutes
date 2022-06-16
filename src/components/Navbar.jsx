import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';


export default function Navbar(){
  return (
    <div>
      <ul>
        <il>
        <NavLink className={({isActive}) => isActive ? 'active' : ' '}to="/">Home</NavLink>
        </il>
        <il>
        <NavLink className={({isActive}) => isActive ? 'active' : ' '} to="/about">about</NavLink>
        </il>
        <il>
        <NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to="/user">user</NavLink>
        </il>
      </ul>
    </div>
  )
}