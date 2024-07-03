import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Context from './components/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"
import '../src/components/vendor/bootstrap/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import ResumeContextProvider from './components/ContextProvider/ResumeContextProvider';
import '../src/components/css/style.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <ResumeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ResumeContextProvider>
  </Context>

);

