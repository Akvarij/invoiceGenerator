import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "./components/Button/Button.jsx";
import { Form } from "./components/Form/Form.jsx";
import { InvoicePage } from "./components/InvoicePage/InvoicePage.jsx";

export const App = () => {
  const [formData, setFormData] = useState(null);
  const [isFormComplete, setFormComplete] = useState(false);

  const printDocument = () => {
    const input = document.getElementById("invoice-container");
    html2canvas(input, { scale: 2 }) // Increasing scale for better resolution
      .then((canvas) => {
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
        pdf.save("invoice.pdf");
      });
  };

  const handleFormComplete = (data) => {
    setFormData(data);
    setFormComplete(true);
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
              {!isFormComplete ? (
                <Form onComplete={handleFormComplete} />
              ) : (
                <Button onClick={printDocument}>Convert to PDF</Button>
              )}
            </div>
          }
        />
        <Route
          path="/invoice"
          element={
            <div id="invoice-container">
              <InvoicePage formData={formData} />
              <div className="button-container">
                <Button
                  type="button"
                  onClick={printDocument}
                >
                  Convert to PDF
                </Button>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
