import { useToggle } from "../hooks/useToggle";

export function Password() {
  const [isVisible, toggle, , ] = useToggle(false);

  return (
    <div>
      <input type={isVisible ? "text" : "password"} placeholder="Enter Password" />
      <button
        onClick={toggle}
      >
        {!toggle ? "Show" : "Hide"}
      </button>
    </div>
  );
}
