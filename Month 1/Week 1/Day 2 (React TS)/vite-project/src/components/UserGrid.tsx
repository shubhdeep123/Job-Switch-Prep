import type { User } from "../types/UserType";
import { UserCard } from "./UserCard";

interface UserGridProp {
  userData: User[];
  onUserClick: (user: User) => void;
}

export function UserGrid({ userData, onUserClick }: UserGridProp) {
  return (
    <div className="user-grid">
      {userData.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
      ))}
    </div>
  );
}
