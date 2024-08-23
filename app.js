// let api = "https://www.omdbapi.com/?apikey=9de0e3e7&t=";
let api = "https://www.omdbapi.com/?i=tt3896198&apikey=9de0e3e7&t=";

let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let genre = document.querySelector("#genre");
let actors = document.querySelector("#actors");
let director = document.querySelector("#directors");
let awards = document.querySelector("#awards");
let collection = document.querySelector("#collection");
let lang = document.querySelector("#lang");
let rating = document.querySelector("#ratings");
let poster = document.querySelector("#poster");
let movie_details = document.querySelector("#details");
let error_msg = document.querySelector("#error");
let rate = document.querySelector("#rate");

movie_details.classList.add("hidden");

function search() {
  let moviename = document.querySelector("#moviename");
  let query = api + moviename.value;
  moviename.value = "";
  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      error_msg.innerHTML = "";
      movie_details.classList.add("hidden");
      if (data.Error === "Movie not found!") {
        error_msg.innerHTML = "Movie not found!";
      } else {
        movie_details.classList.remove("hidden");
        title.innerHTML = data.Title;
        desc.innerHTML = data.Plot;
        genre.innerHTML = data.Genre;
        actors.innerHTML = data.Actors;
        director.innerHTML = data.Director;
        awards.innerHTML = data.Awards;
        collection.innerHTML = data.BoxOffice;
        lang.innerHTML = data.Language;
        rating.innerHTML = data.imdbRating;
        poster.src = data.Poster;
      }

      if (data.imdbRating > 7) {
        rate.innerHTML = "Worth to Watch";
        rate.style.backgroundColor = "green";
      } else if (data.imdbRating >= 6 && data.imdbRating <= 7) {
        rate.innerHTML = "Good to Watch";
        rate.style.backgroundColor = "blue";
      } else {
        rate.innerHTML = "Time Waste";
        rate.style.backgroundColor = "red";
      }
    });
}
