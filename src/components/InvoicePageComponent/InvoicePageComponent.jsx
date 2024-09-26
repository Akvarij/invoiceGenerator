import { styled } from "styled-components";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { CustomerAddressComponent } from "../CustomerAddressComponent/CustomerAddressComponent";
import { TableInformationComponent } from "../TableInformationComponent/TableInformationComponent";
import { BankDetailsComponent } from "../BankDetailsComponent/BankDetailsComponent";
import { FooterComponent } from "../FooterComponent/FooterComponent";

const InvoicePage = styled.div`
  background: #fff;
  box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);
  width: 21cm;
  height: 29.7cm;
  margin-bottom: 1%;
`;

export const InvoicePageComponent = ({ formData }) => {
  const { services } = formData;

  return (
    <InvoicePage>
      <HeaderComponent {...formData} />

      <br />
      <CustomerAddressComponent {...formData} />

      <br />
      <TableInformationComponent services={services} />

      <br />
      <BankDetailsComponent {...formData} />

      <br />
      <FooterComponent />
    </InvoicePage>
  );
};
