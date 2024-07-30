import React, { FormEvent, ReactNode } from "react";

interface FormValidationProps {
  children: ReactNode;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className: string;
}

const FormValidation: React.FC<FormValidationProps> = ({
  children,
  handleSubmit,
  className,
}) => {
  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
};

export default FormValidation;
