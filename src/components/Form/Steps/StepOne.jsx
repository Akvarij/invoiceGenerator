import { Button } from "../../Button/Button.jsx";
import "../Form.css";

export const StepOne = ({ register, errors, handleNextStep }) => {
  return (
    <>
      <p>Company Address:</p>
      <div className="customer-address">
        <label htmlFor="companyName">Company name</label>
        <input
          id="companyName"
          aria-label="Company name"
          {...register("companyName", { required: "Company name is required" })}
        />
        {errors.companyName && (
          <p className="error-message">{errors.companyName.message}</p>
        )}

        <label htmlFor="street">Street</label>
        <input
          id="street"
          aria-label="Street"
          {...register("street", { required: "Street is required" })}
        />
        {errors.street && (
          <p className="error-message">{errors.street.message}</p>
        )}

        <label htmlFor="postal">Postal code</label>
        <input
          type="number"
          id="postal"
          aria-label="Postal code"
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
        {errors.postal && (
          <p className="error-message">{errors.postal.message}</p>
        )}

        <label htmlFor="id">ID</label>
        <input
          type="number"
          id="id"
          aria-label="ID"
          {...register("id", { required: "ID is required" })}
        />
        {errors.id && <p className="error-message">{errors.id.message}</p>}

        <label htmlFor="email">Email</label>
        <input
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
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="button-container">
        <Button
          type="button"
          onClick={handleNextStep}
        >
          Continue
        </Button>
      </div>

      <p className=".step-tracker">1/4</p>
    </>
  );
};
