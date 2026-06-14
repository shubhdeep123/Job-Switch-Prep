import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserPrefStore {
  theme: "light" | "dark";
  language: "en" | "hi";
  fontSize: "sm" | "md" | "lg";
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (language: "en" | "hi") => void;
  setFontSize: (fontSize: "sm" | "md" | "lg") => void;
  resetPreferences: () => void;
}

export const useUserPref = create<UserPrefStore>()(
  persist(
    (set) => ({
      theme: "light",
      language: "en",
      fontSize: "sm",
      setTheme: (theme) =>
        set({
          theme,
        }),
      setLanguage: (language) =>
        set({
          language,
        }),
      setFontSize: (fontSize) =>
        set({
          fontSize,
        }),
      resetPreferences: () =>
        set({
          theme: "light",
          language: "en",
          fontSize: "sm",
        }),
    }),
    { name: "pref-storage" },
  ),
);
