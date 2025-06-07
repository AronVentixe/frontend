import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const SidePanel = () => {
  return (
    <div className="sidepanel">
      <div className='sidepanel-group'>
        <div className='sidepanel-horizontal-flex'>
          <img className='ventixe-icon' src="/images/sidepanel/ventixe.svg" alt="Ticket Icon" />
          <h1 className='ventixe'>Ventixe</h1>
        </div>
        {/* <Link className='sidepanel-horizontal-flex'>
          <img src="/images/sidepanel/squares-four.svg" alt="Dashboard Icon" />
          <p>Dashboard</p>
        </Link> */}
        {/* <Link className='sidepanel-horizontal-flex'>
          <img src="/images/sidepanel/check-square.svg" alt="Bookings Icon" />
          <p>Bookings</p>
        </Link> */}
        <NavLink
          to="/events"
          className={({ isActive }) => `sidepanel-button sidepanel-horizontal-flex ${isActive ? 'active' : ''}`}
        >
          <div className='sidepanel-button-content sidepanel-horizontal-flex'>
            <img src="/images/sidepanel/ticket.svg" alt="Ticket Icon" />
            <span>Events</span>
          </div>
        </NavLink>
      </div>

      {/* <button className='sign-out-button'> <img className='sign-out-icon' src="/images/sidepanel/sign-out.svg" alt="" />Sign Out</button> */}
    </div>
  )
}

export default SidePanel