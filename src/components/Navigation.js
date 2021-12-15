import React from 'react';
import './nav.css';

function Navigation() {
  return (
  <div>
    <nav>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo">Torre.<strong>CO</strong></div>
       <ul className="links">
           <li><a href="#home">Search</a></li>
           <li><a href="#about">Job/Gigs</a></li>
           <li><a href="#work">Post a Job</a></li>
           <li><a href="#projects">Your Jobs</a></li>
           <li><a href="#contact">Preferences</a></li>
           <li><a href="#genome">Your Genome</a></li>
           <li><a href="#signals">Signals</a></li>
           <li><a href="#Messages">Messages</a></li>
       </ul>
       <label for="nav-toggle" className="icon-burger">
           <div className="line"></div>
           <div className="line"></div>
           <div className="line"></div>
       </label>
    </nav>

    {/* <div className="container">
        <img src="https://picsum.photos/id/559/1000/1000.jpg" alt="" />
        <img src="https://picsum.photos/id/558/1000/1000.jpg" alt="" />
    </div> */}
    <label for="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </label>

  </div>
    
  );
}

export default Navigation;