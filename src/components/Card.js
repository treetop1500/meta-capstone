import React from 'react';
import '../css/Card.css';

export default function Card(props) {
  return (
  <article className="card" style={{ backgroundImage: `url(${props.image.src})`}}>
    <div>
      <h3>{props.title}</h3>
      <h4>{props.price}</h4>
    </div>
    <p>
    {props.description}
    </p>
    <p>
      <a href={props.cta.link} title={props.cta.title} aria-label="On Click">{props.cta.title}</a>
    </p>
  </article>
  )
}

