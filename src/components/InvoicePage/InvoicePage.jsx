import "./InvoicePage.css";
import { Header } from "../Header/Header";
import { CustomerAddress } from "../CustomerAddress/CustomerAddress";
import { TableInformation } from "../TableInformation/TableInformation";
import { BankDetails } from "../BankDetails/BankDetails";
import { Footer } from "../Footer/Footer";

export const InvoicePage = ({ formData }) => {
  const { services } = formData;

  return (
    <div className="invoice-page">
      <Header {...formData} />

      <br />
      <CustomerAddress {...formData} />

      <br />
      <TableInformation services={services} />

      <br />
      <BankDetails {...formData} />

      <br />
      <Footer />
    </div>
  );
};
