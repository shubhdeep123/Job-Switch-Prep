// Type assetion is a way to tell the TypeScript compiler to treat a value as a specific type, even if it cannot infer that type on its own. This can be useful when you have more information about the type of a value than the compiler does.

// There are two syntaxes for type assertion in TypeScript: the "angle-bracket" syntax and the "as" syntax. The "as" syntax is generally preferred, especially in JSX contexts, because it avoids conflicts with HTML tags.

// Example of type assertion using the "as" syntax

let someValue: unknown = "This is a string"; // 'someValue' is of type 'unknown'
let strLength: number = (someValue as string).length; // We assert that 'someValue' is a string, allowing us to access the 'length' property    

type Book = {
    name:string
};
let bookString = '{"name":"Money Hill"}';
let bookObject = JSON.parse(bookString) as Book; // We assert that the result of JSON.parse is of type 'Book'
console.log(bookObject.name); // Output: Money Hill


const input = document.getElementById("myInput") as HTMLInputElement; // We assert that the element with id "myInput" is an HTMLInputElement
input.value = "Hello, TypeScript!"; // Now we can access the 'value' property without TypeScript errors


let value:any;

value = "Hello, World!";
value = 42;
value = { name: "Alice" };
value = [1, 2, 3];
value.toUpperCase(); // No error, but this will cause a runtime error if 'value' is not a string

let value2: unknown;

value2 = "Hello, World!";
value2 = 42;
value2 = { name: "Alice" };
value2 = [1, 2, 3];

if (typeof value2 === "string") {
    console.log(value2.toUpperCase()); // No error, and this is safe because we've checked the type
}

try {
    
} catch (error) {
    // console.error(error.message);
    if (error instanceof Error) {
        console.error(error.message); // Now we can safely access 'message' because we've checked that 'error' is an instance of 'Error'
    }
}

const data:unknown = "This is some data";
const strData:string = data as string; // We assert that 'data' is a string

// Never type represents values that never occur. It is often used to indicate that a function never returns or that a variable can never have a value.

type Role = "admin" | "user";

function redirectBasedOnRole(role:Role):void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user homepage...");
        return;
    }
    role // role is of type 'never' here, because we've handled all possible cases of 'Role'
    // but if we had an additional role like "guest" that we forgot to handle, TypeScript would give us an error here, reminding us to handle all cases of the 'Role' type.
    // you try by putting "guest" in the Role type and see the error
}

function neverReturns(): never {
    while (true) {}
}