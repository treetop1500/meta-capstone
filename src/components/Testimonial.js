import React from 'react';
import '../css/Testimonial.css';

export default function Testimonial(props) {
  return (
  <article className="testimonial">
    <div>
      <img src={props.image.src} alt={props.image.alt} />
    </div>
    <div>
      <p>{props.quote}</p>
      <img src={props.rating.src} alt={props.rating.alt} />
      <p>{props.cite}</p>
    </div>
  </article>
  )
}

