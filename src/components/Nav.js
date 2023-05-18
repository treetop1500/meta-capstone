import React from 'react';
import ReactDOM from 'react-dom/client';
import {ReactComponent as Logo} from './svg/Logo.svg';

export default function Nav() {
  return (
    <nav>
      <ul role='navigation'>
        <li><Logo/></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Log In</a></li>
      </ul>
    </nav>
  )
}