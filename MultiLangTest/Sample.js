// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Prompt user for input and parse to integer
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter first number: ", num1 => {
    readline.question("Enter second number: ", num2 => {
        const result = add(parseInt(num1), parseInt(num2));
        console.log(`Result: ${result}`);
        readline.close();
    });
});
