import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = ({ isLoggedIn }) => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logged out");
  };

  return (
    <div className="home-wrapper">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <h1 className='wc'>Welcome to Our Yoga Academy</h1>
      <h2 className='wc1'>WE DELIVER QUALITY YOGA EDUCATION FROM A HEARTFELT PLACE</h2><br></br>
      <h4>Our goal is to change the way yogis are educated. We aim to lead by example and deliver quality yoga education from a 
        heartfelt place. We believe in spending time in nature in order to feel enriched from the soul outward. We share everything
         we know with our students and offer the best tools we have to enrich their lives. We help our students discover their passions,
          live authentically and become the happiest they have ever been. For us, yoga is not just an exercise, a philosophy or a
           fashion choice. It is our lifestyle. </h4><br></br>
           <h4>We aim to bring mindfulness, conscious communication and joy to everything we do</h4>
      <p>This is the home page. Please log in or register to continue.</p>
    </div>
  );
};

export default HomePage;
