import React from 'react';
import Testimonial from './Testimonial';
import '../css/Testimonials.css';

const testimonials = [
  {
    'quote': 'What an incredible dining experience! From the moment we walked in, we were greeted with warm Italian hospitality.',
    'cite': 'John and Lisa M.',
    'rating': {
      'src': '/images/five-stars.png',
      'alt': '5 Stars'
    },
    'image': {
      'src': '/images/john-lisa.png',
      'alt': 'John and Lisa M.'
    },
  },
  {
    'quote': 'We stumbled upon this hidden gem of an Italian restaurant, and it exceeded all our expectations. The chef&rsquo; passion for food was evident in every dish.',
    'cite': 'Jeff and Laurie N.',
    'rating': {
      'src': '/images/five-stars.png',
      'alt': '5 Stars'
    },
    'image': {
      'src': '/images/jeff-laurie.png',
      'alt': 'Jeff and Laurie N.'
    },
  },
  {
    'quote': '"We recently celebrated a special occasion at this Italian restaurant, and it was an unforgettable evening. The ambiance was elegant yet cozy, creating the perfect setting for a memorable night.',
    'cite': 'Jack and Lorrie O.',
    'rating': {
      'src': '/images/five-stars.png',
      'alt': '5 Stars'
    },
    'image': {
      'src': '/images/jack-lorrie.png',
      'alt': 'Jack and Lorrie O.'
    },
  }
]

export default function Testimonials() {
  return (
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className='overflow-x'>
          {testimonials.map((item) => (
            <Testimonial {...item} key={item.cite}/>
          ))}
        </div>
      </section>
  )
}