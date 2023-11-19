document.addEventListener('DOMContentLoaded', function() {
    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    function deleteBook(index) {
        myLibrary.splice(index, 1);
        render();
    }

    function render() {
        const libraryEl = document.querySelector('#library');
        libraryEl.innerHTML = '';
        myLibrary.forEach((book, index) => {
            const bookEl = document.createElement('div');
            bookEl.classList.add('book');
            bookEl.innerHTML = `
                <div class="bookheader">
                    <p>${book.title}</p>
                    <span>${book.author}</span>
                </div>
                <div class="bookcard">
                    <p>${book.pages} pages</p>
                    <p>${book.read ? 'Read' : 'Not Read'}</p>
                    <button class="delete-book-btn" onclick="deleteBook(${index})">Delete</button>
                </div>
            `;
            libraryEl.appendChild(bookEl);
        });
    }

    function addBookToLibrary() {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#read').checked;
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        console.log(myLibrary);
        render();
        document.querySelector('#new-book-form').reset();
        document.querySelector('#new-book-form').style.display = 'none';
    }

    const newBookBtn = document.querySelector('#new-book-btn');

    newBookBtn.addEventListener('click', () => {
        document.querySelector('#new-book-form').style.display = 'flex';
    });

    document.querySelector('#new-book-form').addEventListener('submit', (event) => {
        event.preventDefault();
        addBookToLibrary();
    });

    document.querySelector('#library').addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-book-btn')) {
            const index = event.target.dataset.index;
            deleteBook(index);
        }
    });

});
