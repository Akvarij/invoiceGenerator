import './App.css';
import React from 'react';
import InvoicePage from './components/invoicePage/InvoicePage';
import ConvertToPdfButton from './components/convert-to-pdf-button/ConvertToPdfButton';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const printDocument = () => {
    const input = document.getElementById('invoice-container');
    html2canvas(input, { scale: 2 })  // Increasing scale for better resolution
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
      });
  };

  return (
    <div className='container'>  
      <InvoicePage />
      <ConvertToPdfButton onClick={printDocument}/>
    </div>
  );
}

export default App;
