import React from 'react';
import '../css/About.css';
import image from '../images/little-lemon-about.png';


export default function About() {
  return (
    <section className='about'>
      <div>
        <article>
          <h2>About Little Lemon</h2>
          <p>Nestled in the vibrant streets of Chicago, our small, family-owned Italian restaurant is a hidden gem that captures the essence of traditional Italian hospitality. Stepping through the door, you're immediately greeted with a warm smile and a sense of belonging. The cozy and inviting atmosphere, adorned with vintage photographs and rustic décor, transports you to the charming trattorias of Italy.</p>
        </article>
        <img src={image}  alt="Little Lemon Chicago" />
      </div>
    </section>
  )
}