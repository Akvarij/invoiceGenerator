import { Button } from "../../CustomButtonComponent/CustomButtonComponent.jsx";

import {
  Input,
  ServiceContainer,
  ButtonContainer,
  StepTracker,
  ErrorMessage,
} from "../StyledComponents.js";

export const StepFour = ({
  services,
  serviceError,
  handleServiceChange,
  handleNewService,
  handlePrevStep,
  calculateTotalAmount,
}) => {
  return (
    <>
      <p>Services:</p>
      {services.map((service, index) => (
        <ServiceContainer
          key={index}
          className="services"
        >
          <Input
            value={service.service}
            onChange={(e) =>
              handleServiceChange(index, "service", e.target.value)
            }
            placeholder="Service"
          />
          <Input
            type="number"
            value={service.amount}
            onChange={(e) =>
              handleServiceChange(index, "amount", e.target.value)
            }
            placeholder="Amount"
          />
        </ServiceContainer>
      ))}
      {serviceError && <ErrorMessage>{serviceError}</ErrorMessage>}
      <ServiceContainer>
        <Button
          type="button"
          onClick={handleNewService}
        >
          Add New Service
        </Button>
        <p>Total amount: {calculateTotalAmount(services)} EUR</p>
      </ServiceContainer>
      <ButtonContainer>
        <Button
          type="button"
          onClick={handlePrevStep}
        >
          Back
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonContainer>
      <StepTracker>4/4</StepTracker>
    </>
  );
};
