import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

export function InputForm() {
  const { user, login, logout } = useAuth();
  const { toasts, addToast, removeToast } = useToast()
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleLogin(e:React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    login(name, email);
    setName("");
    setEmail("");
    // toastcontext consumption pending to display on screen
    addToast("User Loggedin","success");
  }

  return (
    <>
      {!user && (
        <form
          onSubmit={(e) => {
            handleLogin(e);
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
