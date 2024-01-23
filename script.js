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
    title=document.querySelector('#title').value;
    author=document.querySelector('#author').value;
    pages=document.querySelector('#pages').value;
    isRead=document.querySelector('#is-read').checked;

    console.log(title,author,pages,isRead);

    myLibrary.push(new Book(title,author,pages,isRead));
    console.table(myLibrary);


}

// add book to library button
let addBtn=document.querySelector('#add');
addBtn.addEventListener('click',function(event){
  event.preventDefault();
  addBookToLibrary();
  form.reset();
});



// display new book form button
let displayBtn=document.querySelector('.add-new');
let form=document.querySelector('form');
displayBtn.addEventListener('click',()=>{
  form.classList.add('show');
})