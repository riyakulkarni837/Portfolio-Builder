import React from 'react';
import './TemplateThree.css';


function AboutThree({ userData, Resume }) {
  return (
    <div>
    <section id="aboutThree" className="aboutThree">
      <div className="containerThree">
        <div className="sectionThree-title">
          <h2>About</h2>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content d-flex flex-column align-items-center">
  <div className="aboutThree-item pb-0 text-center">
    <h4 className="fw-bold">{Resume.profile.name}</h4>
    <p><em>{Resume.profile.summary}</em></p>
    <ul className="list-unstyled">
      <li><i className="fas fa-map-marker-alt"></i> {Resume.profile.location}</li>
      <li><i className="fas fa-phone"></i> {Resume.profile.phone}</li>
      <li><i className="fas fa-envelope"></i> {Resume.profile.email}</li>
    </ul>
  </div>
</div>
<br></br>
          <br></br>
          <br></br>
  
        <div className="row">
          <div className="col-lg-4" >
            <img src="../TemplateThree/assets/img/new.jpg" className="img-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" >
            <p>
              As a software developer, I specialize in developing robust and scalable software solutions that meet the needs of clients and end-users. With expertise in various programming languages and technologies, I strive to deliver high-quality code and innovative solutions to complex problems. My passion for technology drives me to stay updated with the latest industry trends and continuously improve my skills.
            </p>
          </div>
        </div>
     

      </div>
    </section>
  

      <section id="skillsThree" className="skillsThree sectionThree-bg">
        <div className="container">
          <div className="sectionThree-title">
            <h2>Skills</h2>
            <p>{Resume.skills.featuredSkills}</p>
          </div>

          <div className="row skillsThree-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progressThree">
                <span className="skillThree">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progressThree-bar-wrap">
                  <div
                    className="progressThree-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progressThree">
                <span className="skillThree">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progressThree-bar-wrap">
                  <div
                    className="progressThree-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progressThree">
                <span className="skillThree">
                  JavaScript <i className="val">75%</i>
                </span>
                <div className="progressThree-bar-wrap">
                  <div
                    className="progressThree-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progressThree">
                <span className="skillThree">
                  PHP <i className="val">80%</i>
                </span>
                <div className="progressThree-bar-wrap">
                  <div
                    className="progressThree-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progressThree">
                <span className="skillThree">
                  WordPress/CMS <i className="val">90%</i>
                </span>
                <div className="progressThree-bar-wrap">
                  <div
                    className="progressThree-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progressThree">
                <span className="skillThree">
                  Photoshop <i className="val">55%</i>
                </span>
                <div className="progressThree-bar-wrap">
                  <div
                    className="progressThree-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutThree;
