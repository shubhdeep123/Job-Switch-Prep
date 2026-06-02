// ARRAYS, TUPLES, AND ENUMS

//most common way to declare an array
let numbers: number[] = [1, 2, 3, 4, 5];
let characters: string[] = ["a", "b", "c", "d"];

// another way to declare an array using generics
let strings: Array<string> = ["hello", "world"];

// array of objects
type User = {
    name: string;
    age: number;
}

let users: User[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

// readonly array

let readonlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// readonlyNumbers.push(6); // This will cause an error because 'readonlyNumbers' is a readonly array and cannot be modified    

let readonlyStrings: readonly string[] = ["hello", "world"];

// multi-dimensional arrays

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// TUPLES

// a tuple is a fixed-length array where each element can have a different type. It is defined using square brackets [] and specifying the types of each element in order.
let chaiTuple : [string, number] = ["masala", 5]; // A tuple that represents a type of chai and its spice level

chaiTuple[0] = "ginger"; // This is valid because the first element of the tuple is of type 'string'
chaiTuple[1] = 3; // This is valid because the second element of the tuple is of type 'number'

// chaiTuple[0] = 5; // This will cause an error because we are trying to assign a number to the first element of the tuple which is of type 'string'
// chaiTuple[1] = "spicy"; // This will cause an error because we are trying to assign a string to the second element of the tuple which is of type 'number'    
// let chaiTuple : [string, number] = [5, "masala"]; 
// we can also have optional elements in tuples

let optionalTuple: [string, number?] = ["ginger"]; // The second element is optional

// readonly tuples
let readonlyTuple: readonly [string, number] = ["lemon", 2];
// readonlyTuple[0] = "mint"; // This will cause an error because 'readonlyTuple' is a readonly tuple and cannot be modified   

// named tuples using type aliases
const Chai : [type: string, spiceLevel: number] = ["masala", 5];

// ENUMS
// an enum is a way to define a set of named constants. It is defined using the 'enum' keyword followed by the name of the enum and a block of named constants.

enum Color {
    Red, // 0
    Green, // 1
    Blue // 2
}

let c: Color = Color.Green; // We can use the enum values like this
console.log(c); // Output: 1

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
} 

let d: Direction = Direction.Left; // We can use the enum values like this
console.log(d); // Output: LEFT

enum Status {
    Success = 200,
    NotFound, //201
    ServerError, //202
}

let s: Status = Status.NotFound; // We can use the enum values like this
console.log(s); // Output: 201 // this is because the enum values are auto-incremented starting from the first value which is 200 in this case. So, NotFound is 201 and ServerError is 202.

enum ChaiType {
    Masala = "Masala",
    Ginger = "Ginger",
    Lemon = "Lemon"
}

function orderChai(t: ChaiType) {
    console.log(`You ordered a ${t} chai.`);
}

orderChai(ChaiType.Masala); // Output: You ordered a Masala chai.
orderChai(ChaiType.Ginger);
// orderChai("masala") // This will cause an error because "masala" is not a valid value of the 'ChaiType' enum. We should use 'ChaiType.Masala' instead to refer to the enum value.

enum Random {
    ID = Math.random(),
    NAME = "Random Name",
    IS_RANDOM = 1
} 

