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
let tramaFilm = qS(".tramaFilm");
let immagineCercata = qS(".immagineCercata");

const URLS_API = [
  "https://www.omdbapi.com/?t=John+Wick&apikey=4214e970",
  "https://www.omdbapi.com/?t=inception&apikey=4214e970",
  "https://www.omdbapi.com/?t=warrior&apikey=4214e970",
];

let dataFilm = [];
let i = 0;

const nextImage = () => {
  i++;
  if (i > 2) {
    i = 0;
  } else {
    i++;
  }
  console.log(i);
};

const prevImage = () => {
  i--;
  if (i < 0) {
    i = 2;
  } else {
    i++;
  }
  console.log(i);
};

URLS_API.forEach((element) => {
  fetch(element)
    .then((response) => response.json())
    .then((data) => {
      dataFilm.push(data);
      popolaCarosello(dataFilm);
    });
});

const popolaCarosello = (film) => {
  let listItem = document.createElement("li");
  titoloFilm.textContent = film[i].Title;
  immagineCarosello.src = film[i].Poster;
  film[i].Actors.split(", ").forEach((element, index) => {
    listItem.textContent = element;
    listItem.id = index;
    attoriList.appendChild(listItem);
  });
  durataFilm.textContent = `${film[i].Runtime.split(" ")[0]} minuti`;
  annoUscita.textContent = film[i].Year;
  genereFilm.textContent = film[i].Genre;
};

console.log(i);
console.log("prova");