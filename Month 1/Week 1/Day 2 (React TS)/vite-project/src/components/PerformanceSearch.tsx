import { useMemo, useRef, useState } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface PerformanceSearch {
  userList: User[];
}

export function PerformanceSearch({ userList }: PerformanceSearch) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filterCount = useRef<number>(0);
  const filterTime = useRef<number>(0);

  const filteredUsers = useMemo(() => {
    console.log("Filtering user list...");
    filterCount.current += 1;

    const startTime = performance.now();
    const filteredList = userList.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const endTime = performance.now();

    filterTime.current = endTime - startTime;

    return filteredList;
  }, [searchTerm, userList]);

  return (
    <div>
      <input
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Filter Count : {filterCount.current}</p>
      <p>Last Filter Took : {filterTime.current.toFixed(2)}ms</p>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
