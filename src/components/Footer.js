import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import {ReactComponent as FacebookIcon} from './svg/facebook.svg';
import {ReactComponent as TwitterIcon} from './svg/twitter.svg';
import {ReactComponent as InstagramIcon} from './svg/instagram.svg';
import {ReactComponent as YoutubeIcon} from './svg/youtube.svg';


export default function Footer(props) {
  return (
  <footer>
    <Nav/>
    <section>
      <h3>Contact</h3>
      <p>
      Address: 123 Main Street, Chicago, IL 60601<br/>
      Phone: (555) 123-4567<br/>
      Email: info@littlelemon.com<br/>
      Website: www.littlelemon.com
      </p>
    </section>
    <section>
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
    </section>
  </footer>
  )
}

