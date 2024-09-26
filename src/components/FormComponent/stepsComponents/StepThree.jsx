import { Button } from "../../CustomButtonComponent/CustomButtonComponent.jsx";
import {
  Input,
  ButtonContainer,
  Div,
  StepTracker,
  ErrorMessage,
} from "../StyledComponents.js";

export const StepThree = ({
  register,
  errors,
  handleNextStep,
  handlePrevStep,
}) => {
  return (
    <>
      <p>Bank details:</p>
      <Div>
        <label htmlFor="accountOpenedAt">Account Opened At</label>
        <Input
          id="accountOpenedAt"
          aria-label="Account Opened At"
          {...register("accountOpenedAt", {
            required: "Account opened at is required",
          })}
        />
        {errors.accountOpenedAt && (
          <ErrorMessage>{errors.accountOpenedAt.message}</ErrorMessage>
        )}

        <label htmlFor="accountHolder">Account Holder</label>
        <Input
          id="accountHolder"
          aria-label="Account Holder"
          {...register("accountHolder", {
            required: "Account holder is required",
          })}
        />
        {errors.accountHolder && (
          <ErrorMessage>{errors.accountHolder.message}</ErrorMessage>
        )}

        <label htmlFor="IBAN">IBAN</label>
        <Input
          type="number"
          id="IBAN"
          aria-label="IBAN"
          {...register("IBAN", { required: "IBAN is required", maxLength: 34 })}
        />
        {errors.IBAN && <ErrorMessage>{errors.IBAN.message}</ErrorMessage>}
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

      <StepTracker>3/4</StepTracker>
    </>
  );
};
