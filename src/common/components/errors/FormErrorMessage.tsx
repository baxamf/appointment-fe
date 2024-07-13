import { Alert } from "antd";
import { ErrorMessage } from "formik";

type FormErrorMessageProps = {
  name: string;
};

export default function FormErrorMessage({ name }: FormErrorMessageProps) {
  return (
    <ErrorMessage
      render={(msg) => <Alert message={msg} type="error" />}
      name={name}
    />
  );
}