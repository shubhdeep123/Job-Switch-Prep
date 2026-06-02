// UNION TYPES AND LITERAL TYPES
let subs: string | number = "1M"; // 'subs' can be either a string or a number
subs = 123; // valid assignment

let apiRequestStatus: "success" | "error" | "pending" = "pending"; // 'apiRequestStatus' can only be one of the specified string literals
apiRequestStatus = "success"; // valid assignment
// apiRequestStatus = "loading"; // Error: Type '"loading"' is not assignable to type '"success" | "error" | "pending"'

let airlineSeat: "window" | "aisle" | "middle" = "window"; // 'airlineSeat' can only be one of the specified string literals
airlineSeat = "aisle"; // valid assignment
// airlineSeat = "front"; // Error: Type '"front"' is not assignable to type '"window" | "aisle" | "middle"'    



// ANY TYPE
let orders = ["45", "67", "89"]; // TypeScript infers 'orders' as 'string[]'
// let currentOrder:any // 'currentOrder' can hold any type of value
let currentOrder: string | undefined; // 'currentOrder' can be a string or undefined

for (let order of orders) {
    if (order == "888") {
        currentOrder = order; // 'currentOrder' can be assigned a string value
    }
}

console.log(currentOrder); // Output: undefined (if "888" is not in the orders array) or "888" (if it is in the orders array)