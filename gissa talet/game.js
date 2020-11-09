const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Guess a number between 1-10")

let Nmb = Math.floor(Math.random() * 10) + 1; 

rl.line(guess) => {
    const answer = guess
    Number = guess
    rl.close();
};



if (guess == Nmb) {
    console.log("You win!!!")
}
else if (guess != Nmb){
    console.log("You dumb!!")
}
