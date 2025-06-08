import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SidePanel from '../components/SidePanel';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
import TermsAndConditions from '../components/TermsAndConditions';
import Packages from '../components/Packages';
import Partners from '../components/Partners';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
  console.log("Fetching event:", id);
  fetch(`https://aaeventservice-a2bsegegf9gqcta5.swedencentral-01.azurewebsites.net/api/events/${id}`)
  // fetch(`https://localhost:7292/api/events/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log("🔍 Response data:", data);
      setEvent(data.result);
    })
    .catch(err => console.error("❌ Error fetching event:", err));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className='layout eventdetails-page'>

        <SidePanel></SidePanel>

        <PageHeading>Event Details</PageHeading>

        <div className='content eventdetails-layout'>
          

          <div className='event-wrapper event-details'> 
              <div className="eventcard-image event-details"> <img src="/images/eventcard/placeholder-image.jpg" alt="placeholder image" /></div>

            <div className="eventcard-info event-details">
              <h3 className="eventcard-title">{event.title}</h3>
              <div className='eventcard-horizontal-flex'>
                <img className='calender-icon' src="/images/eventcarddetails/calendar-dot.svg" alt="" />
                <p className="eventcard-date">{new Date(event.eventDate).toLocaleString('sv-SE', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                              })}</p>
              </div>
              <div className='eventcard-horizontal-flex'>
                <img className='map-pin-icon' src="/images/eventcard/map-pin.svg" alt="" />
                <p className="eventcard-location">{event.location}</p>
              </div>
              <div className='eventcard-bottom display-flex'>
                <Link className='book-button' to={`/events/booking/${id}`}><span className='book-button-text'>Book Event</span></Link>
                <span className="eventcard-price">From ${event.startingPrice}</span>
              </div>

              <h3>About Event</h3>
              <p>{event.description}</p>
              
            </div>

          </div>
          <Packages></Packages>
          <TermsAndConditions></TermsAndConditions>
          <Partners></Partners>

        </div> 

        <Footer></Footer>
         
    </div>
  );
};

export default EventDetails;
