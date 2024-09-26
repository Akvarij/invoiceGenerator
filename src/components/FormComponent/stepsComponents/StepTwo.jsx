import { Button } from "../../CustomButtonComponent/CustomButtonComponent.jsx";
import {
  Input,
  ButtonContainer,
  Div,
  StepTracker,
  ErrorMessage,
} from "../StyledComponents.js";

export const StepTwo = ({
  register,
  errors,
  handleNextStep,
  handlePrevStep,
}) => {
  return (
    <>
      <p>Bill To:</p>
      <Div>
        <label htmlFor="company">Company Name</label>
        <Input
          id="company"
          aria-label="Company Name"
          {...register("company", { required: "Company name is required" })}
        />
        {errors.company && (
          <ErrorMessage>{errors.company.message}</ErrorMessage>
        )}

        <label htmlFor="companyAddress">Company Address</label>
        <Input
          id="companyAddress"
          aria-label="Company Address"
          {...register("companyAddress", {
            required: "Company address is required",
          })}
        />
        {errors.companyAddress && (
          <ErrorMessage>{errors.companyAddress.message}</ErrorMessage>
        )}

        <label htmlFor="postalCode">Postal Code</label>
        <Input
          type="number"
          id="postalCode"
          aria-label="Postal Code"
          {...register("postalCode", {
            required: "Postal code is required",
            minLength: {
              value: 4,
              message: "Postal code must be 4 digits",
            },
            maxLength: {
              value: 6,
            },
          })}
        />
        {errors.postalCode && (
          <ErrorMessage>{errors.postalCode.message}</ErrorMessage>
        )}

        <label htmlFor="country">Country</label>
        <Input
          id="country"
          aria-label="Country"
          {...register("country", { required: "Country is required" })}
        />
        {errors.country && (
          <ErrorMessage>{errors.country.message}</ErrorMessage>
        )}
      </Div>

      <ButtonContainer>
        <Button
          type="button"
          onClick={handlePrevStep}
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={handleNextStep}
        >
          Continue
        </Button>
      </ButtonContainer>

      <StepTracker>2/4</StepTracker>
    </>
  );
};
