const qS = (element) => document.querySelector(element);

let titoloFilm = qS(".titoloFilm");
let btnPrev = qS("#btnPrev");
let btnNext = qS("#btnNext");
let immagineCarosello = qS(".immagineCarosello");
let attoriList = qS(".attoriList");
let durataFilm = qS("#durataFilm");
let annoUscita = qS("#annoUscita");
let genereFilm = qS("#genereFilm");
let inputCerca = qS(".inputCerca");
let formCercaFilm = qS(".formCercaFilm");
let tramaFilm = qS(".tramaFilm");
let immagineCercata = qS(".immagineCercata");
let titoloCerca = qS("#titoloCerca");
let carosello = qS(".carosello");
let primoAttore = qS("#primoAttore");
let secondoAttore = qS("#secondoAttore");
let terzoAttore = qS("#terzoAttore");
let tramaTitolo = qS(".tramaTitolo");

const URLS_API = [
  "https://www.omdbapi.com/?t=John+Wick&apikey=4214e970",
  "https://www.omdbapi.com/?t=inception&apikey=4214e970",
  "https://www.omdbapi.com/?t=warrior&apikey=4214e970",
];

let dataFilm = [];
let i = 0;

const popolaCarosello = () => {
  let actorArray = dataFilm[i].Actors.split(", ");
  titoloFilm.textContent = dataFilm[i].Title;
  immagineCarosello.src = dataFilm[i].Poster;
  primoAttore.textContent = actorArray[0];
  secondoAttore.textContent = actorArray[1];
  terzoAttore.textContent = actorArray[2];
  durataFilm.textContent = `${dataFilm[i].Runtime.split(" ")[0]} minuti`;
  annoUscita.textContent = dataFilm[i].Year;
  genereFilm.textContent = dataFilm[i].Genre;
};

URLS_API.forEach((element) => {
  fetch(element)
    .then((response) => response.json())
    .then((data) => {
      dataFilm.push(data);
      popolaCarosello();
    });
});

document.addEventListener("DOMContentLoaded", () => {
  btnNext.addEventListener("click", (e) => {
    i++;
    if (i > 2) {
      i = 0;
    }
    popolaCarosello();
  });

  btnPrev.addEventListener("click", (e) => {
    i--;
    if (i < 0) {
      i = 2;
    }
    popolaCarosello();
  });
});

formCercaFilm.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`https://www.omdbapi.com/?t=${inputCerca.value}&apikey=4214e970`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      tramaFilm.textContent = data.Plot;
      immagineCercata.src = data.Poster;
      titoloCerca.textContent = data.Title;
      tramaTitolo.style.display = "block";
    });
});
