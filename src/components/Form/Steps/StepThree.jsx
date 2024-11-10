import { Button } from "../../Button/Button.jsx";
import "../Form.css";

export const StepThree = ({
  register,
  errors,
  handleNextStep,
  handlePrevStep,
}) => {
  return (
    <>
      <p>Bank details:</p>
      <div className="customer-address">
        <label htmlFor="accountOpenedAt">Account Opened At</label>
        <input
          id="accountOpenedAt"
          aria-label="Account Opened At"
          {...register("accountOpenedAt", {
            required: "Account opened at is required",
          })}
        />
        {errors.accountOpenedAt && (
          <p className="error-message">{errors.accountOpenedAt.message}</p>
        )}

        <label htmlFor="accountHolder">Account Holder</label>
        <input
          id="accountHolder"
          aria-label="Account Holder"
          {...register("accountHolder", {
            required: "Account holder is required",
          })}
        />
        {errors.accountHolder && (
          <p className="error-message">{errors.accountHolder.message}</p>
        )}

        <label htmlFor="IBAN">IBAN</label>
        <input
          type="number"
          id="IBAN"
          aria-label="IBAN"
          {...register("IBAN", {
            required: "IBAN is required",
          })}
        />
        {errors.IBAN && <p className="error-message">{errors.IBAN.message}</p>}
      </div>

      <div className="button-container">
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
      </div>

      <p className=".step-tracker">3/4</p>
    </>
  );
};
