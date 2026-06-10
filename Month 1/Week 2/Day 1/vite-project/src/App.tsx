import "./App.css";
import { InputForm } from "./component/InputForm";
import { NavBar } from "./component/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavBar />
        <InputForm/>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
