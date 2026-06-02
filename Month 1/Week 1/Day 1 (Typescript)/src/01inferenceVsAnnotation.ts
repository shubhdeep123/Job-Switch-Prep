// inference
let cups = Math.random() > 0.5 ? 1 : '2'; // TypeScript infers the type of 'cups' as 'number' | 'string' based on the assigned value
// annotation
let cups2: number | string = Math.random() > 0.5 ? 1 : '2 '; // Explicitly annotate the type of 'cups2' as 'number | string'

// basic types
let isDone: boolean = false; // boolean type
let decimal: number = 6; // number type
let color: string = "blue"; // string type
let list: number[] = [1, 2, 3]; // array of numbers
let tuple: [string, number] = ["hello", 10]; // tuple type
enum Color { Red, Green, Blue } // enum type
let c: Color = Color.Green; // using enum type
let notSure: any = 4; // any type
notSure = "maybe a string instead"; // 'notSure' can hold any type