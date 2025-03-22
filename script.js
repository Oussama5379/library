let myLibrary = [];
let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (e) => {
	let title = document.querySelector("#title").value;
	let author = document.querySelector("#author").value;
	let nbPages = document.querySelector("#nbPages").value;
	let IsRead = document.querySelector("#read").checked;
	addBookToLibrary(title, author, nbPages, IsRead);
	e.preventDefault();
});

function Book(title, author, nbPages, IsRead) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.nbPages = nbPages;
	this.IsRead = IsRead;
}

function addBookToLibrary(title, author, nbPages, IsRead) {
	let newBook = new Book(title, author, nbPages, IsRead);
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
	if (book.IsRead) {
		readButton.textContent = "Unread";
	} else {
		readButton.textContent = "Read";
	}
	removeButton.textContent = "Remove";
	nbPages.textContent = book.nbPages;
	author.innerHTML = "<b>By</b> " + book.author;
	result.appendChild(title);
	result.appendChild(readButton);
	result.appendChild(removeButton);
	result.appendChild(nbPages);
	result.appendChild(author);
	result.id = book.id;
	container.appendChild(result);
	removeButton.addEventListener("click", (e) => {
		myLibrary = myLibrary.filter((item) => item.id !== e.target.parentNode.id);
		e.target.parentNode.remove();
	});
	readButton.addEventListener("click", (e) => {
		if (e.target.textContent == "Read") {
			e.target.textContent = "Unread";
			changeStatus(e.target.parentNode.id);
		} else {
			e.target.textContent = "Read";
			changeStatus(e.target.parentNode.id);
		}
	});
}
function changeStatus(id) {
	for (let item in myLibrary) {
		if (item.id == id) {
			item.IsRead = !item.IsRead;
		}
	}
}
