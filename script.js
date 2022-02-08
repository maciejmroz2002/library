let saveButton = document.getElementById('saveBook');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('isRead')
const formula = document.querySelector('.formula')
let myLibraryStorage = document.getElementById('container');
let myLibrary = []


function Book(title, autor, pages, read){
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
}

function renderBooks(){
    myLibraryStorage.innerHTML = '';
    myLibrary.forEach(function(obj, index, array){
    let card = document.createElement('div')
        card.classList.add('book')

    let titleContainer = document.createElement('div')
        titleContainer.classList.add('title')
        card.appendChild(titleContainer)

    let title = document.createElement('h2')
        title.innerText = array[index].title
        titleContainer.appendChild(title)

    let info = document.createElement('div')
        info.classList.add('info')
        card.appendChild(info)

    let autor = document.createElement('p')
        autor.innerText = "Author: " + array[index].autor
        info.appendChild(autor)
    let pages = document.createElement('p')
        pages.innerText = "Pages: " + array[index].pages
        info.appendChild(pages)
    let readInfo = document.createElement('p')
        readInfo.innerText = (array[index].read == true) ? 'You read this' : 'You didnt read this';
        (array[index].read == true) ? readInfo.classList.add('done') : readInfo.classList.remove('done');

        info.appendChild(readInfo)

    let buttons = document.createElement('div')
        buttons.classList.add('buttons')
        info.appendChild(buttons)

    let deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerText = 'Delete'
        deleteButton.addEventListener('click', function(){
            array.splice(index, 1);
            renderBooks();
        })
        buttons.appendChild(deleteButton)

    let changeStatus = document.createElement('button')
        changeStatus.classList.add('change-status')
        changeStatus.innerText = 'Change read status'
        changeStatus.addEventListener('click', function(){
            array[index].read = !array[index].read
            renderBooks()
        })
        buttons.appendChild(changeStatus)
    myLibraryStorage.appendChild(card)
})
myLibraryStorage.appendChild(formula)
}

saveButton.addEventListener('click', function(){
    if (titleInput.value != ''){
        if (authorInput.value === ''){authorInput.value = 'unknown'}
        let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
        myLibrary.push(newBook)
        titleInput.value = ''
        authorInput.value = ''
        pagesInput.value = ''
        readInput.checked = false
        renderBooks()
}
})

renderBooks()

