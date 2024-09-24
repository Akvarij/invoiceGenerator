import { styled } from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  background: #fff;
  padding: 0.5rem;
  border: 0.5px rgba(16, 40, 73, 0.09);
  box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);
  font-size: 1rem;
  width: 100%;
  max-width: 75rem;
  height: auto;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  max-width: 30rem;
  padding: 0.5rem;
  border: 0.5px rgba(16, 40, 73, 0.09);
  box-shadow: 0 0 17px 0 rgba(16, 40, 73, 0.09);
  border-radius: 0.25rem;
  font-size: 1rem;
`;

const Div = styled.div`
  max-width: 30rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  text-align: center;

  p {
    margin: 0.73rem;
    font-size: 15px;
  }
`;

export const FormComponent = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [services, setServices] = useState([{ service: "", amount: "" }]);
  const [serviceError, setServiceError] = useState(false);

  const handleNextStep = async (data) => {
    const isValid = await trigger(); // Trigger validation for the current step
    if (isValid) {
      setFormData((prevData) => ({ ...prevData, ...data, services })); // Add services to formData
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleNewService = () => {
    setServices((prevServices) => [
      ...prevServices,
      { service: "", amount: "" },
    ]);
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const filterNonEmptyServices = () => {
    return services.filter(
      (service) => service.service.trim() !== "" && service.amount.trim() !== ""
    );
  };

  const calculateTotalAmount = () => {
    return services
      .filter((service) => service.amount.trim() !== "")
      .reduce((total, service) => total + parseFloat(service.amount || 0), 0);
  };

  // Check if there is at least one non-empty service
  const hasAtLeastOneService = () => {
    return services.some(
      (service) => service.service.trim() !== "" && service.amount.trim() !== ""
    );
  };

  const onSubmit = (data) => {
    const nonEmptyServices = filterNonEmptyServices();

    if (!hasAtLeastOneService()) {
      setServiceError("At least one service is required.");
      return;
    }

    const finalData = { ...data, services: nonEmptyServices };
    setServiceError(false); // Clear error if the validation passes
    onComplete(finalData);
    navigate("/invoice");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <>
          <Input
            {...register("companyName", { required: "This is required" })}
            label="Company name"
            placeholder={errors.companyName?.message ?? "Company name"}
          />
          <Div className="companyAddress">
            <Input
              {...register("street", { required: "This is required" })}
              label="Street"
              placeholder={errors.street?.message ?? "Street"}
            />
            <Input
              type="number"
              {...register("postal", {
                minLength: 4,
                minLength: 5,
                required: "This is required",
              })}
              label="Postal"
              placeholder={errors.postal?.message ?? "Postal"}
            />
            <Input
              type="number"
              {...register("id", {
                required: "This is required",
              })}
              label="ID"
              placeholder={errors.id?.message ?? "ID"}
            />
            <Input
              {...register("email", { required: "This is required" })}
              label="Email"
              placeholder={errors.email?.message ?? "Email"}
            />
          </Div>
          <Div>
            <Button
              type="button"
              onClick={() => handleNextStep()}
            >
              Continue
            </Button>
          </Div>
          <Div>
            <p>1/4</p>
          </Div>
        </>
      )}
      {step === 2 && (
        <>
          <p>Bill To:</p>
          <Div className="billTo">
            <Input
              {...register("company", { required: "This is required" })}
              label="Company name"
              placeholder={errors.company?.message ?? "Company name"}
            />
            <Input
              {...register("companyAddress", { required: "This is required" })}
              label="Company address"
              placeholder={errors.companyAddress?.message ?? "Company address"}
            />
            <Input
              type="number"
              {...register("postalCode", {
                minLength: 4,
                required: "This is required",
              })}
              label="Postal code"
              placeholder={errors.postalCode?.message ?? "Postal code"}
            />
            <Input
              {...register("country", { required: "This is required" })}
              label="Country"
              placeholder={errors.country?.message ?? "Country"}
            />
          </Div>
          <Div>
            <Button
              type="button"
              onClick={handlePrevStep}
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => handleNextStep()}
            >
              Continue
            </Button>
          </Div>
          <Div>
            <p>2/4</p>
          </Div>
        </>
      )}
      {step === 3 && (
        <>
          <p>Bank details:</p>
          <Div className="bankDetails">
            <Input
              {...register("accountOpenedAt", { required: "This is required" })}
              label="Account opened at:"
              placeholder={
                errors.accountOpenedAt?.message ?? "Account opened at"
              }
            />
            <Input
              {...register("accountHolder", { required: "This is required" })}
              label="Account holder"
              placeholder={errors.accountHolder?.message ?? "Account holder"}
            />
            <Input
              {...register("IBAN", { required: "This is required" })}
              label="IBAN"
              placeholder={errors.IBAN?.message ?? "IBAN"}
            />
          </Div>
          <Div>
            <Button
              type="button"
              onClick={handlePrevStep}
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => handleNextStep()}
            >
              Continue
            </Button>
          </Div>
          <Div>
            <p>3/4</p>
          </Div>
        </>
      )}
      {step === 4 && (
        <>
          <p>Services:</p>
          {services.map((service, index) => (
            <Div
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
                value={service.amount}
                onChange={(e) =>
                  handleServiceChange(index, "amount", e.target.value)
                }
                placeholder="Amount"
              />
            </Div>
          ))}
          <Div>
            {serviceError && <p style={{ color: "red" }}>{serviceError}</p>}
          </Div>
          <Div>
            <Button
              type="button"
              onClick={handleNewService}
            >
              New service
            </Button>

            <p {...register("totalAmount")}>
              Total amount: {calculateTotalAmount()} EUR
            </p>
          </Div>
          <Div>
            <Button
              type="button"
              onClick={handlePrevStep}
            >
              Back
            </Button>
            <Button type="submit">Submit</Button>
          </Div>
          <Div>
            <p>4/4</p>
          </Div>
        </>
      )}
    </Form>
  );
};
