import React from 'react';
import { useNavigate } from 'react-router-dom';


const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };
  console.log("🎯", event.startingPrice);
  return <div className='eventcard' onClick={handleClick}>
    
    <div className="eventcard-image"><img src="/images/eventcard/placeholder-image.jpg" alt="placeholder image" /></div>

    <div className="eventcard-info">
      <p className="eventcard-date">{new Date(event.eventDate).toLocaleString('sv-SE', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                              })}</p>
      <h3 className="eventcard-title">{event.title}</h3>
      <div className='eventcard-horizontal-flex'>
        <img className='map-pin-icon' src="/images/eventcard/map-pin.svg" alt="" />
        <p className="eventcard-location">{event.location}</p>
      </div>
      <div className='eventcard-bottom'>
      <span className="eventcard-price">From ${event.startingPrice}</span>
      </div>
    </div>

                                            
  </div>;
};


export default EventCard;
