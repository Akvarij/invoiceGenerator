import { Button } from "../../button/Button.jsx";
import {
  Input,
  Div,
  StepTracker,
  ButtonContainer,
  ErrorMessage,
} from "../StyledComponents.js";

export const StepOne = ({ register, errors, handleNextStep }) => {
  return (
    <>
      <p>Company Address:</p>
      <Div>
        <label htmlFor="companyName">Company Name</label>
        <Input
          id="companyName"
          aria-label="Company Name"
          {...register("companyName", { required: "Company name is required" })}
        />
        {errors.companyName && (
          <ErrorMessage>{errors.companyName.message}</ErrorMessage>
        )}

        <label htmlFor="street">Street</label>
        <Input
          id="street"
          aria-label="Street"
          {...register("street", { required: "Street is required" })}
        />
        {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}

        <label htmlFor="postal">Postal Code</label>
        <Input
          type="number"
          id="postal"
          aria-label="Postal Code"
          {...register("postal", {
            required: "Postal code is required",
            minLength: {
              value: 4,
              message: "Postal code must be 4 digits",
            },
            maxLength: {
              value: 6,
              message: "Postal code cannot exceed 6 digits",
            },
          })}
        />
        {errors.postal && <ErrorMessage>{errors.postal.message}</ErrorMessage>}

        <label htmlFor="id">ID</label>
        <Input
          type="number"
          id="id"
          aria-label="ID"
          {...register("id", { required: "ID is required" })}
        />
        {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          aria-label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Div>

      <ButtonContainer>
        <Button
          type="button"
          onClick={handleNextStep}
        >
          Continue
        </Button>
      </ButtonContainer>

      <StepTracker>1/4</StepTracker>
    </>
  );
};
