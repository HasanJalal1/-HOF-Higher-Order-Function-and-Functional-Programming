// Function to check if a LinkedIn profile URL is valid
function isValidLinkedInURL(url) {
    // Regular expression pattern for valid LinkedIn profile URLs
    const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/;

    // Test the URL against the pattern
    return linkedInPattern.test(url);
}

// Test cases
const url1 = "https://www.linkedin.com/in/johndoe123";
const url2 = "https://www.linkedin.com/in/mary_smith";
const url3 = "https://www.linkedin.com/in/user123!";

// Check and print the result for each LinkedIn profile URL
console.log(`${url1} is ${isValidLinkedInURL(url1) ? 'valid' : 'invalid'}`);
console.log(`${url2} is ${isValidLinkedInURL(url2) ? 'valid' : 'invalid'}`);
console.log(`${url3} is ${isValidLinkedInURL(url3) ? 'valid' : 'invalid'}`);