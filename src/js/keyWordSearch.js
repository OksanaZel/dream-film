/*Старая версия */
// import MoviesApi from './apiService';
// import movieListTpl from '../templates/movieList.hbs';
// import getRefs from './getRefs';

// const refs = getRefs();
// // console.log(refs.searchForm);
// // console.log(refs.movieSection);  

// const moviesApi = new MoviesApi();

// refs.searchForm.addEventListener('submit', (onSearch));
  
// function onSearch(e) {
//     e.preventDefault();
//     moviesApi.searchQuery = e.currentTarget.elements.query.value.trim();
//     if (!moviesApi.searchQuery) {
//         return
//     } 
//     // spinner.show();
//     refs.movieSection.innerHTML = ''; 
//     // refs.searchForm.reset();
//     moviesApi.resetPage(); 
//   //fetch
//     moviesApi.getMovies(searchQuery).then(renderMovies);
// }

// function renderMovies(movies) {
//     if (movies.total_results === 0) {
//         refs.warning.classList.remove('is-hidden'); 
//         return;   
//     };
//     refs.warning.classList.add('is-hidden'); 
//     refs.movieSection.innerHTML = movieListTpl(movies.results);
//  }

/*Новая версия с подключенной пагинацией */
import { pagination, getTotalPage, setPageList } from './pagination';
import MoviesApi from './apiService';
import movieListTpl from '../templates/movieList.hbs'
import getRefs from './getRefs';

const moviesApi = new MoviesApi();
const refs = getRefs();
let searchQuery = '';

getTotalPage(pagination.totalPage);

refs.navBtn.addEventListener('click', onClickNavBtn);

function onClickNavBtn(e) {
    if (e.target.nodeName !== 'BUTTON') {
    moviesApi.selectPage(pagination.currentPage);
    refs.movieSection.innerHTML = '';
    moviesApi.getMoviesWithGenre(searchQuery).then(renderMovies);
  }
}

refs.searchForm.addEventListener('submit', (onSearch));
  
function onSearch(e) {
    e.preventDefault();
    pagination.currentPage = 1;
    
    moviesApi.searchQuery = e.currentTarget.elements.query.value.trim();
    if (!moviesApi.searchQuery) {
      return;
    }
    
    refs.movieSection.innerHTML = '';
    moviesApi.resetPage();
    refs.searchForm.reset();
    
    moviesApi.getMoviesWithGenre(searchQuery).then(response => {
        renderMovies(response);
        getTotalPage(response.total_pages)
    });
}

function renderMovies(movies) {
    if (movies.total_results === 0) {
      refs.warning.classList.remove('is-hidden');
      refs.prevBtn.classList.add('is-hidden');
      refs.nextBtn.classList.add('is-hidden');
        return;   
    };
    refs.warning.classList.add('is-hidden'); 
    refs.movieSection.innerHTML = movieListTpl(movies.results);
 }

refs.pageList.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

    moviesApi.selectPage(+e.target.textContent);
    refs.movieSection.innerHTML = '';
    moviesApi.getMoviesWithGenre(searchQuery).then(renderMovies);
}

document.addEventListener('DOMContentLoaded', setPageList, false);
