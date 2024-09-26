import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form } from "./StyledComponents.js";

import { StepOne } from "./stepsComponents/StepOne.jsx";
import { StepTwo } from "./stepsComponents/StepTwo.jsx";
import { StepThree } from "./stepsComponents/StepThree.jsx";
import { StepFour } from "./stepsComponents/StepFour.jsx";

const filterNonEmptyServices = (services) => {
  return services.filter(
    (service) => service.service.trim() !== "" && service.amount.trim() !== ""
  );
};

const calculateTotalAmount = (services) => {
  return services
    .filter((service) => service.amount.trim() !== "")
    .reduce((total, service) => total + parseFloat(service.amount || 0), 0);
};

const hasAtLeastOneService = (services) => {
  return services.some(
    (service) => service.service.trim() !== "" && service.amount.trim() !== ""
  );
};

export const FormComponent = ({ onComplete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [services, setServices] = useState([{ service: "", amount: "" }]);
  const [serviceError, setServiceError] = useState(false);

  const handleNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  const handleNewService = () =>
    setServices((prevServices) => [
      ...prevServices,
      { service: "", amount: "" },
    ]);

  const handleServiceChange = (index, field, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, [field]: value } : service
      )
    );
  };

  const onSubmit = (data) => {
    const nonEmptyServices = filterNonEmptyServices(services);

    if (!hasAtLeastOneService(services)) {
      setServiceError("At least one service is required.");
      return;
    }

    setServiceError(false);
    const finalData = { ...data, services: nonEmptyServices };
    onComplete(finalData);
    navigate("/invoice");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <StepOne
          register={register}
          errors={errors}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          register={register}
          errors={errors}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <StepThree
          register={register}
          errors={errors}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <StepFour
          services={services}
          serviceError={serviceError}
          handleServiceChange={handleServiceChange}
          handleNewService={handleNewService}
          handlePrevStep={handlePrevStep}
          calculateTotalAmount={() => calculateTotalAmount(services)}
        />
      )}
    </Form>
  );
};
