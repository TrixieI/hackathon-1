let array = [
  "MemoryGame/images/albert.jpeg", // 0
  "./images/beyonce.jpg", // 1
  "../images/bibi.jpeg", // 2
  "images/michael.jpeg", // 3
  "images/rock.jpeg", // 4
  "images/elon.jpeg", // 5
  "images/albert.jpeg", // 6
  "images/beyonce.jpg", // 7
  "images/bibi.jpeg", // 8
  "images/michael.jpeg", // 9
  "images/rock.jpeg", // 10
  "images/elon.jpeg", // 11
  ];

  arrangeCard();

  let cardClicked;
  let cardsSelected = [];
  let score = 0;
  let scoreTab = document.querySelector(".score");
  scoreTab.innerHTML = `Score: ${score}`;

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
    back.src = "images/backcover.jpeg";
    card.appendChild(front);
    card.appendChild(back);
  }

  let cards = document.querySelectorAll("div");

  function flip(e) {
    this.classList.toggle("flip");
    let selected = this.dataset.id;
    cardsSelected.push(array[selected]);
    if (cardsSelected.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    if (cardsSelected[0] === cardsSelected[1]) {
      alert("Match!");
      score++;
      scoreTab.innerHTML = `Score: ${score}`;
      cardsSelected = [];
      if (score == 6) {
        alert("YOU WON!");
        let text =
        "Do you want to play again? \nClicking cancel will redirect you to the credits screen";
        if (confirm(text) == true) {
          location.reload();
        } else {
          window.location.replace("/hackathon-1/credits.html");
        }
      }
    } else {
      alert("Mismatch!");
      score = 0;
      scoreTab.innerHTML = `Score: ${score}`;
      for (let loop of cards) {
        loop.classList.remove("flip");
      }
      cardsSelected = [];
    }
  }

  function arrangeCard() {
    array.sort(() => 0.5 - Math.random());
  }
