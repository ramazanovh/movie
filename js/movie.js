const movieID = new URLSearchParams(location.search).get("id");
const detailPage = document.querySelector(".detailPage");
let api = "https://api.tvmaze.com/shows";
let details;
fetch(api + "/" + movieID)
  .then((res) => res.json())
  .then((data) => {
    renderDetails(data);
    console.log(data);
  });
