let card = document.querySelectorAll(".card");
let backCard = document.querySelectorAll(".back");
let frontCard = document.querySelectorAll(".front");
let numberOfGuesses = 0;
let src = backCard.src;

for (let i = 0; i < card.length; i++) {
  console.log(card[i]);
  card[i].addEventListener("click", flip);
}

function flip(e) {
  e.target.parentNode.classList.toggle("flip");
  if (e.target.src == src) {
    console.log(e.target.style);
    console.log("correct");
  } else {
    transform = backCard;
    console.log("incorrect");
  }
}

for (let i = 0; i < numberOfGuesses; i++) {
  if (numberOfGuesses === 6) {
    console.log("Sorry, try again");
  }
}
