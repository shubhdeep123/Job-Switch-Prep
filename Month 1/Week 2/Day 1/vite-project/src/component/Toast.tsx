// import { useToast } from "../context/ToastContext";
import { useNotificationStore } from "../store/useNotificationStore";

export function Toast() {
  // const { toasts } = useToast();
  const {notifications} = useNotificationStore()

  return (
    <div className="toast-container">
      {notifications.map((toast) => (
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