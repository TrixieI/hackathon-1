let cardArray = [
  { name: "albert", img: "/hackathon-1/images/albert.jpeg" },
  { name: "albert", img: "/hackathon-1/images/albert.jpeg" },
  { name: "beyonce", img: "/hackathon-1/images/beyonce.jpeg" },
  { name: "beyonce", img: "/hackathon-1/images/beyonce.jpeg" },
  { name: "bibi", img: "/hackathon-1/images/bibi.jpeg" },
  { name: "bibi", img: "/hackathon-1/images/bibi.jpeg" },
  { name: "elon", img: "/hackathon-1/images/elon.jpeg" },
  { name: "elon", img: "/hackathon-1/images/elon.jpeg" },
  { name: "michael", img: "/hackathon-1/images/michael.jpeg" },
  { name: "michael", img: "/hackathon-1/images/michael.jpeg" },
  { name: "rock", img: "/hackathon-1/images/rock.jpeg" },
  { name: "rock", img: "/hackathon-1/images/rock.jpeg" },
];

//define variables and get DOM element

let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(grid, cardArray);
  arrangeCard();
  playAgain.addEventListener("click", replay);

  imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach((img) => img.addEventListener("click", flipCard));
});

function createBoard(grid, array) {
  popup.style.display = "none";
  array.forEach((arr, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", "blank.png");
    img.setAttribute("data-id", index);
    grid.appendChild(img);
  });
}

// arrangeCard function

function arrangeCard() {
  cardArray.sort(() => 0.5 - Math.random());
}

// flip Card function

function flipCard() {
  let selected = this.dataset.id;
  cardsSelected.push(cardArray[selected].name);
  cardsId.push(selected);
  this.classList.add("flip");
  this.setAttribute("src", cardArray[selected].img);
  if (cardsId.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  let imgs = document.querySelectorAll("img");
  let firstCard = cardsId[0];
  let secondCard = cardsId[1];
  if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
    alert("you have found a match");
    cardsWon += 1;
    scoreBoard.innerHTML = cardsWon;
    setTimeout(checkWon, 500);
  } else {
    imgs[firstCard].setAttribute("src", "blank.png");
    imgs[secondCard].setAttribute("src", "blank.png");
    alert("wrong, please try again");
    imgs[firstCard].classList.remove("flip");
    imgs[secondCard].classList.remove("flip");
  }
  cardsSelected = [];
  cardsId = [];
  clicks += 1;
  clickBoard.innerHTML = clicks;
}

function checkWon() {
  if (cardsWon == cardArray.length / 2) {
    alert("You won");
    setTimeout(() => (popup.style.display = "flex"), 300);
  }
}

function replay() {
  arrangeCard();
  grid.innerHTML = "";
  createBoard(grid, cardArray);
  cardsWon = 0;
  clicks = 0;
  clickBoard.innerHTML = 0;
  scoreBoard.innerHTML = 0;
  popup.style.display = "none";
}
