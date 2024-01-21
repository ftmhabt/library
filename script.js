const myLibrary = [];

function Book(title,author,pages,isRead) {
    
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.isRead=isRead;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead?"read":"not read yet"} `;
}

function addBookToLibrary() {
  // do stuff here
}


// const book1=new Book("Horizon","me",235,true);
// console.log(book1.info());

