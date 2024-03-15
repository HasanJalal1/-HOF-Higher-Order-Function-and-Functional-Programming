// Sample list of books with authors and publication years
const books = [
    { title: "Book1", author: "author1", year: 2005 },
    { title: "Book2", author: "author2", year: 2012 },
    { title: "Book3", author: "author3", year: 2008 },
    // Add more books as needed
];

// Function to capitalize author names
function capitalizeAuthorName(book) {
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year,
    };
}

// Use filter to get books published after 2010 and map to capitalize author names
const filteredAndCapitalizedBooks = books
    .filter((book) => book.year >= 2010)
    .map(capitalizeAuthorName);

// Display the original and filtered/capitalized books
console.log("Original Books:", books);
console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);