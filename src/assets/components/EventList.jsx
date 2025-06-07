import React, { useEffect, useState} from 'react'
import EventCard from './EventCard'

const EventList = () => {

  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://aaeventservice-a2bsegegf9gqcta5.swedencentral-01.azurewebsites.net/api/Events")

    if (res.ok) {
      const response = await res.json()
      setEvents(response.result)
    }
  }

  useEffect (() => {
    getEvents()
  }, [])

  return (
    <section id='events' className='event-list'>
      {
        events.map(event => (<EventCard key={event.id} event={event} />))
      }
    </section>
  )
}

export default EventList