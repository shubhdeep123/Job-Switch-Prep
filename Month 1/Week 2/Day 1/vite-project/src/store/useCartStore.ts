import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  // state
  items: [],
  // actions — use set() to update state
  addItem: (item: CartItem) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            ...item,
            quantity: 1,
          },
        ],
      };
    }),
  removeItem: (id) =>
    set((state) => {
      return {
        items: state.items.filter((i) => i.id !== id),
      };
    }),
  clearCart: () => set({ items: [] }),

}));
