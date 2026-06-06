import { useRef, useState } from "react";

export function IncDecCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef<number>(0);

  renderCount.current += 1;

  function incDecCounter(inc: boolean) {
    if (inc) {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => Math.max(0, prev - 1)); // never goes below 0
    }
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h3>Render Count: {renderCount.current}</h3>
      <button onClick={() => incDecCounter(true)}>Increment</button>
      <button onClick={() => incDecCounter(false)}>Decrement</button>
    </div>
  );
}
