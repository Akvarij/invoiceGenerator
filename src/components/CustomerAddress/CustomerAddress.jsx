import "./CustomerAddress.css";

export const CustomerAddress = ({
  company,
  companyAddress,
  postalCode,
  country,
}) => {
  return (
    <div className="customer-address">
      <h4>Bill To:</h4>
      <p>{company}</p>
      <p>{companyAddress}</p>
      <p>{postalCode}</p>
      <p>{country}</p>
    </div>
  );
};
