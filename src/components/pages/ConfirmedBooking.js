import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingConfirmed() {
  return (
    <>
    <section>
      <div>
        <article>
          <h2>Booking Confirmed!</h2>
          <p>Your reservation at Little Lemon has been placed.</p>
          <hr/>
          <p><Link to="/">Return to the Home Page</Link></p>
        </article>
      </div>
    </section>
    </>
  )
}

