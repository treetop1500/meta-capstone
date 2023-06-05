import React from 'react';
import '../css/Button.css';

export default function Button(props) {
  return (
  <a role="button" href={props.link} title={props.title} aria-label="On Click">
    {props.title}
  </a>
  )
}

