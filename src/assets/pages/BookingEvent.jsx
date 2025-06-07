import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: '',
    lastName: '',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    ticketQuantity: 1
  });

  useEffect(() => {
    fetch(`https://aaeventservice-a2bsegegf9gqcta5.swedencentral-01.azurewebsites.net/api/events/${id}`)
      .then(res => res.json())
      .then(data => {
        setEvent(data.result);
      })
      .catch(err => console.error("Error fetching event:", err));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  const postBooking = async () => {
    try {
      const res = await fetch(`https://aabookingservice-ayf0h2eqdvbzeefz.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        console.error("Booking failed");
      } else {
        console.log("Booking successful");
        navigate('/');
      }
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postBooking();
  };

  return (
    <div>
      <h1>Book Event - {event.title}</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div>
          <label>E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Street Name</label>
          <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
        </div>

        <div>
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>

        <div>
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingEvent;
