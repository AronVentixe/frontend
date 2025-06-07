import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import BookingEvent from './assets/pages/BookingEvent'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/events" replace />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/events/booking/:id" element={<BookingEvent />} />
    </Routes>
  )
}

export default App
