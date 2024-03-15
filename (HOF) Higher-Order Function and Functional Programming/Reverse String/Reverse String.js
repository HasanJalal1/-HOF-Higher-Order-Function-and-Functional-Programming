// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
}

// Main program
const input = "Hello, World!";

// Display the original string
console.log("Original String:", input);

// Use setTimeout to create a delay of 2 seconds
setTimeout(() => {
    // Reverse the string after the delay
    const reversedString = reverseString(input);

    // Display the reversed string
    console.log("Reversed String:", reversedString);
}, 2000); // 2000 milliseconds (2 seconds) delay