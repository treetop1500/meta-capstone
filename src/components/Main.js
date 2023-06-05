import '../css/Main.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LogInPage from './pages/LogInPage';
import MenuPage from './pages/MenuPage';
import { useReducer } from 'react';
import BookingConfirmed from './pages/ConfirmedBooking';

export const initializeTimes = () => {
  const date = new Date();
  try {
    // eslint-disable-next-line no-undef
    const result = fetchAPI(date);
    return result;
  } catch(e) {
    return [];
  }
}

export const updateTimes = (state, action) => {

  let chosenDate = new Date(action.payload);
  switch (action.type) {
    case 'DATE_CHANGE':
     try {
      // eslint-disable-next-line no-undef
      const result = fetchAPI(chosenDate);
      return result;
     } catch(e) {
      return [];
     }
    default:
       return [];
   }
}

function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  
  const submitForm = (formValues) => {
    console.log(formValues);

    MakeReservation(formValues);
  }

  const MakeReservation = (formData) => {
    // eslint-disable-next-line no-undef
    const result = submitAPI(formData);
    if (result) {
      navigate("/booking-confirmed");
    }
  }

  return (
      <main>
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/booking" element={<BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
                />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/menu" element={<MenuPage />}></Route>
              <Route path="/order-online" element={<OrderOnlinePage />}></Route>
              <Route path="/log-in" element={<LogInPage />}></Route>
              <Route path="/booking-confirmed" element={<BookingConfirmed />}></Route>
          </Routes>
      </main>
  )
}

export default Main;