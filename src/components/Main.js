import React from 'react';
import ReactDOM from 'react-dom/client';
import heroImage from '../images/little-lemon-hero.jpg';

export default function Main() {
  return (
    <main>
    <section>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Welcome to Little Lemon, where passion meets flavor. Immerse yourself in the rich traditions of Italian cuisine as our master chefs craft delectable dishes that will transport you to the heart of Italy. From our handmade pasta to our wood-fired pizzas, every bite is an exquisite experience.</p>
        <a role="button">Reserve a table</a>
      </div>
      <div>
        <img src={heroImage}  alt="Little Lemon Chicago" />
      </div>
    </section>
    <section></section>
    <section></section>
  </main>
  )
}