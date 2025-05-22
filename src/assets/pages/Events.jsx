import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard'
import PageHeading from '../components/PageHeading';

const Events = () => {
  console.log("Events component rendered");

  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://localhost:7292/api/events")

    if (res.ok) {
      const data = await res.json()
      setEvents(data)
    }
  }

  

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className='page-wrapper'>
      <PageHeading>Events</PageHeading>
      <div className='event-wrapper'>
        {
        events.map(event => (
          <EventCard key={event.id} event={event} />
        ))
      }
      </div> 
    </div>
  )
}

export default Events;
