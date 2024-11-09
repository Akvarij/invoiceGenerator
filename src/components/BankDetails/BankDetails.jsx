import "./BankDetails.css";

export const BankDetails = ({ accountOpenedAt, accountHolder, IBAN }) => {
  return (
    <div className="bank-details">
      <p>Account opened at: {accountOpenedAt}</p>
      <p>Account holder: {accountHolder}</p>
      <p>IBAN: {IBAN}</p>
    </div>
  );
};
