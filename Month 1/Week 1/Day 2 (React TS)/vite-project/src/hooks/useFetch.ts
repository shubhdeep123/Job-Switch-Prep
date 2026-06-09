import { useState, useEffect } from "react";

export function useFetch<T>(url: string | null): {
  data: T | null;
  error: string;
  isLoading: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(url as string, {
          signal: controller.signal,
        });
        if (!response.ok) {
          setData(null);
          throw new Error("User not found");
        }
        const data:T = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
}
