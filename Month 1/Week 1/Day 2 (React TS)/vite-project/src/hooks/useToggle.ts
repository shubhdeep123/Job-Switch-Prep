import { useState } from "react";

export function useToggle(
  defaultValue: boolean = false,
): [boolean, () => void, () => void, () => void] {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, toggle, setTrue, setFalse];
}
