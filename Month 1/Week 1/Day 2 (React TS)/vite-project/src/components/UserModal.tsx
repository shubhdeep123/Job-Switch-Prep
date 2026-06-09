import { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import type { User } from "../types/UserType";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export function UserModal({ user, onClose }: UserModalProps) {
  const divElement = useRef<HTMLDivElement>(null);
  useClickOutside(divElement, onClose);
  return (
    <div className="modal-overlay">
      <div ref={divElement} className="modal">
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
      </div>
    </div>
  );
}
