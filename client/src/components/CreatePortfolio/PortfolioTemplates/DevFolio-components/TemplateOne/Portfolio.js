import React from 'react';

const Portfolio = ({Resume}) => {
  const projects = Resume.resume.projects;
  const imageCount = 6; // Number of available images
  return (
<div>
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-4" key={index}>
                <div className="work-box">
                  <a href={`assets/img/t1/work-${(index % imageCount) + 1}.jpg`} data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src={`assets/img/t1/work-${(index % imageCount) + 1}.jpg`} alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{project.project}</h2>
                       
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="project-descriptions">
                      {project.descriptions.map((description, descIndex) => (
                        <p key={descIndex}>{description}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
