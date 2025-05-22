import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Bookings from './assets/pages/Bookings'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/eventdetails" element={<EventDetails />} />
    </Routes>
  )
}

export default App
