import React from 'react';
import Nav from './Nav';
import '../css/Header.css';

export default function Header(props) {
  return (
  <header>
    <Nav withHamburger />
  </header>
  )
}