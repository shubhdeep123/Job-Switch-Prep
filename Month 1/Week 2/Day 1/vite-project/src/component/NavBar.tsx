import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  return (
    <nav
      style={{
        background: theme === "light" ? "#FFFFFF" : "#1F2937",
        color: theme === "light" ? "#1F2937" : "#FFFFFF",
      }}
    >
      <span>{user ? `Hi, ${user.name}` : `Hi, Guest`}</span>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
