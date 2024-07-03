import React from 'react';

const About = ({ userData, Resume }) => {
  return (
    <div>
      <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                          <img src="assets/img/t1/img-girl-about.webp.webp" class="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                          <p><span class="title-s">Name: </span> <span>{userData.fname}</span></p>
                          <p><span class="title-s">Email: </span> <span>{userData.email}</span></p>

                        </div>
                      </div>
                    </div>
                    <div class="skill-mf">
                      <p class="title-s">Skill</p>
                      {Resume.resume.skills.featuredSkills
        .filter(skill => skill.skill)  // Filter out skills with empty string
        .map((skill, index) => {
          const percentage = (skill.rating / 5) * 100;
          return (
            <div key={index} style={{ marginBottom: '15px' }}>
              <span>{skill.skill}</span>
              <span className="pull-right">{percentage}%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${percentage}%` }}
                  aria-valuenow={percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          );
        })}
                     
                      <span>HTML</span> <span class="pull-right">85%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ "width": "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>CSS3</span> <span class="pull-right">75%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ "width": "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>PHP</span> <span class="pull-right">50%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ "width": "85%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span>JAVASCRIPT</span> <span class="pull-right">90%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ "width": "85%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          About me
                        </h5>
                      </div>
                      <div>
                      {Resume.resume.skills.descriptions.map((description, index) => (
        <p className="lead" key={index}>
          {description}
        </p>
      ))}
       
     
    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
