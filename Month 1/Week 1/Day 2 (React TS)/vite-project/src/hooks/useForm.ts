import { useState } from "react";

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
  }

  function validate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let isValid = true;
    const newErrors: Partial<Record<keyof T, string>> = {};
    for (let key in values) {
      if (
        values[key] === "" ||
        values[key] === undefined ||
        values[key] === null
      ) {
        isValid = false;
        newErrors[key] = `${key} is required`;
      }
    }

    setErrors(newErrors);
    return isValid;
  }

  return {
    values,
    errors,
    handleChange,
    handleReset,
    validate,
  };
}
