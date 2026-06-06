import { useState, useRef } from "react";

export function ValueTracker() {
  const [value, setValue] = useState<string>("");
  const previousValue = useRef<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    previousValue.current = value;
    setValue(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <h2>Current Value: {value}</h2>
      <h3>Previous Value: {previousValue.current}</h3>
    </div>
  );
}
