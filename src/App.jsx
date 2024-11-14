import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { format } from "date-fns";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Form } from "./components/Form/Form.jsx";
import { InvoicePage } from "./components/InvoicePage/InvoicePage.jsx";

export const App = () => {
  const currentDate = new Date();

  const invoiceNumber = `#${format(currentDate, "yy")}-${format(
    currentDate,
    "DDD"
  ).padStart(3, "0")}`;
  const [formData, setFormData] = useState(null);

  const printDocument = () => {
    const input = document.getElementById("invoice-container");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${invoiceNumber}-invoice.pdf`);
    });
  };

  const handleFormComplete = (data) => {
    setFormData(data);
  };

  const handleNewInvoice = () => {
    setFormData(null); // Reset form data
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/form" />}
        />
        <Route
          path="/form"
          element={
            <div id="invoice-container">
              <Form onComplete={handleFormComplete} />
            </div>
          }
        />
        <Route
          path="/invoice"
          element={
            <div id="invoice-container">
              <InvoicePage
                formData={formData}
                printDocument={printDocument}
                onNewInvoice={handleNewInvoice}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
