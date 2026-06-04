import { useState, useEffect, type JSX } from "react";

export function AutoIncCounter(): JSX.Element {
    const [count, setCount] = useState<number>(0)
    const [isPaused, setIsPaused] = useState<boolean>(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
            return () => {clearInterval(interval)};
        }
    }, [isPaused]);

    return (
        <div>
            <p>Count increased to {count}</p>
            <button onClick={()=>setIsPaused((prev) => !prev)}>{isPaused ? "Resume" : "Pause"}</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            
        </div>
    )
}