import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LoginContext } from '../../../ContextProvider/Context';
import Header from '../DevFolio-components/TemplateThree/Header';
import HeroSectionThree from '../DevFolio-components/TemplateThree/HeroSectionThree';
import AboutThree from '../DevFolio-components/TemplateThree/AboutThree';
import ContactThree from '../DevFolio-components/TemplateThree/ContactThree';
import Footer from '../DevFolio-components/TemplateThree/Footer';
import ResumeThree from '../DevFolio-components/TemplateThree/ResumeThree';
import TemplateThreeView from './TemplateThreeView'; // Import TemplateThreeView component
import resumeDataPM from '../DevFolio-components/resumeDataPM';

const TemplateThree = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const resume = resumeDataPM[0];
  const userInfo = logindata.ValidUserOne;

  return (
    <div className="App">
      <Header userData={userInfo} />
      <HeroSectionThree userData={userInfo} />
      <AboutThree userData={userInfo} Resume={resume} />
      <ResumeThree Resume={resume} />
      <ContactThree Resume={resume} />
      <Footer userData={userInfo} />
      
      {/* Render TemplateThreeView component with sections prop */}
      
      <div className="view-portfolio-link">
        <Link to={`/viewPortfolio/${uuidv4()}`} className="portfolioThree-link">
          View Portfolio
        </Link>
      </div>
    </div>
  );
}

export default TemplateThree;
