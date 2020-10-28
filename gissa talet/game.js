const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Guess the random generated number between 1 - 10  ', (answer) => {


    rl.close();
});

let Nmb = Math.floor(Math.random() * 25) + 1; 

if (answer == Nmb) {
    console.log("You win!!!")
}
else if (answer != Nmb){
    console.log("You dumb!! Try harder!!")
}
