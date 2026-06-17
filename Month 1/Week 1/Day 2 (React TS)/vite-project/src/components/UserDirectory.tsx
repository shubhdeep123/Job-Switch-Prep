import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import type { User } from "../types/UserType";
import { SearchBar } from "./SearchBar";
import { UserGrid } from "./UserGrid";
import { UserModal } from "./UserModal";
import { useDebounce } from "../hooks/useDebounce";
import { useGetUsersQuery } from "../slice/apiSlice";

export function UserDirectory() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchItem, setSearchItem] = useState("");
  const debouncedValue = useDebounce<string>(searchItem, 500);
  // const { data, error, isLoading } = useFetch<User[]>(
  //   "https://jsonplaceholder.typicode.com/users",
  // );

  const {
    data, // the response data
    isLoading, // true on first load
    isFetching, // true on any load including refetch
    isError, // true if request failed
    error, // the error object
    refetch, // function to manually trigger refetch
  } = useGetUsersQuery();
  const filteredUsers = data?.filter(
    (user) =>
      user.name.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedValue.toLowerCase()),
  );

  function handleUserClick(user: User) {
    setSelectedUser(user);
    setIsModalOpen(true);
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>👥 User Directory</h1>
      <SearchBar value={searchItem} onChange={setSearchItem} />
      {/* show user count */}
      <p style={{ color: "white", margin: "2rem" }}>
        {debouncedValue && filteredUsers?.length
          ? `Showing ${filteredUsers.length} of ${data?.length} Users`
          : debouncedValue
            ? `Showing ${0} of ${data?.length} Users`
            : `Showing ${data?.length} of ${data?.length} Users`}
      </p>
      {isLoading && <p>Loading Users...</p>}
      {isError && (
        <p>
          {"status" in error
            ? `Error: ${error.status}`
            : (error.message ?? "Something went wrong")}
        </p>
      )}
      {data && (
        <UserGrid
          userData={filteredUsers || data}
          onUserClick={handleUserClick}
        />
      )}
      {isModalOpen && selectedUser && (
        <UserModal user={selectedUser} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
