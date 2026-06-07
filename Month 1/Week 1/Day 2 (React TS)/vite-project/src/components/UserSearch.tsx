import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import type { User } from "../types/UserType";
import { useDebounce } from "../hooks/useDebounce";

export function UserSearch() {
  const [inputId, setInputId] = useState<string>("");
  const debouncedValue = useDebounce(inputId, 500);
  const url = debouncedValue
    ? `https://jsonplaceholder.typicode.com/users/${debouncedValue}`
    : null;

  const { data, error, isLoading } = useFetch<User>(url);

  return (
    <div>
      <p>Enter a user ID between 1 and 10 to fetch user data from the API.</p>
      <input
        placeholder="Search users..."
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && !isLoading && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
          <p>{data?.address?.city}</p>
        </div>
      )}
    </div>
  );
}
