// Original object with items and prices in USD
const pricesInUSD = {
    item1: 25,
    item2: 40,
    item3: 15,
    // Add more items as needed
};

// Function to convert prices to Indian Rupees
function convertToINR(priceInUSD) {
    const exchangeRate = 80;
    return priceInUSD * exchangeRate;
}

// Use the map function to create a new object with prices in INR
const pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, priceInUSD]) => [
        item,
        convertToINR(priceInUSD),
    ])
);

// Display the original and converted prices
console.log("Original Prices (USD):", pricesInUSD);
console.log("Converted Prices (INR):", pricesInINR);