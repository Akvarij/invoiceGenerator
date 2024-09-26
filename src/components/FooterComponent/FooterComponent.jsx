import styled from "styled-components";

const Footer = styled.div`
  max-width: 30rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const FooterComponent = () => {
  return (
    <Footer>
      <p>VAT is not calculated according to Article 25, Clause 1 ZDDV - 1.</p>
      <p>*Reverse Charge - VAT exempt under Article 44 Directive 2006/112/ES</p>
    </Footer>
  );
};
