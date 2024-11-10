import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Form.css";

import { StepOne } from "./Steps/StepOne.jsx";
import { StepTwo } from "./Steps/StepTwo.jsx";
import { StepThree } from "./Steps/StepThree.jsx";
import { StepFour } from "./Steps/StepFour.jsx";

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

export const Form = ({ onComplete }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [services, setServices] = useState([{ service: "", amount: "" }]);
  const [serviceError, setServiceError] = useState(false);
  const [localStorageData, setLocalStorageData] = useState({});
  const [localStorageError, setLocalStorageError] = useState(""); // State for error message

  const handleInputValue = () => {
    let localData = localStorage.getItem("finalData");
    if (localData) {
      const parsedData = JSON.parse(localData);
      if (parsedData && Object.keys(parsedData).length > 0) {
        setLocalStorageData(parsedData);
        setLocalStorageError("");

        // Sync data with form fields
        Object.keys(parsedData).forEach((key) => {
          setValue(key, parsedData[key] || ""); // This ensures synchronization
        });
      } else {
        setLocalStorageError("No data found or data is empty.");
      }
    } else {
      setLocalStorageError("No data found in localStorage.");
    }
  };

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
    localStorage.setItem("finalData", JSON.stringify(finalData));
    onComplete(finalData);
    navigate("/invoice");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <StepOne
          register={register}
          errors={errors}
          handleNextStep={handleNextStep}
          setValue={setValue}
          handleInputValue={handleInputValue}
          setLocalStorageError={setLocalStorageError}
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
    </form>
  );
};
