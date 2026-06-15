import { useDispatch, useSelector } from "react-redux";
// import { useCartStore } from "../store/useCartStore";
import type { RootState } from "../store/store";
import { clearCart, removeItem } from "../slices/cartSlice";

export function CartSideBar() {
  // const { items, clearCart, removeItem } = useCartStore();
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div>
      <h2>Cart ({itemCount} items)</h2>
      {items.length == 0 && <p>Your cart is empty</p>}
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>₹{item.quantity * item.price}</p>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      {items.length > 0 && (
        <>
          <p>Total : ₹{total}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
