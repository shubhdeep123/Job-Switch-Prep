import { create } from "zustand";

interface Notification {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (
    message: string,
    type: "success" | "error" | "info",
  ) => void;
  removeNotification: (id: number) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (message, type) => {
    const id = Date.now();
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: id, message: message, type: type },
      ],
    }));

    setTimeout(() => {
      useNotificationStore.getState().removeNotification(id);
    }, 3000);
  },
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((i) => i.id !== id),
    }));
  },
}));
