import { useToast } from "../context/ToastContext";

export function Toast() {
  const { toasts } = useToast();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}