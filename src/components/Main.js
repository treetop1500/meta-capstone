import React from 'react';
import '../css/Main.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LogInPage from './pages/LogInPage';
import MenuPage from './pages/MenuPage';

export default function Main() {
  return (
    
    <main>
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/booking" element={<BookingPage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/menu" element={<MenuPage />}></Route>
              <Route path="/order-online" element={<OrderOnlinePage />}></Route>
              <Route path="/log-in" element={<LogInPage />}></Route>
          </Routes>
    </main>
  )
}