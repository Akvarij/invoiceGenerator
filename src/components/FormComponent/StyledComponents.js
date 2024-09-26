import styled from "styled-components";

export const Form = styled.form`
  background: #fff;
  padding: 0.5rem;
  border: 0.5px solid rgba(16, 40, 73, 0.09);
  box-shadow: 0 0 17px rgba(16, 40, 73, 0.09);
  font-size: 1rem;
  width: 100%;
  max-width: 75rem;
  height: auto;
  margin-bottom: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  max-width: 30rem;
  padding: 0.5rem;
  border: 0.5px solid rgba(16, 40, 73, 0.09);
  box-shadow: 0 0 17px rgba(16, 40, 73, 0.09);
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 0.1rem;
`;

export const Div = styled.div`
  max-width: 35rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column; /* Changed to column for label, input, and error stacking */
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: space-evenly;

  label {
    font-weight: bold;
    margin-bottom: 0.2rem;
  }
`;

export const ServiceContainer = styled.div`
  max-width: 35rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;

  p {
    margin: 0.73rem;
    font-size: 15px;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 35rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
`;

export const StepTracker = styled.p`
  font-size: 1rem;
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.2rem;
`;
