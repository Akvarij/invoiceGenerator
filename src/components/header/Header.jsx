import "./Header.css";
import { format, addDays } from "date-fns";

export const Header = ({ companyName, street, postal, id, email }) => {
  const currentDate = new Date();

  const invoiceNumber = `#${format(currentDate, "yy")}-${format(
    currentDate,
    "DDD"
  ).padStart(3, "0")}`;

  const formattedDate = format(currentDate, "d. M. yyyy");
  const dueDate = format(addDays(currentDate, 15), "d. M. yyyy");

  return (
    <>
      <div className="header-container">
        <div className="container-wrapper">
          <div className="company-name">
            <h2>{companyName}</h2>
          </div>
          <div className="company-address">
            <p>{street}</p>
            <p>{postal}</p>
            <p>{id}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="invoice-header-wrapper">
          <div className="invoice-title">
            <h1 title="invoice">INVOICE</h1>
          </div>
          <div className="invoice-information">
            <p>INVOICE: {invoiceNumber} </p>
            <p>DATE: {formattedDate}</p>
            <p>DUE DATE: {dueDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};
