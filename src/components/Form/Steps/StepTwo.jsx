import { Button } from "../../Button/Button.jsx";
import "../Form.css";

export const StepTwo = ({
  register,
  errors,
  handleNextStep,
  handlePrevStep,
}) => {
  return (
    <>
      <p>Bill To:</p>
      <div className="customer-address">
        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          aria-label="Company Name"
          {...register("company", { required: "Company name is required" })}
        />
        {errors.company && (
          <p className="error-message">{errors.company.message}</p>
        )}

        <label htmlFor="companyAddress">Company Address</label>
        <input
          id="companyAddress"
          aria-label="Company Address"
          {...register("companyAddress", {
            required: "Company address is required",
          })}
        />
        {errors.companyAddress && (
          <p className="error-message">{errors.companyAddress.message}</p>
        )}

        <label htmlFor="postalCode">Postal Code</label>
        <input
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
          <p className="error-message">{errors.postalCode.message}</p>
        )}

        <label htmlFor="country">Country</label>
        <input
          id="country"
          aria-label="Country"
          {...register("country", { required: "Country is required" })}
        />
        {errors.country && (
          <p className="error-message">{errors.country.message}</p>
        )}
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

      <p className=".step-tracker">2/4</p>
    </>
  );
};
