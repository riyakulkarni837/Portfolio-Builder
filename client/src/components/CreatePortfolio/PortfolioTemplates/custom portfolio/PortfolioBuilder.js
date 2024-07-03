import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Section from './Section';
import ExportButton from './ExportButton';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './PortfolioBuilder.css';
import Header from '../../../Login/Header';

const PortfolioBuilder = ({ sections, setSections }) => {
  const moveSection = (dragIndex, hoverIndex) => {
    const dragSection = sections[dragIndex];
    const newSections = [...sections];
    newSections.splice(dragIndex, 1);
    newSections.splice(hoverIndex, 0, dragSection);
    setSections(newSections);
  };

  const addSection = (sectionType) => {
    const newSection = { id: uuidv4(), type: sectionType, content: '', media: [] };
    setSections([...sections, newSection]);
  };

  const [customizations, setCustomizations] = useState({
    font: 'Arial',
    color: '#000000',
    backgroundColor: '#ffffff'
  });

  const handleCustomizationChange = (e) => {
    const { name, value } = e.target;
    setCustomizations(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
    <Header/>
    <DndProvider backend={HTML5Backend}>
      <div className="portfolio-builder" style={{ fontFamily: customizations.font, color: customizations.color, backgroundColor: customizations.backgroundColor }}>
        {/* <header className="header">
          <h1 style={{ color: 'white' }}>Portfolio Builder</h1>
         
        </header> */}
        <div className="section-buttons">
            {['Header', 'About', 'Education', 'Experience', 'Projects', 'Certifications', 'Achievements', 'Contact', 'Image', 'Video', 'Audio'].map(type => (
              <button key={type} onClick={() => addSection(type)}>{type}</button>
            ))}
          </div>
          <br></br>
          <br></br>
          <div className="customization-options">
            <label>
              Font:
              <select name="font" value={customizations.font} onChange={handleCustomizationChange}>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
            </label>
            <label>
              Text Color:
              <input type="color" name="color" value={customizations.color} onChange={handleCustomizationChange} />
            </label>
            <label>
              Background Color:
              <input type="color" name="backgroundColor" value={customizations.backgroundColor} onChange={handleCustomizationChange} />
            </label>
          </div>
        <div className="sections-container">
          {sections.map((section, index) => (
            <Section
              key={section.id}
              index={index}
              section={section}
              moveSection={moveSection}
              setSections={setSections}
              sections={sections}
            />
          ))}
        </div>
        <ExportButton sections={sections} />
        <Link to={`/portfolio/${uuidv4()}`}>View Portfolio</Link>
      </div>
    </DndProvider>
    </>
  );
};

export default PortfolioBuilder;