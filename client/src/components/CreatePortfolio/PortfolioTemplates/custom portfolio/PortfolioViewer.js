import React from 'react';
import { useParams } from 'react-router-dom';
import './PortfolioViewer.css';

const PortfolioViewer = ({ sections }) => {
  const { id } = useParams();

  return (
    <div className="portfolio-viewer">
      {sections.map(section => {
        if (section.type === 'Header') {
          return (
            <header key={section.id} className="portfolio-header">
              <div className="section-content">
                <p>{section.content}</p>
                <div className="section-media">
                  {section.media.map((url, i) => (
                    <img key={i} src={url} alt="Uploaded" className="section-image" />
                  ))}
                </div>
              </div>
            </header>
          );
        }
        return null;
      })}
      <main className="portfolio-main">
        {sections.map(section => {
          if (section.type !== 'Header') {
            return (
              <div key={section.id} className="section">
                <h2 className="section-title">{section.type}</h2>
                <div className="section-content">
                  <p>{section.content}</p>
                  <div className="section-media">
                    {section.media.map((url, i) => {
                      if (section.type === 'Image')
                        return <img key={i} src={url} alt="Uploaded" className="section-image" />;
                      if (section.type === 'Video')
                        return <video key={i} src={url} controls className="section-video" />;
                      if (section.type === 'Audio')
                        return <audio key={i} src={url} controls className="section-audio" />;
                      return null;
                    })}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default PortfolioViewer;
