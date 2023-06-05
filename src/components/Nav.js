import React, { useEffect, useState, useRef } from 'react';
import {ReactComponent as Logo} from './svg/Logo.svg';
import '../css/Nav.css';
import {ReactComponent as Hamburger} from './svg/bars-solid.svg';
import { Link } from 'react-router-dom';


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
        <li><Link to="/" aria-label="On Click">Home</Link></li>
        <li><Link to="/about" aria-label="On Click">About</Link></li>
        <li><Link to="/menu" aria-label="On Click">Menu</Link></li>
        <li><Link to="/booking" aria-label="On Click">Reservations</Link></li>
        <li><Link to="/order-online" aria-label="On Click">Order Online</Link></li>
        <li><Link to="/log-in" aria-label="On Click">Log In</Link></li>
      </ul>
      }
    </nav>
  )
}


export default Nav;