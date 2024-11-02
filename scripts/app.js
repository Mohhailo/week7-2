console.log("tere")
const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const movieAasta = document.querySelector(".userInputAasta");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitleToDisply = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let aastaInStorage = localStorage.getItem("aasta");
let imageUrlInStorage = localStorage.getItem("imageUrl");

console.log(titleInStorage);
console.log(aastaInStorage);
console.log(imageUrlInStorage);

if(titleInStorage && imageUrlInStorage && aastaInStorage) {
movieTitleToDisply.textContent = titleInStorage;
container.style.backgroundImage = `linear-gradient(rgba(68, 68, 136, 0.445),rgba(207, 71, 71, 0.568)), 
   url("${imageUrlInStorage}")`;

}


btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value; 
  let movieAastaInput = movieAasta.value;
  let posterUrlInput = moviePosterUrl.value;

  console.log(movieTitleInput);
  console.log(movieAastaInput);
  console.log(posterUrlInput);


  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("aasta", movieAastaInput);
  localStorage.setItem("imageUrl", posterUrlInput);
  movieTitleToDisply.textContent = movieTitleInput;
  container.style.backgroundImage = `linear-gradient(rgba(68, 68, 136, 0.445),rgba(207, 71, 71, 0.568)), 
   url("${posterUrlInput}")`;

   movieTitle.value = "";
   movieAasta.value = "";
   moviePosterUrl.value = "";

});

