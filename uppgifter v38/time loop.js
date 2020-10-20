const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number = rl.question("write a number", (answer) => {

    if(answer){
        console.log("you have to write something dumbass")
        return;
    }
    else if (answer < 1 || answer > 100) {
        console.log("The number must be smaller the 100 and greater or equal to 1");
        return;
    }
    for (let i = 1; i <= answer; ++i){
        console.log(i + "abracadabra")
    }
})

