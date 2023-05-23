import React from 'react';
import Intro from '../Intro';
import BookingForm from '../BookingForm';

export default function BookingPage(props) {


  return (
    <>
    <section>
      <div>
        <article>
          <h2>Reserve a Table</h2>
          <p>Please fill out the following form to make a reservation.</p>
          <hr/>
          <BookingForm {...props}/>
        </article>
      </div>
    </section>
    </>
  )
}

