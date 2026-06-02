function greet(username: string): string {
    return `Hello, ${username}! Welcome to TypeScript.`;
}

const username: string = "John Doe";
console.log(greet(username));