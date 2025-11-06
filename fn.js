// declare

// Arrow Function
const calculateSquare = (val1) => {
  return val1 * val1;
};

// Named function
function calSq(val1) {
  return val1 * val1;
}

// call

// function call

// let sq1 = calculateSquare(12);
// let sq2 = calSq(24);

// console.log(sq1)
// console.log(sq2)


const findPrime = (num) => {

    if(num == 2 || num == 1){
        console.log("Prime");
        return;
    }

    let isPrime = true;
    
    for(let i = 2; i * i <= num; i++ ){
        if(num % i == 0){
            isPrime = false;
        }
    }

    console.log(isPrime ? "Prime" : "Not Prime")
}

findPrime(1)