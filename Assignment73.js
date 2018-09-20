// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" along with number and
// for the multiples of five print "Buzz" along with number.
// For numbers which are multiples of both three and five print
// "FizzBuzz" along with number.

var i = 1;
var bothfound = false;
var fizzfound = false;
var buzzfound = false;

while(i <= 100){

    if(i % 3 == 0){
        fizzfound = true;
    }
    if(i % 5 == 0){       
        buzzfound = true;
    }
    if( (i % 3 == 0) && (i % 5 == 0) )
    {
        bothfound = true; 
    }
    
    if(bothfound)
    {
        console.log(i + ' FizzBuzz');
    }
    else if(fizzfound){
        console.log(i + ' Fizz');

    }
    else if(buzzfound){
        console.log(i + ' Buzz');
    }
    else{
        console.log(i);
    }

    i++;
    bothfound = false;
    fizzfound = false;
    buzzfound = false;
}
