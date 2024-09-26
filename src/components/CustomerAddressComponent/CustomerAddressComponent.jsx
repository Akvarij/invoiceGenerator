import styled from "styled-components";

const CustomerAddress = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

h4 {
  margin: 2px;
  padding: 0;
}

p {
  margin: 2px;
  padding: 0;
}

`;

export const CustomerAddressComponent = ({
  company,
  companyAddress,
  postalCode,
  country,
}) => {
  return (
    <CustomerAddress>
      <h4>Bill To:</h4>
      <p>{company}</p>
      <p>{companyAddress}</p>
      <p>{postalCode}</p>
      <p>{country}</p>
    </CustomerAddress>
  );
};
