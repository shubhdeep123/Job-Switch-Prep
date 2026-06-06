import { useMemo, useState } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface MemoComponentProps {
  userList: User[];
}

export function MemoComponent({ userList }: MemoComponentProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const filteredUsers = useMemo(() => {
    console.log("Filtering user list...");
    return userList.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, userList]);

  return (
    <div>
      <input
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Current theme: {theme}
      </button>
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
