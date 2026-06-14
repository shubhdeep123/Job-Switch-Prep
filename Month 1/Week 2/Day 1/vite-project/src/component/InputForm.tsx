import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useNotificationStore } from "../store/useNotificationStore";

export function InputForm() {
  const { user, login, logout } = useAuth();
  // const { toasts, addToast, removeToast } = useToast()
  const { addNotification } = useNotificationStore();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    login(name, email);
    setName("");
    setEmail("");
    // toastcontext consumption pending to display on screen
    addNotification("User Loggedin", "success");
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
