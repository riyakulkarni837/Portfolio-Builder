import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './TemplateThree.css'; // Importing the CSS file

const HeroSectionThree = ({ userData }) => {
  useEffect(() => {
    const options = {
      strings: ['Software Developer'],
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
    <section id="heroThree" className="d-flex flex-column justify-content-center align-items-center">
      <div className="heroThree-container" data-aos="fade-in">
        <h1>{userData.fname}</h1>
        <p>I'm a <span className="typed" data-typed-items="Software Developer"></span></p>
      </div>
    </section>
  );
};

export default HeroSectionThree;
