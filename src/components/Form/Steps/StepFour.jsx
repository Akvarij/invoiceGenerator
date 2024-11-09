import { Button } from "../../Button/Button.jsx";

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
        <div
          key={index}
          className="service-container"
        >
          <input
            value={service.service}
            onChange={(e) =>
              handleServiceChange(index, "service", e.target.value)
            }
            placeholder="Service"
          />
          <input
            type="number"
            value={service.amount}
            onChange={(e) =>
              handleServiceChange(index, "amount", e.target.value)
            }
            placeholder="Amount"
          />
        </div>
      ))}
      {serviceError && <p className="error-message">{serviceError}</p>}
      <div className="service-container">
        <Button
          type="button"
          onClick={handleNewService}
        >
          Add New Service
        </Button>
        <p>Total amount: {calculateTotalAmount(services)} EUR</p>
      </div>
      <div className="button-container">
        <Button
          type="button"
          onClick={handlePrevStep}
        >
          Back
        </Button>
        <Button type="submit">Submit</Button>
      </div>
      <p className=".step-tracker">4/4</p>
    </>
  );
};
