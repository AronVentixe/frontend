import React from 'react';

const EventCard = ({ event }) => {
  return <div className='eventcard'>
    
    <div className="eventcard-image"></div>

    <div className="eventcard-info">
      <p className="eventcard-datetime">June 5, 2029 — 3:00 PM</p>
      <h3 className="eventcard-title">{event.name}</h3>
      <p className="eventcard-location">Rocky Ridge Exhibition Hall, Denver, CO</p>
      <span className="price">$40</span>
    </div>


  </div>;
};


export default EventCard;
