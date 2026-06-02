// class is a blueprint for creating objects. It defines the properties and methods that an object can have. In TypeScript, we can define a class using the '
class Chai {
    flavor: string;
    spiceLevel: number;
    price: number;

    constructor(flavor: string, spiceLevel: number, price: number) {
        this.flavor = flavor;
        this.spiceLevel = spiceLevel;
        this.price = price;
    }
}

let masalaChai = new Chai("Masala", 5, 10);
console.log(masalaChai); // Output: Chai { flavor: 'Masala', spiceLevel: 5, price: 10 }

// access modifiers
// In TypeScript, we can use access modifiers to control the visibility of class members. The three access modifiers are 'public', 'private', and 'protected'.  

class SecretChai {  
    public flavor: string; // This is the default access modifier, so we can omit 'public' and it will still be public
    private secretIngredient: string = "Cardamom"; // This property is private and can only be accessed within the 'SecretChai' class
    protected price: number = 15; // This property is protected and can be accessed within the 'SecretChai' class and its subclasses, but not from outside the class hierarchy

    constructor(flavor: string) {
        this.flavor = flavor;
    }

    revealSecret() {
        return `The secret ingredient in ${this.flavor} chai is ${this.secretIngredient}.`;
    }
}

let secretChai = new SecretChai("Masala");
console.log(secretChai.flavor); // Output: Masala
// console.log(secretChai.secretIngredient); // This will cause an error because 'secretIngredient' is private and cannot be accessed outside the class
console.log(secretChai.revealSecret()); // Output: The secret ingredient in Masala chai is Cardamom.    


// other way to define private properties

class wallet {
    #balance: number = 1000; // This is a private field, denoted by the '#' prefix. It can only be accessed within the 'wallet' class.

    getBalance() {
        return this.#balance; // We can access the private field within the class using 'this.#balance'
    }
}

// readonly properties
class Menu {
    readonly name: string; // This property is readonly and can only be assigned a value once, either at the time of declaration or within the constructor 
    constructor(name: string) {
        this.name = name; // We can assign a value to 'name' in the constructor, but we cannot change it afterwards
    }
}

// getters and setters
class Order {
    private _quantity: number = 1; // This is a private property to store the quantity of the order
    get quantity() {
        return this._quantity; // The getter allows us to access the value of '_quantity' from outside the class
    }
    set quantity(value: number) {
        if (value < 1) {
            throw new Error("Quantity must be at least 1."); // The setter allows us to set the value of '_quantity' from outside the class, but we can also add validation logic to ensure that the quantity is valid
        }
        this._quantity = value;
    }
}

let order = new Order();
console.log(order.quantity); // Output: 1
order.quantity = 5;
console.log(order.quantity); // Output: 5
// order.quantity = 0; // This will cause an error because the setter throws an error if the quantity is less than 1

// static properties and methods
class Utility {
    static pi: number = 3.14159; // This is a static property, which means it belongs to the class itself rather than to instances of the class
    static calculateCircumference(radius: number): number { // This is a static method, which can be called on the class itself without needing to create an instance
        return 2 * Utility.pi * radius; // We can access the static property 'pi' within the static method using 'Utility.pi'
    }
}
console.log(Utility.pi); // Output: 3.14159
console.log(Utility.calculateCircumference(5)); // Output: 31.4159

// abstract classes and methods
// An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It can contain abstract methods, which are methods that are declared but not implemented in the abstract class. Subclasses of the abstract class must provide an implementation for the abstract methods.

abstract class Beverage {
    abstract prepare(): void; // This is an abstract method, which means it must be implemented by any subclass of 'Beverage'
}

class Coffee extends Beverage {
    prepare() {
        console.log("Preparing coffee...");
    }
}

class Tea extends Beverage {
    prepare() {
        console.log("Preparing tea...");
    }
}   

// composition over inheritance
// Composition is a design principle that promotes the idea of building complex objects by combining simpler ones, rather than relying on inheritance. In TypeScript, we can achieve composition by creating classes that contain instances of other classes as properties.

class Engine {
    start() {
        console.log("Engine started.");
    }
}

class Car {
    private engine: Engine; // The 'Car' class has an instance of the 'Engine' class as a property  
    constructor() {
        this.engine = new Engine(); // We create an instance of 'Engine' within the constructor of 'Car'
    }
    start() {
        this.engine.start();
        console.log("Car started.");
    }
}

let myCar = new Car();
myCar.start(); // Output: Engine started. Car started.