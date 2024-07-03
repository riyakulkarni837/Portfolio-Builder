import React, { useContext } from 'react'
import { LoginContext } from '../../../ContextProvider/Context';
import Header from '../DevFolio-components/TemplateOne/Header';
import HeroSection from '../DevFolio-components/TemplateOne/HeroSection';
import About from '../DevFolio-components/TemplateOne/About';
import Portfolio from '../DevFolio-components/TemplateOne/Portfolio';
import Contact from '../DevFolio-components/TemplateOne/Contact';
import Footer from '../DevFolio-components/TemplateOne/Footer';
import Experience from '../DevFolio-components/TemplateOne/Experience';
import './template.css'; // Ensure to import CSS files as needed
import { ResumeContext } from '../../../ContextProvider/ResumeContextProvider';
//import resumeData from '../DevFolio-components/resumeData';
const TemplateOne = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const {resume, setResumeData }= useContext(ResumeContext);
  const resumeObj = resume.getResume;
  const userInfo = logindata.ValidUserOne;
  console.log(resumeObj.resume.workExperiences);
  return (
<div className="App">
      <Header userData={userInfo}/>
      <HeroSection userData={userInfo}/>
      <About userData={userInfo} Resume={resumeObj}/>
      <Portfolio Resume={resumeObj}/>
      <Experience Resume={resumeObj}/>
      <Contact userData={userInfo} Resume={resumeObj}/>
      <Footer userData={userInfo}/>
    </div>
  );
}
export default TemplateOne;