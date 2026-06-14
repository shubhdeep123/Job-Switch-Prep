import React, { createContext, useContext, useState } from "react";

// define shape of object that context will provide to component
export interface CartItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
}

// create context
const CartContext = createContext<CartContextType | null>(null);

// create provider
export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const totalItems = items.length;

  function addItem(item: Omit<CartItem,"id">) {
    const id = Date.now();
    setItems((prev) => [
      ...prev,
      {
        id: id,
        name: item.name,
        price: item.price,
        rating: item.rating,
        quantity:item.quantity,
        image:item.image
      },
    ]);
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id != id));
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
