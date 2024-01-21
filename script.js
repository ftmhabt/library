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
    title=prompt("enter the title");
    author=prompt("enter the author");
    pages=prompt("enter the pages");
    isRead=prompt("is read or not? y/n");

    myLibrary.push(new Book(title,author,pages,isRead==='y'?true:false));
    console.table(myLibrary);
}



// const book1=new Book("Horizon","me",235,true);
// console.log(book1.info());

