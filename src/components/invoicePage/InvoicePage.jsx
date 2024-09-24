import "./InvoicePage.css";
import { Header } from "../header/Header";
import { CustomerAddress } from "../customer-address/CustomerAddress";
import { TableComponent } from "../table-information/TableComponent";
import { BankDetails } from "../bank-details/BankDetails";
import { Footer } from "../footer/Footer";

export const InvoicePage = ({ formData }) => {
  // Extract services from formData if available
  const { services } = formData;

  return (
    <div id="invoice-container">
      <Header {...formData} />

      <br />
      <CustomerAddress {...formData} />

      <br />
      <TableComponent services={services} />

      <br />
      <BankDetails {...formData} />

      <br />
      <Footer />
    </div>
  );
};
