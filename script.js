let card = document.getElementsByClassName('card');
let backCard = document.getElementsByClassName('backCard');
let frontCard = document.getElementsByClassName('frontCard');
let numberOfGuesses = 0;


backCard.addEventListener('click', flip)

function flip(e){

	let firstFlip = e.target.style.(transform flip)
	if (e.target.style.img = img){
		console.log("correct")
	} 
	else{
		transform = backCard
		console.log("incorrect")
	}

}

for (let i = 0; i < numberOfGuesses; i++;){
	if (numberOfGuesses === 6){
		console.log("Sorry, try again")
	}

}

