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
switch(getRandNum(0, 3)){
	case 0:
		CPUmove = ROCK;
		break;
	case 1:
		CPUmove = PAPER;
		break;
	case 2:
		CPUmove = SCISSORS;
		break;
	default:
		console.log("Something went wrong D:");
}

console.log(CPUmove);
