import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function InputForm() {
  const { user, login, logout } = useAuth();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <>
      {!user && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            login(name, email);
            setName("")
            setEmail("")
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
}
