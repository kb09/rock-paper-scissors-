const choices = ["rock", "paper", "scissors"];



function ComputerChoice(){

  let randomChoice = Math.floor(Math.random() * choices.length) 
  return ("The computers choice was " + choices[randomChoice]);

}
console.log(ComputerChoice());

/*For example, if Math.random() gives you 0.5, then 0.5 * 3 is 1.5. This means 
it's like you rolled a "virtual dice" with three sides and got a result of 1.5.
However, you can't have a choice of 1.5 (it's not in your list of choices). 
To fix this, you use Math.floor() to round down that number to the nearest whole number. 
So, 1.5 becomes 1, 2.7 becomes 2, and so on.
*/

// player choice ( case sensitive and cannot input other options )
function playerInput() {

  let playerSelection = prompt("Type rock, paper, or scissors"); 

  while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    playerSelection = prompt("You have entered an incorrect option. Please type rock, paper, or scissors.");
    playerSelection = playerSelection.toLowerCase();
  }

  console.log("Your choice was " + playerSelection);
  return ("Your choice was " + playerSelection);
}

// playerInput();

function gameRound() {
  let randomChoice = ComputerChoice();
  let playerSelection = playerInput();

  if (randomChoice.toLocaleLowerCase() === playerSelection.toLocaleLowerCase()) {
    return "It's a tie!";
  }
  // write game code here 
  console.log("It's a tie!");
}
gameRound();