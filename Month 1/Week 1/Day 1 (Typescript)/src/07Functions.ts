function makeChai(type: string, sugar: boolean): string {
    return `Making a ${type} chai with ${sugar ? "sugar" : "no sugar"}`;
}

makeChai("masala", true);

// void functions
function brewChai() {
    console.log("Brewing chai...");
}

function serveChai(): void {
    console.log("Serving chai...");
}

// optional parameters in functions
function orderChai(type: string, sugar?: boolean): string {
    return `Ordering a ${type} chai with ${sugar ? "sugar" : "no sugar"}`;
}

orderChai("ginger"); // This is valid because the 'sugar' parameter is optional
orderChai("ginger", true); // This is also valid

// default parameters in functions
function prepareChai(type: string, sugar: boolean = false): string {
    return `Preparing a ${type} chai with ${sugar ? "sugar" : "no sugar"}`;
}
prepareChai("lemon"); // This is valid because the 'sugar' parameter has a default value of 'false'
prepareChai("lemon", true); // This is also valid, and it overrides the default value of 'sugar' with 'true'

// rest parameters in functions
function mixChai(...ingredients: string[]): string {
    return `Mixing chai with the following ingredients: ${ingredients.join(", ")}`;
}
mixChai("water", "tea leaves", "sugar"); // This is valid because the 'ingredients' parameter can accept any number of string arguments


// function with multiple return types
function makeOrder(order:string) {
    if(!order) return null; // This is valid because the function can return 'null' if the 'order' parameter is falsy
    return `Making a ${order} chai`; // This is valid because the function can return a string if the 'order' parameter is truthy
}