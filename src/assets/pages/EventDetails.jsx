import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SidePanel from '../components/SidePanel';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
import SeatPlan from '../components/SeatPlan';
import TermsAndConditions from '../components/TermsAndConditions';
import Packages from '../components/Packages';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Exempel: Hämta från en API-endpoint (eller en mocklista)
    fetch(`https://localhost:7292/api/events/${id}`)
    .then(res => res.json())
    .then(data => setEvent(data));

  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className='layout eventdetails-page'>

        <SidePanel></SidePanel>

        <PageHeading>Event Details</PageHeading>

        <div className='content eventdetails-layout'>
          
          <SeatPlan></SeatPlan>

          <div className='event-wrapper event-details'> 
              <div className="eventcard-image"></div>

            <div className="eventcard-info">
              <h3 className="eventcard-title">{event.name}</h3>
              <div className='eventcard-horizontal-flex'>
                <img className='calender-icon' src="/images/eventcarddetails/calendar-dot.svg" alt="" />
                <p className="eventcard-date">June 5, 2029 — 3:00 PM</p>
              </div>
              <div className='eventcard-horizontal-flex'>
                <img className='map-pin-icon' src="/images/eventcard/map-pin.svg" alt="" />
                <p className="eventcard-location">Rocky Ridge Exhibition Hall, Denver, CO</p>
              </div>
              <div className='eventcard-bottom'>
                <span className="eventcard-price">$40</span>
              </div>

              <h3>About Event</h3>
              <p>The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances under the stars. Explore food trucks, art installations, and VIP lounges for an elevated experience.</p>
              
            </div>

          </div>
          <Packages></Packages>
          <TermsAndConditions></TermsAndConditions>

        </div> 

        <Footer></Footer>
         
    </div>
  );
};

export default EventDetails;
