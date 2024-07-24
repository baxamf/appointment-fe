import { Alert } from "antd";
import { ErrorMessage } from "formik";

type FormErrorMessageProps = {
  name: string;
};

export default function FormErrorMessage({ name }: FormErrorMessageProps) {
  return (
    <ErrorMessage
      render={(msg) => (
        <Alert
          style={{ position: "absolute", right: 0, marginTop: 5 }}
          message={msg}
          type="error"
        />
      )}
      name={name}
    />
  );
}
