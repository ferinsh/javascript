
const myLibrary = []

function Book(isbn, title, author, read){
    this.isbn = isbn
    this.title = title
    this.author = author
    this.read = read
}

function addBookToLibrary(){
    // Accessing form elements
    var isbnInput = document.getElementById('isbn');
    var titleInput = document.getElementById('title');
    var authorInput = document.getElementById('author');
    var readInput = document.getElementById('read');

    // Getting values from form elements
    var isbn = isbnInput.value;
    var title = titleInput.value;
    var author = authorInput.value;
    var read = readInput.value;


    myLibrary.push(new Book(isbn, title, author, read));
}

function addBookToTable(){
    addBookToLibrary();
    var i = myLibrary.length - 1;
    
    var table = document.getElementById("booklist");
    var newRow = table.insertRow();
    
    var tableISBN = newRow.insertCell(0);
    var tableTitle = newRow.insertCell(1);
    var tableAuthor = newRow.insertCell(2);
    var tableRead = newRow.insertCell(3);
    
    tableISBN.innerHTML = myLibrary[i].isbn;
    tableTitle.innerHTML = myLibrary[i].title;
    tableAuthor.innerHTML = myLibrary[i].author;
    tableRead.innerHTML = myLibrary[i].read;


    

}

var BTN_addBook = document.getElementById('add-book');
var form = document.getElementById('form-new-book');
var inputReadCheck = document.querySelectorAll('#readcheck');
var table = document.getElementById("booklist");
console.log(inputReadCheck)

//BTN_addBook.addEventListener('click', /*CODE TO BE ADDED*/ );

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    addBookToTable();
    form.reset(); // Reset the form after adding the book
});

inputReadCheck.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            checkbox.parentElement.innerHTML = 'Read <input id="readcheck" type="checkbox" checked>';
        }
        if(checkbox.checked == false){
            checkbox.parentElement.innerHTML = 'Not Read <input id="readcheck" type="checkbox">';
        }
        
    });
});


