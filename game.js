const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
  let randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice];

}
console.log(getComputerChoice());


/*For example, if Math.random() gives you 0.5, then 0.5 * 3 is 1.5. This means 
it's like you rolled a "virtual dice" with three sides and got a result of 1.5.
However, you can't have a choice of 1.5 (it's not in your list of choices). 
To fix this, you use Math.floor() to round down that number to the nearest whole number. 
So, 1.5 becomes 1, 2.7 becomes 2, and so on.
*/
