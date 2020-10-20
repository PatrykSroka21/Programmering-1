const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("write a number", (answer) =>{
    let numbers = answer.split(' ');
    console.log(numbers);

    let num1 = numbers[0].split('')
    let num2 = numbers[1].split(' ')

    console.log(num1);

    if(num1[0] > num2[0]){
        console.log("First number is the largest")
    }
}