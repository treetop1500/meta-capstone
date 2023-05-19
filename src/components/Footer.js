import React from 'react';
import Nav from './Nav';
import {ReactComponent as FacebookIcon} from './svg/facebook.svg';
import {ReactComponent as TwitterIcon} from './svg/twitter.svg';
import {ReactComponent as InstagramIcon} from './svg/instagram.svg';
import {ReactComponent as YoutubeIcon} from './svg/youtube.svg';
import '../css/Footer.css';


export default function Footer(props) {
  return (
  <footer>
    <div className='inner'>
      <Nav/>
      <div className='contact'>
        <h3>Contact</h3>
        <p>
        Address: 123 Main Street, Chicago, IL 60601<br/>
        Phone: (555) 123-4567<br/>
        Email: info@littlelemon.com<br/>
        Website: www.littlelemon.com
        </p>
      </div>
      <div className='social'>
        <ul role="navigation">
          <li>
            <FacebookIcon/>
          </li>
          <li>
            <TwitterIcon/>
          </li>
          <li>
            <InstagramIcon/>
          </li>
          <li>
            <YoutubeIcon/>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

