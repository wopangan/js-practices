let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all the fields correctly.')
    }
}

// to show book details in the management system.

function showBooks() {
    // map function to iterate through the books array
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>No. of Pages: </strong>${book.pagesNumber} page(s)</p>
        <button onclick="editBook(${index})">Edit</button>` // to call the editbook() function, passing the index of the book as a parameter.
    );
    document.getElementById('books').innerHTML = booksDiv.join(''); // to concatenate all the HTML elements generated for each book into a single thing.
}

function editBook(index) {
    const book = books[index]; // fetches the book from the 'books' array using the given 'index'.
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    books.splice(index, 1); // Remove old entry to prevent duplicate entries
    showBooks(); // Refresh list
}

// clears the book details by assigning empty value to element using ID's.
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}