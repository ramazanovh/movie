let inputEl = document.querySelector(".input-el");
let inputBtn = document.querySelector(".inputBtn");
let cards = document.querySelector(".cards");
let allmovies;
let api = "https://api.tvmaze.com/shows";
let paginationCount = 0;

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    renderMovies(data);
    allmovies = data;
  });
