import { fetchTopBooks } from './fetchTopBooks';

fetchTopBooks().then(dataMarkupAll).catch();

const ulBooksList = document.querySelector('.books-list');



function dataMarkupAll(data) {
  const dataMarkupAll = data
    .map(elem => {
      console.log(elem);
      for (let i = 0; i <= 5; i++)
        return `
        <li class="top-books-list">
    
        
        <a class="books-list-link" href="">
      <div class="thumb">
        <img class="books-list-img" src="${elem.books[0].book_image}"  alt="${elem.books[0].title}">
          <div class="actions-card">
            <p class="discription">quick view</p>
          </div>
        </div>
      <div class="content">
        <h3 class = "books-list-name">${elem.books[0].title}</h3>
        <p class= "books-list-text">${elem.books[0].author}</p>
      </div>
        </a>

        
       <a class="books-list-link" href="">
        <div class="thumb">
        <img class="books-list-img" src="${elem.books[1].book_image}"  alt="${elem.books[1].title}">
          <div class="actions-card">
            <p class="discription">quick view</p>
          </div>
          </div>
        <div class="content">
        <h3 class = "books-list-name">${elem.books[1].title}</h3>
        <p class= "books-list-text">${elem.books[1].author}</p>
        </div>
        </a>



        <a class="books-list-link" href="">
        <div class="thumb">
        <img class="books-list-img" src="${elem.books[2].book_image}"  alt="${elem.books[2].title}">
          <div class="actions-card">
            <p class="discription">quick view</p>
          </div>
          </div>
        <div class="content">
        <h3 class = "books-list-name">${elem.books[2].title}</h3>
        <p class= "books-list-text">${elem.books[2].author}</p>
        </div>
        </a>


        <a class="books-list-link" href="">
        <div class="thumb">
        <img class="books-list-img" src="${elem.books[3].book_image}"  alt="${elem.books[3].title}">
          <div class="actions-card">
            <p class="discription">quick view</p>
          </div>
          </div>
        <div class="content">
        <h3 class = "books-list-name">${elem.books[3].title}</h3>
        <p class= "books-list-text">${elem.books[3].author}</p>
        </div>
        </a>
       

        <a class="books-list-link" href="">
        <div class="thumb">
        <img class="books-list-img" src="${elem.books[4].book_image}"  alt="${elem.books[4].title}">
          <div class="actions-card">
            <p class="discription">quick view</p>
          </div>
          </div>
          
        <div class="content">
        <h3 class ="books-list-name">${elem.books[4].title}</h3>
        <p class= "books-list-text">${elem.books[4].author}</p>
        </div>
        </a>
        
        <button data-filter="${elem.list_name}" class="btn-more">see more</button>
        </li>`;
    })
    .join(' ');
  ulBooksList.innerHTML = dataMarkupAll;
}


