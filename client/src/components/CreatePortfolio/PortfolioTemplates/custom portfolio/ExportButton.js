import React from 'react';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ExportButton = ({ sections }) => {
  const handleExport = () => {
    const contentHtml = sections.map(section => `
      <div>
        <h2>${section.type}</h2>
        <p>${section.content}</p>
        ${section.media.map((url, i) => {
          if (section.type === 'Image') return `<img key=${i} src=${url} alt="Uploaded" style="width: 100%;" />`;
          if (section.type === 'Video') return `<video key=${i} src=${url} controls style="width: 100%;"></video>`;
          if (section.type === 'Audio') return `<audio key=${i} src=${url} controls></audio>`;
          return '';
        }).join('')}
      </div>
    `).join('');

    const pdfContent = htmlToPdfmake(contentHtml);
    const docDefinition = { content: pdfContent };
    pdfMake.createPdf(docDefinition).download('portfolio.pdf');
  };

  return (
    <button onClick={handleExport} className="export-button">Export as PDF</button>
  );
};

export default ExportButton;
