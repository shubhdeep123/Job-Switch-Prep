import { useCartStore } from "../store/useCartStore";

export function CartSideBar() {
  const { items, clearCart, removeItem } = useCartStore();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div>
      <h2>Cart ({itemCount} items)</h2>
      {items.length == 0 && <p>Your cart is empty</p>}
      {items.map((item)=>(
        <div key={item.id}>
            <p>{item.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>₹{item.quantity * item.price}</p>
            <button onClick={()=>removeItem(item.id)}>Remove</button>
        </div>
      ))}
      {items.length > 0 && (
        <>
            <p>Total : ₹{total}</p> 
            <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
