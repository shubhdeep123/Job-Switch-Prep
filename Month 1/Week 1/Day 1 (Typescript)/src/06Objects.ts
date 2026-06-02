// declaration of an object

// structural typing
// in structural typing, the type of an object is determined by its structure rather than its name. This means that if two objects have the same properties and types, they are considered to be of the same type, even if they have different names.
// ex1
const chai = {
    type: "masala",
    spiceLevel: 5,
    isHot: true
}

// behind the scene typescript is handling types

// {
//     type:string;
//     spiceLevel:number;
//     isHot:boolean;
// }

// ex2
let tea: {
    type: string;
    spiceLevel: number;
    isHot: boolean;
}

tea = {
    type: "ginger",
    spiceLevel: 3,
    isHot: false
}

// ex3
type Tea = {
    type: string;
    spiceLevel: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    type: "ginger",
    spiceLevel: 4,
    ingredients: ["ginger", "tea leaves", "milk", "sugar"]
}


// DUCK TYPING
// if it looks like a duck and quacks like a duck, then it's a duck

// ex 1
type Cup = {size:string};

let smallCup: Cup = {size: "small"};
let bigCup = {size: "big", material: "ceramic"}; // This is valid because 'bigCup' has at least the properties of 'Cup', even though it has additional properties

// excess property checks
// when we assign an object literal to a variable of a specific type, TypeScript performs an excess property check to ensure that the object literal does not have any properties that are not defined in the type. This is a way to catch potential errors where you might have misspelled a property name or included an unintended property.
smallCup = bigCup; // This is valid because 'bigCup' has at least the properties of 'Cup', even though it has additional properties
// smallCup = {size: "small", material: "ceramic"}; // This will cause an error because we are directly assigning an object literal that has an excess property 'material' which is not defined in the 'Cup' type. However, if we assign it to a variable first, it will work because the excess property check is only performed on object literals assigned directly to variables of a specific type. 

// ex2 
type Brew = {
    brewTime: number;
}

const coffee = {brewTime: 5, type: "espresso"};
const teaBrew: Brew = coffee; // This is valid because 'coffee' has at least the properties of 'Brew', even though it has additional properties


// ex3 
type USER = {
    name: string;
    age: number;
}

// const user: USER = {name: "Alice", age: 30}; // This is valid because the object literal has exactly the properties defined in the 'USER' type

// ex4

type Item = {
    name: string;
    price: number;
}

type Address = {
    street: string;
    city: string;
    country: string;    
}

type Order = {
    id: number;
    item: Item[];
    shippingAddress: Address;
}

// Partial updates to objects
// TypeScript provides a utility type called 'Partial' that allows you to create a new type with all properties of the original type set to optional. This is useful for scenarios where you want to update only a subset of an object's properties without having to provide values for all properties.

type Chai = {
    name: string;
    spiceLevel: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with the following properties:", updates);
    // Here you would typically merge the updates with the existing chai object and return the updated object
    // For demonstration purposes, we'll just return a new chai object with default values and the updates applied
}

updateChai({spiceLevel: 4}); // This is valid because 'Partial<Chai>' allows us to provide only a subset of the properties defined in the 'Chai' type
updateChai({name: "Masala Chai", isHot: true}); // This is also valid for the same reason
updateChai({}); // This is valid as well, since all properties are optional in 'Partial<Chai>'

// Required properties in objects

type ChaiOrder = {
    type?: string;
    spiceLevel?: number;
    isHot?: boolean;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("Placing order for:", order);
}

placeOrder({type: "masala", spiceLevel: 5, isHot: true}); // This is valid because 'Required<ChaiOrder>' requires all properties to be provided
// placeOrder({type: "masala", spiceLevel: 5}); // This will cause an error because 'isHot' is missing, and all properties are required in 'Required<ChaiOrder>'

// PICk and Omit
type User = {
    id: number; 
    name: string;
    email: string;
    password: string;
}

type UserProfile = Pick<User, "id" | "name" | "email">; // This creates a new type 'UserProfile' that includes only the 'id', 'name', and 'email' properties from the 'User' type

const userProfile: UserProfile = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
}

type UserWithoutPassword = Omit<User, "password">; // This creates a new type 'UserWithoutPassword' that includes all properties from the 'User' type except for 'password' 

const userWithoutPassword: UserWithoutPassword = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
}