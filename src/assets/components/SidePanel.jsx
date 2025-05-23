import React from 'react'



const SidePanel = () => {
  return (
    <div className="sidepanel">
      <div className='sidepanel-group'>
        <div className='sidepanel-horizontal-flex'>
          <img className='ventixe-icon' src="/images/sidepanel/ventixe.svg" alt="Ticket Icon" />
          <h1 className='ventixe'>Ventixe</h1>
        </div>
        <div className='sidepanel-horizontal-flex'>
          <img src="/images/sidepanel/squares-four.svg" alt="Dashboard Icon" />
          <p>Dashboard</p>
        </div>
        <div className='sidepanel-horizontal-flex'>
          <img src="/images/sidepanel/check-square.svg" alt="Bookings Icon" />
          <p>Bookings</p>
        </div>
        <div className='sidepanel-horizontal-flex'>
          <img src="/images/sidepanel/ticket.svg" alt="Ticket Icon" />
          <p>Events</p>
        </div>
      </div>

      <button className='sign-out-button'> <img className='sign-out-icon' src="/images/sidepanel/sign-out.svg" alt="" />Sign Out</button>
    </div>
  )
}

export default SidePanel