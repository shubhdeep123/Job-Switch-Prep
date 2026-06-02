function wrapInArray<T>(value: T): T[] {
    return [value];
}

wrapInArray(5); // returns [5] with type number[]
wrapInArray("hello"); // returns ["hello"] with type string[]  


function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

pair(1, "one"); // returns [1, "one"] with type [number, string]
pair(true, { name: "Alice" }); // returns [true, { name: "Alice" }] with type [boolean, { name: string }]


// generic interfaces

interface Box<T> {
    contents: T;
}

const numberBox: Box<number> = { contents: 42 };
const stringBox: Box<string> = { contents: "hello" };

// example for response

interface ApiResponse<T> {
    status: number;
    data: T;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    return fetch(url)
        .then(response => response.json())
        .then(data => ({
            status: 200,
            data: data as T
        }));
}
