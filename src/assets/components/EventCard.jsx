import React from 'react';
import { useNavigate } from 'react-router-dom';


const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return <div className='eventcard' onClick={handleClick}>
    
    <div className="eventcard-image"></div>

    <div className="eventcard-info">
      <p className="eventcard-date">June 5, 2029 — 3:00 PM</p>
      <h3 className="eventcard-title">{event.name}</h3>
      <div className='eventcard-horizontal-flex'>
        <img className='map-pin-icon' src="/images/eventcard/map-pin.svg" alt="" />
        <p className="eventcard-location">Rocky Ridge Exhibition Hall, Denver, CO</p>
      </div>
      <div className='eventcard-bottom'>
      <span className="eventcard-price">$40</span>
      </div>
    </div>


  </div>;
};


export default EventCard;
