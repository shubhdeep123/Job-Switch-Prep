// Interfaces
// Interfaces in TypeScript are a powerful way to define the structure of an object. They allow you to specify the properties and methods that an object should have, without providing the implementation details. This is particularly useful for defining contracts in your code, ensuring that certain objects adhere to a specific structure.

interface Shop {
    readonly name: string;
    location: string;
    staff?: number; // Optional property, denoted by the '?' symbol
    open(): void; // Method signature without implementation
    close(): void; // Method signature without implementation
}

const myShop: Shop = {
    name: "The Tea House",
    location: "Downtown",
    open() {
        console.log(`${this.name} is now open!`);
    },
    close() {
        console.log(`${this.name} is now closed!`);
    }
}

// functions can also be defined in interfaces using function types. This allows you to specify the signature of a function that an object should implement.
interface DiscountCalculator {
    (price: number, discount: number): number; // This is a function type interface, which defines the signature of a function that takes two parameters and returns a number   
}

const calculateDiscount: DiscountCalculator = (price, discount) => {
    return price - (price * discount / 100);
}

// index signatures

interface ChaiRating {
    [flavor: string]: number; // This is an index signature, which allows us to define properties with dynamic keys of type 'string' and values of type 'number'
}

const ratings: ChaiRating = {
    "Masala": 4.5,
    "Ginger": 4.0,
    "Cardamom": 4.8
};

// interface merging
// In TypeScript, interfaces can be merged together. This means that if you declare multiple interfaces with the same name, TypeScript will automatically merge their properties and methods into a single interface. This is particularly useful for extending existing interfaces without having to modify the original interface definition.

// interface Chai {
//     flavor: string;
// }
// interface Chai {
//     spiceLevel: number;
// }
// const myChai: Chai = {
//     flavor: "Masala",
//     spiceLevel: 5
// }

// intefaces extendes
interface Beverage {
    name: string;
    serve(): void;
}

interface MasalaChai {
    flavor: string;
    spiceLevel: number;
}

interface Chai extends Beverage, MasalaChai {
    flavor: string;
    name: string;
    spiceLevel: number;
    serve(): void;
}