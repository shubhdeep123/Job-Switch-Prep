import { createContext, useContext, useState } from "react";

// define shape of context that components willl access
interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type: "success" | "error" | "info") => void;
  removeToast: (id: number) => void;
}

// create a context
const ToastContext = createContext<ToastContextType | null>(null);

// create a context provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function addToast(message: string, type: "success" | "error" | "info") {
    setToasts((prev) => [
      ...prev,
      {
        message: message,
        type: type,
        id: Date.now(),
      },
    ]);
    console.log(toasts);
  }

  function removeToast(id: number) {
    setToasts((prev) => prev.filter((toast) => toast.id != id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

// consume context through hook

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
}
