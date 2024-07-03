// SelectedTemplateComponent.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import the HTML, CSS, and JS components for the selected template
import TemplateOne from './PortfolioTemplates/templates/TemplateOne';
import TemplateThree from './PortfolioTemplates/templates/TemplateThree';


const SelectedTemplateComponent = () => {
  const { templateId } = useParams();
  const [userData, setUserData] = useState(null);
  const [Resume, setResume] = useState(null);

  useEffect(() => {
    // Fetch user data and resume data from the server
    const fetchData = async () => {
      const userId = 'your_user_id'; // Replace with the actual user ID
      const response = await fetch(`/api/user/${userId}`);
      const data = await response.json();
      setUserData(data.user);
      setResume(data.resume);
    };

    fetchData();
  }, []);

  const renderTemplate = () => {
    switch (templateId) {
      case 'template-one':
        return (
          <TemplateOne
            userData={userData}
            Resume={Resume}
          />
        );
      case 'template-two':
        return (
          <TemplateThree
            userData={userData}
            Resume={Resume}
          />
        );
      default:
        return <div>Template not found</div>;
    }
  };

  return <div>{userData && Resume ? renderTemplate() : <div>Loading...</div>}</div>;
};

export default SelectedTemplateComponent;