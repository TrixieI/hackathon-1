let array = [
  "/hackathon-1/images/albert.jpeg", // 0
  "/hackathon-1/images/beyonce.jpg", // 1
  "/hackathon-1/images/bibi.jpeg", // 2
  "/hackathon-1/images/michael.jpeg", // 3
  "/hackathon-1/images/rock.jpeg", // 4
  "/hackathon-1/images/elon.jpeg", // 5
  "/hackathon-1/images/albert.jpeg", // 6
  "/hackathon-1/images/beyonce.jpg", // 7
  "/hackathon-1/images/bibi.jpeg", // 8
  "/hackathon-1/images/michael.jpeg", // 9
  "/hackathon-1/images/rock.jpeg", // 10
  "/hackathon-1/images/elon.jpeg", // 11
];

arrangeCard();

let cardClicked;
let cardsSelected = [];
let cardsId = [];
let score = 0;

let container = document.querySelector(".container");
for (let i = 0; i < 12; i++) {
  let card = document.createElement("div");
  card.addEventListener("click", flip);
  card.classList.add("card");
  card.setAttribute("data-id", [i]);
  container.appendChild(card);
  let front = document.createElement("img");
  let back = document.createElement("img");
  front.classList.add("front");
  back.classList.add("back");
  front.src = array[i];
  back.src = "/hackathon-1/images/backcover.jpeg";
  card.appendChild(front);
  card.appendChild(back);
}

let cards = document.querySelectorAll("div");

function flip(e) {
  this.classList.toggle("flip");
  let selected = this.dataset.id;
  console.log(selected);
  cardsSelected.push(array[selected]);
  if (cardsSelected.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  if (cardsSelected[0] === cardsSelected[1]) {
    alert("Match!");
    score++;
    cardsSelected = [];
    if (score == 6) {
      alert("YOU WON!");
      let text =
        "Do you want to play again? \n clicking cancel will redirect you to the credits screen";
      if (confirm(text) == true) {
        location.reload();
      } else {
        window.location.replace("/hackathon-1/credits.html");
      }
    }
  } else {
    alert("Mismatch!");
    score--;
    for (let loop of cards) {
      loop.classList.remove("flip");
    }
    cardsSelected = [];
  }
}

function arrangeCard() {
  array.sort(() => 0.5 - Math.random());
}
