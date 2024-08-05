import React from 'react';
import './Events.css';

const events = [
  {
    title: 'Hatha Yoga Workshop',
    dateTime: 'July 28, 2024, 10:00 AM',
    description: 'A comprehensive workshop on Hatha Yoga focusing on posture and breathing techniques.',
    image: 'https://www.greenqueen.com.hk/wp-content/uploads/2017/09/wanderlust-good.jpg'
  },
  {
    title: 'Vinyasa Yoga Flow',
    dateTime: 'August 2, 2024, 6:00 PM',
    description: 'An invigorating Vinyasa Yoga session to enhance flexibility and strength.',
    image: 'data:image/jpeg;base64,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'
  },
  {
    title: 'Restorative Yoga Retreat',
    dateTime: 'August 10, 2024, 9:00 AM',
    description: 'A relaxing retreat for Restorative Yoga to rejuvenate your body and mind.',
    image: 'data:image/jpeg;base64,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'
  },
  {
    title: 'Yin Yoga Exploration',
    dateTime: 'August 15, 2024, 5:00 PM',
    description: 'An in-depth exploration of Yin Yoga to release deep-seated tension and enhance flexibility.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTke-FDcW-XZf4Nys_qS8RB6KqqWYjqojzTrg&s'
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-header">Upcoming Yoga Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-image-wrapper">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date-time">{event.dateTime}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
