import styled from "styled-components";

const BankDetails = styled.div`
  margin-right: 10%;
  margin-left: 10%;

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

export const BankDetailsComponent = ({
  accountOpenedAt,
  accountHolder,
  IBAN,
}) => {
  return (
    <BankDetails>
      <p>Account opened at: {accountOpenedAt}</p>
      <p>Account holder: {accountHolder}</p>
      <p>IBAN: {IBAN}</p>
    </BankDetails>
  );
};
