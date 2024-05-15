import './App.css';
import React from 'react';
import InvoicePage from './components/invoicePage/InvoicePage';
import ConvertToPdfButton from './components/convert-to-pdf-button/ConvertToPdfButton';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function App() {
  // const printRef = React.useRef();

  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL('image/png');
  //   console.log(data)
  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight =
  //     (imgProperties.height * pdfWidth) / imgProperties.width;

  //   pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //   pdf.save('print.pdf');
  // };

  return (
    <div className='container'>
      <InvoicePage />
      <ConvertToPdfButton />
    </div>
  );
}

export default App;
