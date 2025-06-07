import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className='terms-and-conditions card'>
      <h3>Terms & Conditions</h3>
      <div>
        <h4> <span>1.</span> Ticket Purchase and Entry</h4>
        <p>* All attendees must possess a valid ticket for entry. </p>
        <p>* Tickets are non-refundable and non-transferable unless specified by the event organizer. </p>
        <p>* Attendees must present a valid government-issued ID along with their ticket at the gate. </p>
      </div>
      <div>
        <h4> <span>2.</span> Security and Safety</h4>
        <p>* Attendees are subject to security checks, including bag inspections, upon entry. </p>
        <p>* Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials. </p>
        <p>* The event organizer reserves the right to deny entry to individuals deemed a security risk. </p>
      </div>
      <div>
        <h4> <span>3.</span> Code of Conduct</h4>
        <p>* Attendees are expected to behave responsibly and respectfully toward others. </p>
        <p>* Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund. </p>
      </div>
      <div>
        <h4> <span>4.</span> Event Schedule and Changes</h4>
        <p>* The event chedule is subject to change without prior notice. </p>
        <p>* The event organizer is not responsible for delays or cancellations caused by weather.</p>
      </div>
    </div>
  )
}

export default TermsAndConditions