import { useState, useEffect, type JSX, useRef } from "react";

export function AutoIncCounter(): JSX.Element {
    const [count, setCount] = useState<number>(0)
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [showResetCount, setShowResetCount] = useState<boolean>(false);
    const resetCount = useRef<number>(0);
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
            return () => {clearInterval(interval)};
        }
        // const resetInterval = setInterval(() => {
        //     setCount(0);
        // },3000)
        // return () => {clearInterval(resetInterval)};
    }, [isPaused]);

    const handleReset = () => {        
        setCount(0);
        resetCount.current += 1;
    }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIsPaused(prev => !prev)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => setShowResetCount(prev => !prev)}>
        {showResetCount ? "Hide" : "Show"} reset count
      </button>
      {showResetCount && <p>Reset count: {resetCount.current}</p>}
    </div>
  );
}