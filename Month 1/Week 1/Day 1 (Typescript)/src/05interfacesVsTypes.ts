// without using custom types repeating the same structure again and again
// function makeChai(order: { type: string; sugar: boolean }) {
//     return `Making a ${order.type} chai with ${order.sugar ? "sugar" : "no sugar"}`;
// }

// function serveChai(order: { type: string; sugar: boolean } | string) {
//     if (typeof order === "object") {
//         return `Serving a ${order.type} chai with ${order.sugar ? "sugar" : "no sugar"}`;
//     }
//     return `Serving a ${order} chai`;
// }

// affter using custom types
type ChaiOrder = {
    type: string;
    sugar: boolean;
}

function makeChai(order: ChaiOrder) {
    return `Making a ${order.type} chai with ${order.sugar ? "sugar" : "no sugar"}`;
}

function serveChai(order: ChaiOrder | string) {
    if (typeof order === "object") {
        return `Serving a ${order.type} chai with ${order.sugar ? "sugar" : "no sugar"}`;
    }
    return `Serving a ${order} chai`;
}

// interfaces vs types

// typescript can use both interfaces and types to define the shape of an object, but they have some differences.

// interfaces are primarily used to define the structure of an object, and they can be extended and implemented by classes. They are also open-ended, meaning you can add new properties to an existing interface.
// types are more versatile and can be used to define not only the structure of an object but also union types, intersection types, and more. They are closed-ended, meaning once a type is defined, you cannot add new properties to it.

// Example of using an interface

interface TeaRecipe {
    water: number;
    sugar: number;
}

class MasalaTea implements TeaRecipe {
    water = 100;
    sugar = 10;
}

// interface cupSize {
//     size: "small" | "medium" | "large";
// }

// class chaiCup implements cupSize {
//     size: "small" | "medium" | "large" = "medium";
// }


// this does not work because we cannot add new properties to an existing type, but we can do this with interfaces
// type response = {ok:true} | {ok:false}

// class myResponse implements response {
//     ok:boolean = true;
// }

// with interfaces we can do this
interface Response {
    ok: boolean;
}

class myResponse implements Response {
    ok:boolean = true;
}

// union types with type aliases also known as "LITERAL TYPES"
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t:TeaType) {
    console.log(`You ordered a ${t} chai.`);
}

// intersection types with type aliases
type BaseChai = {
    teaLeaves:number;
}

type Extra = {
    masala: number;
}

type MasalaChai = BaseChai & Extra;

const myChai: MasalaChai = {
    teaLeaves: 5,
    masala: 2
}


// example 2

type User = {
    username: string;
    email?: string; // optional property
}

const user1: User = {
    username: "john_doe",
}

const user2: User = {
    username: "jane_doe",
    email: "jane@example.com"
}

// readonly values

type Config = {
    readonly apiKey: string;
    timeout: number;
}

const config: Config = {
    apiKey: "12345",
    timeout: 5000
}

config.timeout = 3000; // This is allowed
// config.apiKey = "67890"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
