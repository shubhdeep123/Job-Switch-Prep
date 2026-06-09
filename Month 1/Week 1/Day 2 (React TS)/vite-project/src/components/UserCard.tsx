import type { User } from "../types/UserType";

interface UserCardProp {
    user:User,
    onClick:()=>void
}

export function UserCard({user,onClick}:UserCardProp) {
    return (
        <div className="user-card" onClick={onClick}>
            <h2>{user.name}</h2>
            <p></p>
        </div>
    )
}