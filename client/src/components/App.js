import Header from "./Login/Header";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Dashboard from "./Dashboard";
import Error from "./Error";
import JobListApp from "./JobList/JobListApp";
import CreatePortfolioDashboard from "./CreatePortfolio/CreatePortfolioDashboard";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./ContextProvider/Context";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ResumeParser from "./CreatePortfolio/ResumeParser/ResumeParser";
import ResumeMatch from "./JobList/ResumeMatch";
import Templates from "./CreatePortfolio/Templates";
import Portfolio from "./CreatePortfolio/Portfolio";
import { saveToken, getToken, deleteToken } from '../indexedDB';

import { sectionsData } from './CreatePortfolio/PortfolioTemplates/custom portfolio/data';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PortfolioBuilder from './CreatePortfolio/PortfolioTemplates/custom portfolio/PortfolioBuilder';
import PortfolioViewer from './CreatePortfolio/PortfolioTemplates/custom portfolio/PortfolioViewer';
import TemplateOne from "./CreatePortfolio/PortfolioTemplates/templates/TemplateOne";
import TemplateThree from "./CreatePortfolio/PortfolioTemplates/templates/TemplateThree";


function App() {
  const [data, setData] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const [sections, setSections] = useState(sectionsData);
  const [token, setToken] = useState(null);
  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    saveToken(token)
    .then(() => {
        console.log('Token saved successfully');
    })
    .catch((error) => {
        console.error('Failed to save token', error);
    });
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    
    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)
  }, [])

  return (
    <GoogleOAuthProvider clientId="######.apps.googleusercontent.com"> {/* Wrap your component tree with GoogleOAuthProvider */}
      {
        data ? (
          <>
            
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              
              <Route path="/viewJob" element={<JobListApp />} />
              <Route path="/createPortfolio" element={<CreatePortfolioDashboard />} />
              <Route path="/importResume" element={<ResumeParser />} />
              <Route path="/resumeMatch" element={<ResumeMatch />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/TemplateOne.js" element={<TemplateOne />} />
              <Route path="/TemplateThree.js" element={<TemplateThree />} />
              
              <Route path="/customPortfolio" element={
                <DndProvider backend={HTML5Backend}>
                  <PortfolioBuilder sections={sections} setSections={setSections} />
                </DndProvider>
              } />
              <Route path="/portfolio/:id" element={
                <DndProvider backend={HTML5Backend}>
                  <PortfolioViewer sections={sections} />
                </DndProvider>
              } />
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
            Loading... &nbsp;
            <CircularProgress />
          </Box>
        )
      }
    </GoogleOAuthProvider>
  );
}

export default App;
