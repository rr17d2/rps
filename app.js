//console.log("hello");
setTimeout(() =>
   window.location.reload(1) , 70000);
let userScore = 0;
let computerScore = 0;
const userScore_spam = document.getElementById("user-score");
const computerScore_spam = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); 

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
//getComputerChoice();

function convertToWord(letter) {
	if (letter == "r") return "The Rock";
	if (letter == "p") return "paperBOI";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	//const smallUserWord = "user".fontsize(3).sub();
	//const smallCompWord = "comp".fontsize(3).sub();
	const youWinColor = ". You win!".fontcolor("green");
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_spam.innerHTML = userScore;
	computerScore_spam.innerHTML = computerScore;
	//result_p.innerHTML = convertToWord(user) + " beats " + 
		//convertToWord(computer) + ". You win!";
	result_p.innerHTML = `${convertToWord(userChoice)} beats 
		${convertToWord(computerChoice)}${youWinColor}`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}


function lose(userChoice, computerChoice) {
	//console.log("User loses");
	//const smallUserWord = "user".fontsize(3).sub();
	//const smallCompWord = "comp".fontsize(3).sub();
	const youLoseColor = ". You lose!".fontcolor("red");
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_spam.innerHTML = userScore;
	computerScore_spam.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(computerChoice)} beats 
		${convertToWord(userChoice)}${youLoseColor}`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
	//console.log("Its a draw");
	//const smallUserWord = "user".fontsize(3).sub();
	//const smallCompWord = "comp".fontsize(3).sub();
	const drawColor = " draw.".fontcolor("yellow");
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `Its a ${drawColor}`;
	userChoice_div.classList.add('yellow-glow');
	setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	//console.log("user choice =>" + userChoice);
	//console.log("computer choice =>" + computerChoice);	
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			//console.log("User wins");
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			//console.log("User loses");
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			//console.log("Its a draw");
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"));
		//console.log("hey you clicked on the rock");
		
	paper_div.addEventListener('click', () => game("p")); 
		//console.log("hey you clicked on paper");

	scissors_div.addEventListener('click', () => game("s")); 
		//console.log("hey you clicked on scissors");
}
main(); 