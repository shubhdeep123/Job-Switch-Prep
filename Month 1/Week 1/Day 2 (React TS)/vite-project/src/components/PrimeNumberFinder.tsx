import { useState, useMemo } from "react";

export function PrimeNumberFinder() {
    const [inputValue, setInputValue] = useState<number>(0);
    const [theme, setTheme] = useState<string>("light");
    const primeNumbers = useMemo(()=>{
        console.log("Calculating prime numbers...");
        const primes: number[] = [];
        for(let i=2; i<=inputValue; i++){
            let isPrime = true;
            for(let j=2; j<=Math.sqrt(i); j++){
                if(i % j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primes.push(i);
            }
        }
        return primes;
    },[inputValue])
    return (
        <div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
            />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme : {theme}</button>
            <h2>Prime Numbers:</h2>
            <ul>
                {primeNumbers.map((num) => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
        </div>
    )
}