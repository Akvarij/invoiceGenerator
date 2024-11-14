import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { CustomerAddress } from "../CustomerAddress/CustomerAddress";
import { TableInformation } from "../TableInformation/TableInformation";
import { BankDetails } from "../BankDetails/BankDetails";
import { Footer } from "../Footer/Footer";
import "./InvoicePage.css";

export const InvoicePage = ({ formData, printDocument, onNewInvoice }) => {
  const navigate = useNavigate();

  const handleNewInvoiceClick = () => {
    onNewInvoice();
    navigate("/form");
  };

  return (
    <>
      <div className="invoice-page">
        <Header {...formData} />
        <CustomerAddress {...formData} />
        <TableInformation services={formData.services} />
        <BankDetails {...formData} />
        <Footer />
      </div>
      <div>
        <Button
          type="button"
          onClick={handleNewInvoiceClick}
        >
          New Invoice
        </Button>
        <Button
          type="button"
          onClick={printDocument}
        >
          Convert to PDF
        </Button>
      </div>
    </>
  );
};
