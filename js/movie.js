const movieID = new URLSearchParams(location.search).get("id");
const detailPage = document.querySelector(".detailPage");
let api = "https://api.tvmaze.com/shows";
let details;
