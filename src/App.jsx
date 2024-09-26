import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import React, { useState } from "react";
import { InvoicePage } from "./components/invoicePage/InvoicePage";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FormComponent } from "./components/FormComponent/FormComponent";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const Div = styled.div`
  max-width: 30rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);
  width: 120px;
  height: 40px;
  font-family: Neucha, sans-serif;
  margin: 1rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

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
          path="/form"
          element={
            <Container>
              {!isFormComplete ? (
                <FormComponent onComplete={handleFormComplete} />
              ) : (
                <Button onClick={printDocument}>Convert to PDF</Button>
              )}
            </Container>
          }
        />
        <Route
          path="/invoice"
          element={
            <Container>
              <InvoicePage formData={formData} />
              <Div>
                <Button
                  type="button"
                  onClick={printDocument}
                >
                  Convert to PDF
                </Button>
              </Div>
            </Container>
          }
        />
      </Routes>
    </Router>
  );
};
