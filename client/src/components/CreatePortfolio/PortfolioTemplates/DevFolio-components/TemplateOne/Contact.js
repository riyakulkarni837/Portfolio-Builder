import React from 'react';

const Contact = ({userData, Resume}) => {
  const phone=Resume.resume.profile.phone;
  const location=Resume.resume.profile.location
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:{location}</h4>
                <p></p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:{userData.email}</h4>
                <p></p>
              </div>
              <div>
      {phone && (
        <div className="phone">
          <i className="bi bi-phone"></i>
          <h4>Call: {phone}</h4>
          <p></p>
        </div>
        )}
        </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
