/* jshint esversion: 6 */

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
		return 2;
	}
 
	else if(playerSelection.toUpperCase() === "ROCK" 
	  && computerSelection === "PAPER") {  
		console.log("You lose! " + computerSelection
		 + " beats " + playerSelection + "!" );
		return 0;
	}    
    
	else if(playerSelection.toUpperCase() === "PAPER"
	  && computerSelection === "SCISSORS"){   
		console.log("You lose! " + computerSelection
		 + " beats " + playerSelection + "!" );
		return 0;
	} 

	else if(playerSelection.toUpperCase() === "SCISSORS"
	   && computerSelection === "ROCK"){
		console.log("You lose! " + computerSelection
		 + " beats " + playerSelection + "!" );
		return 0;
	}

	else{
		console.log("You win! " + playerSelection
		  + " beats " + computerSelection + "!");

		return 1;
	}
}


	const container = document.querySelector('#container');
	const score = document.createElement('p');
	const buttons = document.createElement('div');

	const results = document.createElement('div');
	

	let pScore = 0; let CPUscore = 0;
	score.classList.add('score');

	const btn = document.querySelectorAll('.btn');
	btn.forEach(function(btn){
		btn.addEventListener('click', function(e){
			if(rpsRound(e.target.id, computerPlay()) === 1){
				pScore++;
				results.textContent = "You win!";
			}
			else if(rpsRound(e.target.id, computerPlay()) === 0){
				CPUscore++;
				results.textContent = "You lose!";
			}
			else{
				results.textContent = "Draw!";
			}

			// score.textContent = "this is the score " + pScore;
			score.textContent = `PLAYER: ${pScore} CPU: ${CPUscore}`;
			container.appendChild(score);
			container.appendChild(results);
			
			if(pScore >= 5) results.textContent += " PLAYER WINS THE GAME!";
			else if(CPUscore >= 5) results.textContent += " CPU WINS THE GAME!";
		});
	})

//Main game function
function game(){
	let userInput;
	// for(let i = 0; i < 5; i++){
	//         userInput = prompt("ROCK, PAPER, SCISSORS, GO!");
	//         rpsRound(userInput, computerPlay());
	// }




	console.log("GAME OVER!");




}
game();
