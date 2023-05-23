
import { useState , useRef} from "react";

export default function BookingForm(props) {

  const occasions = [
    "Birthday","Anniversary"
  ]

  const availableTimes = props.availableTimes;
  const dispatch = props.dispatch;
  const submitForm = props.submitForm;
  const reservationDate = props.reservationDate;
  const reservationTime = props.reservationTime;
  const reservationGuests = props.reservationGuests;
  const reservationOccasion = props.reservationOccasion;
  const setReservationDate = props.setReservationDate;
  const setReservationTime = props.setReservationTime;
  const setReservationGuests = props.setReservationGuests;
  const setReservationOccasion = props.setReservationOccasion;

  const handleDateChange = (date) => {
    //console.log("selected date", date);
    setReservationDate(date);
    dispatch({'type':'DATE_CHANGE', 'payload':date})
  }

  return (
    <>
      <h3>Book Now!</h3>
      <form style={{'display': 'grid', 'maxWidth': '200px', 'gap': '20px'}} onSubmit={(submitForm)}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={reservationDate} onChange={e => handleDateChange(e.target.value)}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => setReservationTime(e.target.value)} value={reservationTime}>
          {availableTimes.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={reservationGuests}  onChange={e => setReservationGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => dispatch({type: 'DATE_CHANGE', payload: e.target.value})} value={reservationOccasion}>
            {occasions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <input type="submit" value="Make Your reservation"/>
      </form>
    </>
  )
}