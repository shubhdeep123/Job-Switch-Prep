import {useState, useEffect} from 'react';

type User = {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
};


export function UserSearch() {
    const [inputId, setInputId] = useState<string>("");
    const [userData, setUserData] = useState<User | null>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const controller = new AbortController();
        async function fetchUser() {
            setIsLoading(true);
            setError("");
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputId}`,{
                    signal: controller.signal
                });
                if (!response.ok) {
                    setUserData(null);
                    throw new Error("User not found");
                }
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        if (inputId) {
            fetchUser();
        }

        return () => {
            controller.abort();
        }

    }, [inputId])


    return (
      <div>
        <p>Enter a user ID between 1 and 10 to fetch user data from the API.</p>
        <input
          placeholder="Search users..."
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {(userData && !isLoading) && (
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <p>{userData?.address?.city}</p>
          </div>
        )}
      </div>
    );
}