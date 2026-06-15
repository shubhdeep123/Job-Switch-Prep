import type React from "react";
import ".././product.css";
import { useAuth } from "../context/AuthContext";
import { PRODUCTS } from "../data/JSONData";
// import { useCartStore } from "../store/useCartStore";
import { useSortStore } from "../store/useSortStore";
import { useUserPref } from "../store/useUserPref";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

export function ProductList() {
  // const { addItem } = useCartStore();
  const dispatch = useDispatch();
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

  const {
    theme,
    fontSize,
    language,
    setTheme,
    setFontSize,
    setLanguage,
    resetPreferences,
  } = useUserPref();

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
    <div className={`product-page ${theme}`}>
      <div className="preferences-bar">
        <select
          className="sort-select"
          value={theme}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setTheme(e.target.value as "light" | "dark")
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <select
          className="sort-select"
          value={fontSize}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFontSize(e.target.value as "sm" | "md" | "lg")
          }
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>

        <select
          className="sort-select"
          value={language}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setLanguage(e.target.value as "en" | "hi")
          }
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>

        <button className="action-btn" onClick={resetPreferences}>
          Reset Pref
        </button>
      </div>

      <div className="filter-bar">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          placeholder="Search Product"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="sort-select"
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
          className="sort-select"
          value={sortOrder}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            toggleSortOrder(e.target.value as "asc" | "desc")
          }
        >
          <option value="">Select an option</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>

        <button className="action-btn" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {user && (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <p className="product-name">{product.name}</p>

              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />

              <p className="product-price">₹{product.price}</p>

              <p className="product-rating">⭐ {product.rating}</p>

              <button
                className="add-cart-btn"
                onClick={() => dispatch(addItem(product))}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
