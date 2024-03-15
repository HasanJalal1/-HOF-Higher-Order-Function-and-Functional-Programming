// Function to check if a URL is valid
function isValidURL(url) {
    // Regular expression pattern for valid URLs
    const urlPattern = /^(https?|http):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/;

    // Test the URL against the pattern
    return urlPattern.test(url);
}

// Test cases
const url1 = "https://www.example.com";
const url2 = "http://123-abc.xyz";
const url3 = "ftp://invalid-url";

// Check and print the result for each URL
console.log(`${url1} is ${isValidURL(url1) ? 'valid' : 'invalid'}`);
console.log(`${url2} is ${isValidURL(url2) ? 'valid' : 'invalid'}`);
console.log(`${url3} is ${isValidURL(url3) ? 'valid' : 'invalid'}`);
