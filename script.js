const myLibrary = [];

function Book(title, author, nbPages) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.nbPages = nbPages;
}

function addBookToLibrary(title, author, nbPages) {
	let newBook = new Book(title, author, nbPages);
	myLibrary.push(newBook);
	displayBook(newBook);
}
function displayBook(book) {
	let container = document.querySelector(".main-content");
	let title = document.createElement("h3");
	let readButton = document.createElement("button");
	let removeButton = document.createElement("button");
	let nbPages = document.createElement("h4");
	let author = document.createElement("p");
	let result = document.createElement("div");
	result.classList.add("book");
	title.textContent = book.title;
	readButton.textContent = "read";
	removeButton.textContent = "remove";
	nbPages.textContent = book.nbPages;
	author.innerHTML = "<b>By</b> " + book.author;
	result.appendChild(title);
	result.appendChild(readButton);
	result.appendChild(removeButton);
	result.appendChild(nbPages);
	result.appendChild(author);
	container.appendChild(result);
	removeButton.addEventListener("click", (e) => {
		e.target.parentNode.remove();
	});
}
