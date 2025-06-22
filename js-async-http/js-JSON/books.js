// Function to fetch and work with JSON data
function fetchBooks() {
  // Fetch the JSON data from the file
  fetch("books.json")
    .then(response => response.json())
    .then(data => {
      // Data contains the JSON content
      console.log("List of Books:");
      data.forEach(book => {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Publication Year: ${book.publicationYear}`);
        console.log("----------------------------------");
      });

      // Add other operations with the JSON data here.
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

// Call the function to fetch and work with JSON data
fetchBooks();

// fetch function -> responsible for fetching and processing JSON data.
// this functoin returns a promise that resolves to the response object representing the response to the request.

// .then method -> used to handle the response data when it becomes available.
// It receives a callback function that parses the response as JSON data using response.JSON.
// response.json also returns a promise.
// Another .then method is used to handle the parse JSON data.
