// add-new-book - event listner/hook
// add-book - event listner/hook
// title, author, pages p tag - hook
// Read and remove buttons
// popup

let myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}



function addBookToLibrary(author, title, pages) {
    const newBook = new Book(author, title, pages);
    myLibrary.push(newBook);
}

addBookToLibrary('Song of Fire and Ice', 'George Martin', 200)


console.log(myLibrary);
