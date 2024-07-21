import { FormikHelpers } from "formik";

export type FormCommonProps = {
  error: boolean;
  errorMessage?: string;
  submitDisabled: boolean;
};

export type FormMutationHookReturnType<T> = {
  submitFormHandler: (input: T, actions: FormikHelpers<T>) => Promise<void>;
} & FormCommonProps;
