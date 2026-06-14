import { useCountStore } from "../store/useCountStore";

export function Counter() {
  const { count, history, undoLast, increment, decrement, reset } =
    useCountStore();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Inc</button>
        <button onClick={reset}>Reset</button>
        <button onClick={undoLast}>Undo</button>
        <button onClick={decrement}>Dec</button>
      </div>
      {history.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
