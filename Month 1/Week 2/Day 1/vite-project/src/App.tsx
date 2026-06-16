import "./App.css";
// import { CartSideBar } from "./component/CartSideBar";
import { InputForm } from "./component/InputForm";
import { NavBar } from "./component/NavBar";
// import { ProductList } from "./component/ProductList";
// import { Counter } from "./component/Counter";
import { Toast } from "./component/Toast";
import { TodoList } from "./component/TodoList";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <ThemeProvider>
          {/* <Toast />
          <NavBar />
          <InputForm /> */}
          {/* <div style={{ display: "flex", gap: "20px" }}>
            <ProductList />
            <CartSideBar />
          </div> */}
          {/* <Counter /> */}
          <TodoList/>
        </ThemeProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
