import "./App.css";
import { InputForm } from "./component/InputForm";
import { NavBar } from "./component/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <ThemeProvider>
          <NavBar />
          <InputForm />
        </ThemeProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
