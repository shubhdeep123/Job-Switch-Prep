import { useAuth } from "../context/AuthContext";
import { PRODUCTS } from "../data/JSONData";
import { useCartStore } from "../store/useCartStore";
import { useSortStore } from "../store/useSortStore";

export function ProductList() {
  const { addItem } = useCartStore();
  const { user } = useAuth();
  const {
    searchTerm,
    sortBy,
    sortOrder,
    setSearch,
    setSort,
    toggleSortOrder,
    resetFilters,
  } = useSortStore();

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  ).sort((a, b) => {
    if (!sortBy) return 0;
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (typeof valA === "string") {
      return sortOrder === "asc"
        ? valA.localeCompare(valB as string)
        : (valB as string).localeCompare(valA);
    }
    return sortOrder === "asc"
      ? (valA as number) - (valB as number)
      : (valB as number) - (valA as number);
  });
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Product"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <select
        value={sortBy}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSort(e.target.value as "price" | "rating" | "name")
        }
      >
        <option value="">Select an option</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="name">Name</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          toggleSortOrder(e.target.value as "asc" | "desc")
        }
      >
        <option value="">Select an option</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <button onClick={resetFilters}>Reset Filters</button>
      {user &&
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <img
              style={{ width: "30vw", height: "50vh" }}
              src={product.image}
            />
            <p>{product.price}</p>
            <p>⭐ {product.rating}</p>
            <button onClick={() => addItem(product)}>Add To Cart</button>
          </div>
        ))}
    </div>
  );
}
