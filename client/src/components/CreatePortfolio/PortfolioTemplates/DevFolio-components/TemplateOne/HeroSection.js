import React, { useEffect } from 'react';
import Typed from 'typed.js';


const HeroSection = ({userData}) => {
  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Full Stack Developer', 'Front-End Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed('.typed', options);
    
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
    <div id="hero" class="hero route bg-image" style={{"background-image": "url(../../../../assets/img/hero.webp)"}}>
    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
         
          <h1 class="hero-title mb-4">I am {userData.fname}</h1>
          
          <p className="hero-subtitle"><span className="typed"></span></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default HeroSection;
