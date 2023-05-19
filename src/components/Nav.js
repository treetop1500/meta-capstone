import React, { useEffect, useState, useRef } from 'react';
import {ReactComponent as Logo} from './svg/Logo.svg';
import '../css/Nav.css';
import {ReactComponent as Hamburger} from './svg/bars-solid.svg';


function Nav(props) {

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  
  const menuToggle = useRef();
  const [menuVisible, setMenuVisible] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (window.innerWidth >=820 && !menuVisible) {
        setMenuVisible(true);
      } else if(window.innerWidth <820) {
        setMenuVisible(false);
      }
    }, 0)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)

    }
  })

  
  return (
    <nav>
      <Logo/>
      {props.withHamburger && <Hamburger ref={menuToggle} onClick={() => setMenuVisible(!menuVisible)}/>}
      {menuVisible && 
      <ul role='navigation'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/log-in">Log In</a></li>
      </ul>
      }
    </nav>
  )
}


export default Nav;