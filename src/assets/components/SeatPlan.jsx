import React from 'react'

const SeatPlan = () => {
  return (
    <div className='seatplan card seatplan-layout'>
      <h3 className='seatplan-header'>Seat Plan</h3>
      
      <div className='display-flex seatplan-body-top'>
        <img className='stage-image' src="/images/seatplan/VenueMap.svg" alt="" />
        <div className='display-flex-column tier-list'>
          <div className='seat-class'>
            <div className='square diamond'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>Diamond</p>
                <span className='seat-price'>$120</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square platinum'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>Platinum</p>
                <span className='seat-price'>$100</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square gold'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>Gold</p>
                <span className='seat-price'>$85</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square silver'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>Silver</p>
                <span className='seat-price'>$70</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square bronze'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>Bronze</p>
                <span className='seat-price'>$60</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square general-admission'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>General Admission</p>
                <span className='seat-price'>$50</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square backstage-access'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>Backstage Access</p>
                <span className='seat-price'>$200</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>

          <div className='seat-class'>
            <div className='square vip-lounge'></div>
            <div className='seat-class-group'>
              <div className='display-flex align-items-center tier-pack'>
                <p>VIP Lounge</p>
                <span className='seat-price'>$150</span>
              </div>
              <p className='seat-class-bottom'>(Seating)</p>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default SeatPlan