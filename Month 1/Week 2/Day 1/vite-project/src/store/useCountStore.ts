import { create } from "zustand";

interface CountStore {
  count: number;
  history: number[];

  increment: () => void;
  decrement: () => void;
  reset: () => void;
  undoLast: () => void;
}

export const useCountStore = create<CountStore>((set, get) => ({
  count: 0,
  history: [],
  increment: () =>
    set((state) => ({
      count: state.count + 1,
      history: [...state.history, state.count],
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
      history: [...state.history, state.count],
    })),
  reset: () =>
    set(() => ({
      count: 0,
      history: [],
    })),
  undoLast: () => {
    const { history } = get();
    if (history.length == 0) return 0;
    const previousCount = history[history.length - 1];
    set((state) => ({
      count: previousCount,
      history: state.history.slice(0, -1),
    }));
  },
}));
