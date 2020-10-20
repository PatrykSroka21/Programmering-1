function fizzBuzz(number) {
    for(var i = 0; i < number; i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            var i = "FizzBuzz";
            console.log(i)
        }
        else if(i % 3 === 0){
            var i = "Fizz"
            console.log(i)
        }
        else if(i % 5 === 0){
            var i = "Buzz"
            console.log(i)
        }
        else if(i == 100){
        stop
        }
    }
}