import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SelectedTemplateComponent from './SelectedTemplateComponent';
const Portfolio = () => {
  const { templateId } = useParams();
  const location = useLocation();
  const selectedTemplate = location.state?.template;

  return (
    <div>
      {selectedTemplate ? (
        
        <SelectedTemplateComponent template={selectedTemplate} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Portfolio;