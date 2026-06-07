import { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { useToggle } from "../hooks/useToggle";

export function Dropdown() {
  const dropdownElement = useRef<HTMLDivElement>(null);
  const [isOpen, toggle, , setFalse] = useToggle(true);
  useClickOutside(dropdownElement, setFalse);
  return (
    <div ref={dropdownElement}>
      <button onClick={toggle}>Select Option</button>
      {isOpen && (
        <ul>
          <li value="india">India</li>
          <li value="usa">USA</li>
          <li value="canada">Canada</li>
        </ul>
      )}
    </div>
  );
}
