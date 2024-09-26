import styled from "styled-components";

const Footer = styled.div`
  font-size: 8px;
  margin-right: 10%;
  margin-left: 10%;
`;

export const FooterComponent = () => {
  return (
    <Footer>
      <p>VAT is not calculated according to Article 25, Clause 1 ZDDV - 1.</p>
      <p>*Reverse Charge - VAT exempt under Article 44 Directive 2006/112/ES</p>
    </Footer>
  );
};
