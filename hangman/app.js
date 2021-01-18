//Get words to guess in a array for 3 different difficulties getting 3 different variables for easy, medium, hard.

var easy = ["word", "sword", "cat"]
var medium = ["computer", "phone", "adroid"]
var hard = ["complication" , "programming" , "calculating"]

//Welcome message || let the user choose diffiluty

console.log("Welcome to the game of hangman")
console.log("Chose between difficulties by typing 1 for easy, 2 for medium and 3 for hard") 

const { exit } = require('process')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(' ', (answer) => {

  console.log(`Your difficulty is set to: ${answer}`);

  rl.close();
});

//If statement for chosing a different difficulty
//Get a random word from chosen difficulty array by using "Math.Floor() + arrayLength so we can than split the word as it stays an array and it makes easier to do a statement for guesses"
if (answer == 1) {
    var easyWord = items[Math.floor(Math.random() * easy.length)];
}
else if (answer == 2) {
    var mediumWord = items[Math.floor(Math.random() * medium.length)];
}
else if (answer == 3) {
    var hardWord = items[Math.floor(Math.random() * hard.length)];
}
else{
    console.log("put in a number between 1-3")
}


//Split the word with "split" so it is an array which makes it easier with to make a guess on a single letter as every letter will be a single element and tell the length of a word (console.log)

//Let the user choose if he is guessing the whole word or a single letter "if statement"
 
//For loop for tries (no need for extra variables)
for (let tries = 3; tries < 0; tries--) {
  console.log(tries + "tries left" )
  
}
//If statement for right/wrong guess on the letter
 
//If statement for right/wrong guess on the word

//If statement for if tries = 0 to end the game
if (tries = 0) {
  console.log("Want to play again? Press 1 to play again or 2 to exit")

}
//Ask the user to play again (if statement), easiest way to restart the process 

//If statement for playing again or closing the application (end app with exit function)


