import React from 'react';
import Button from './Button';
import '../css/Intro.css';
import heroImage from '../images/little-lemon-hero.jpg';


export default function Intro() {
  return (
    <section className='intro'>
      <div>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Welcome to Little Lemon, where passion meets flavor. Immerse yourself in the rich traditions of Italian cuisine as our master chefs craft delectable dishes that will transport you to the heart of Italy. From our handmade pasta to our wood-fired pizzas, every bite is an exquisite experience.</p>
          <Button title="Reserve a Table" link="/reserve-a-table"/>
        </article>
        <div>
          <img src={heroImage}  alt="Little Lemon Chicago" />
        </div>
      </div>
    </section>
  )
}