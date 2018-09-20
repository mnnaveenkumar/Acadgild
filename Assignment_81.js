// Write a JavaScript function named isPrime that accepts a parameter which checks if the given
// number is prime number or not and returns true or false.

console.log(isMyPrime(98)); // prints false
console.log(isMyPrime(97)); // prints true

function isMyPrime(num){
    var i = 0, j = 0;

    for(i = 1; i <= num; i++){
        if (num % i == 0){
            j++;
        }
    }
    if(j==2){
        return true;
    }
    else
        return false;
}