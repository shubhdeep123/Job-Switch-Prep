import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0); //type is inferred as number
  return (
    <div>
      <p>Count increased to {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
    </div>
  );
}
