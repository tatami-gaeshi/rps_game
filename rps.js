//ROCK PAPER SCISSORS
//
//GAME START
	//WHILE ROUND < 5
	//CPU generates num between 0 - 2 (corresponding to each option)
	//User submits choice
	//Choices compared
	//Declare winner
	//End game
//
//

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let CPUmove;

//Get random number between range
function getRandNum(min, max){
	return Math.floor(Math.random()*max) + min;
}
//CPU chooses a move based on outcome of RNG
function computerPlay() {
	switch(getRandNum(0, 3)){
		case 0:
			return ROCK;
		case 1:
			return PAPER;
		case 2:
			return SCISSORS;
		default:
			console.log("Something went wrong D:");
	}
}

CPUmove = computerPlay();
// console.log(CPUmove);

//Plays a round of RPS
function rpsRound(playerSelection, computerSelection){
	if(playerSelection.toUpperCase() === computerSelection){  
		console.log("Draw!"); 
	}
 
	else if(playerSelection.toUpperCase() === "ROCK" 
	  && computerSelection === "PAPER") {  
		console.log("You lose! " + computerSelection
		 + " beats " + playerSelection + "!" );
	}    
    
	else if(playerSelection.toUpperCase() === "PAPER"
	  && computerSelection === "SCISSORS"){   
		console.log("You lose! " + computerSelection
		 + " beats " + playerSelection + "!" );
	} 

	else if(playerSelection.toUpperCase() === "SCISSORS"
	   && computerSelection === "ROCK"){
		console.log("You lose! " + computerSelection
		 + " beats " + playerSelection + "!" );
	}

	else{
		console.log("You win! " + playerSelection
		  + " beats " + computerSelection + "!");
	}
}

//Main game function
function game(){
	let userInput;
	for(let i = 0; i < 5; i++){
		userInput = prompt("ROCK, PAPER, SCISSORS, GO!");
		rpsRound(userInput, computerPlay());
	}

	console.log("GAME OVER!")
}

game();
