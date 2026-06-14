import { create } from "zustand";

interface SortStore {
  searchTerm: string;
  sortBy: "price" | "rating" | "name";
  sortOrder: "asc" | "desc";
  setSearch: (searchTerm: string) => void;
  setSort: (sortBy: "price" | "rating" | "name") => void;
  toggleSortOrder: (sortOrder: "asc" | "desc") => void;
  resetFilters: () => void;
}

export const useSortStore = create<SortStore>((set, get) => ({
  searchTerm: "",
  sortBy: "price",
  sortOrder: "asc",
  setSearch: (searchTerm) => {
    set({
      searchTerm,
    });
  },
  setSort: (sortBy) => {
    set({
      sortBy,
    });
  },
  toggleSortOrder: (sortOrder) => {
    set({
      sortOrder,
    });
  },
  resetFilters: () => {
    set(() => ({
      searchTerm: "",
      sortBy: "rating",
      sortOrder: "asc",
    }));
  },
}));
