const myLibrary = [];

function Book(title, author, pages, isRead) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// dummy data
myLibrary.push(new Book('Dune', 'Frank Herbert', 253, true));
myLibrary.push(new Book('Frankenstein', 'Mary Shelley', 411, false));
showLibrary();



function addBookToLibrary() {
  title = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  isRead = document.querySelector('#is-read').checked;

  myLibrary.push(new Book(title, author, pages, isRead));

  showLibrary();
}

function showLibrary() {
  let list = document.querySelector('.list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }


  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement('div');
    div.classList.add('book');
    let t = document.createElement('div');
    let a = document.createElement('div');
    let p = document.createElement('div');
    let r = document.createElement('input');
    r.type = 'checkbox';
    r.name = 'checkbox';

    t.textContent = myLibrary[i].title;
    a.textContent = myLibrary[i].author;
    p.textContent = myLibrary[i].pages;
    r.checked = myLibrary[i].isRead;

    let hr = document.createElement('hr');

    list.appendChild(div);
    list.appendChild(hr);

    div.appendChild(t);
    div.appendChild(a);
    div.appendChild(p);
    div.appendChild(r);

    // delete button
    let delBtn = document.createElement('button');
    div.appendChild(delBtn);
    delBtn.addEventListener('click', function () {
      myLibrary.splice(i, 1);
      showLibrary();
    })


    // change book read status

    r.addEventListener('change', function () {
      myLibrary[i].isRead = r.checked;
    })


  }
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

const errorPages=document.querySelector('.error-pages');
const errorTitle=document.querySelector('.error-title');
console.log(errorPages);

pages.addEventListener('change', () => {
  if (pages.validity.patternMismatch) {
    errorPages.textContent = 'Enter a number';
  } else {
    errorPages.textContent = '';
  }
});


title.addEventListener('change',()=>{
  if(title.validity.valueMissing){
    errorTitle.textContent='shouldn\'t be empty';
  }
  else{
    errorTitle.textContent='';
  }
})


// add book to library button
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (form.validity.valid) {
    addBookToLibrary();
    form.reset();
  }
});



// display new book form button
let displayBtn = document.querySelector('.add-new');
let form = document.querySelector('form');
displayBtn.addEventListener('click', () => {
  form.classList.add('show');
})