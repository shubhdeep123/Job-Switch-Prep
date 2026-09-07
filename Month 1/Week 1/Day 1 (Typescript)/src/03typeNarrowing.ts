// type narrowing is the process of refining the type of a variable within a specific scope, often using control flow statements like if, switch, or type guards. This allows TypeScript to provide more accurate type information and catch potential errors at compile time.

// Example of type narrowing using an if statements

function printLength(value: string | number): void {
    if (typeof value === "string") {
        // Within this block, TypeScript knows 'value' is a string
        console.log(`The length of the string is: ${value.length}`);
    } else {
        // Within this block, TypeScript knows 'value' is a number
        console.log(`The number is: ${value}`);
    }
}

function getChai(kind : string | number) {
    if (typeof kind === "string") {
        return `You ordered a ${kind} chai.`;
    }
    return `Chai Order : ${kind}`;
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `serving regular chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "You ordered a small chai.";
    } else if (size === "medium" || size === "large") {
        return "Make more chai";
    } else {
        return `You ordered a chai of size ${size}.`;
    }
}

class KulhadChai {
    serve() {
        return "Serving chai in a kulhad!";
    }
}

class GlassChai {
    serve() {
        return "Serving chai in a glass!";
    }   
}

function serve(chai: KulhadChai | GlassChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve(); // TypeScript knows 'chai' is of type 'KulhadChai' here
    }
}

// TYPE GAURDS and custom type predictions (is)

type ChaiOrder ={
    type: string;
    sugar: boolean;
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "boolean"

    )
}

function serveChaiOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving a ${item.type} chai with ${item.sugar ? "sugar" : "no sugar"}`;
    }
    return `Serving a ${item} chai`
}

type MasalaChai = {
    type: "masala";
    spiceLevel: number;
}

type GingerChai = {
    type: "ginger";
    amount: number;
}

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(chai: Chai) {
    switch (chai.type) {
        case "masala":
            return `Making a masala chai with spice level ${chai.spiceLevel}`;
        case "ginger":
            return `Making a ginger chai with amount ${chai.amount}`;
        case "elaichi":
            return `Making an elaichi chai with aroma ${chai.aroma}`;
    }
}

function brew(order: MasalaChai | GingerChai | ElaichiChai) {
    if ("spiceLevel" in order) {
        return `Brewing a masala chai with spice level ${order.spiceLevel}`;
    }
}

function isStringArray (arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
