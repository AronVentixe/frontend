import React from 'react';
import PageHeading from '../components/PageHeading';
import SidePanel from '../components/SidePanel';
import Footer from '../components/Footer';
import EventList from '../components/EventList';

const Events = () => {
  return (
    <div className='layout'>
      <SidePanel />
      <PageHeading>Events</PageHeading>
      <div className='content'>
        <div className='event-wrapper'>
          <EventList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
