import React from 'react';
import '../css/Main.css';
import Specials from './Specials';
import Intro from './Intro';
import Testimonials from './Testimonials';
import About from './About';

export default function Main() {
  return (
    <main>
      <Intro/>
      <Specials/>
      <Testimonials/>
      <About/>
    </main>
  )
}