// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Change 100 to your desired range
}

// Main program
let delayInSeconds = 3;
let remainingTime = delayInSeconds;

// Display a countdown message every second
const countdownInterval = setInterval(() => {
    console.log(`Generating random number in ${remainingTime} seconds...`);
    remainingTime--;

    // When the countdown reaches 0, generate the random number
    if (remainingTime === 0) {
        clearInterval(countdownInterval); // Clear the countdown interval
        const randomNumber = generateRandomNumber();
        console.log(`Random number generated: ${randomNumber}`);
    }
}, 1000); // 1000 milliseconds (1 second) interval