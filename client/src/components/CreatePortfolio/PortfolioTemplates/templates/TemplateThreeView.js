import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../DevFolio-components/TemplateThree/Header';
import HeroSectionThree from '../DevFolio-components/TemplateThree/HeroSectionThree';
import AboutThree from '../DevFolio-components/TemplateThree/AboutThree';
import ContactThree from '../DevFolio-components/TemplateThree/ContactThree';
import Footer from '../DevFolio-components/TemplateThree/Footer';
import ResumeThree from '../DevFolio-components/TemplateThree/ResumeThree';

const TemplateThreeView = ({ sections }) => {
  const { id } = useParams();
  
  return (
    <div className="portfolio-viewer">
      <Header userData={sections[id].userData} />
      <HeroSectionThree userData={sections[id].userData} />
      <AboutThree userData={sections[id].userData} Resume={sections[id].resume} />
      <ResumeThree Resume={sections[id].resume} />
      <ContactThree Resume={sections[id].resume} />
      <Footer userData={sections[id].userData} />
    </div>
  );
};

export default TemplateThreeView;
