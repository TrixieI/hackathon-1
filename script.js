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

let card1;
let card2;
let cardClicked;

let container = document.querySelector(".container");
for (let i = 0; i < 12; i++) {
  let card = document.createElement("div");
  card.addEventListener("click", flip);
  card.classList.add("card");
  container.appendChild(card);
  let front = document.createElement("img");
  let back = document.createElement("img");
  front.classList.add("front");
  back.classList.add("back");
  back.classList.add([i]);
  front.classList.add([i]);
  front.addEventListener("mouseleave", click2);
  front.src = array[i];
  back.src = "/hackathon-1/images/backcover.jpeg";
  card.appendChild(front);
  card.appendChild(back);
}

function flip(e) {
  this.classList.toggle("flip");
  card1 = e.target.classList[1];
  console.log(card1);
  cardClicked = true;
  //   prompt("Who's the person behind the card?");
}

function click2(e) {
  if (cardClicked == true) {
    card2 = e.target.classList[1];
    console.log(card2);
  }
}
