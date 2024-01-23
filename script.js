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

    showLibrary();
}

function showLibrary(){
  let list=document.querySelector('.list'); 
  while(list.firstChild)  {
    list.removeChild(list.firstChild);
  }
  

  for (let i = 0; i < myLibrary.length; i++) {
    let div= document.createElement('div');
    div.classList.add('book');
    let t= document.createElement('div');
    let a= document.createElement('div');
    let p= document.createElement('div');
    let r= document.createElement('div');
    
    t.textContent=myLibrary[i].title;
    a.textContent=myLibrary[i].author;
    p.textContent=myLibrary[i].pages;
    r.textContent=myLibrary[i].isRead;

    let hr=document.createElement('hr');

    list.appendChild(div);
    list.appendChild(hr);

    div.appendChild(t);
    div.appendChild(a);
    div.appendChild(p);
    div.appendChild(r);
    
    
    
  }
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