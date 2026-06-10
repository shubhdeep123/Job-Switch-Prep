import { createContext, useContext, useState } from "react";

// shape of value that component will access
interface AuthContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

interface User { name: string; email: string }

// create context
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

// create provider fn
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, email: string) => {
    setUser({
      name: name,
      email: email,
    });
  };

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
  );
}

// custom hook to consume context
export function useAuth() {
    return useContext(AuthContext);
}
