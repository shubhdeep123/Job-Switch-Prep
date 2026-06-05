import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export function DebounceSearch() {
  const [query, setQuery] = useState<string>("");
  const deBouncedValue = useDebounce<string>(query, 500);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Typing Value: {query}</p>
      <p>Debounced Value: {deBouncedValue}</p>
    </div>
  );
}
