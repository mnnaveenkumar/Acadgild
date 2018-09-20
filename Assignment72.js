//Create a JavaScript code that prints multiples of 5 up to 50.

var num = 5

console.log('using => for loop');
for (var i = 1; i <= 10; i++){
    console.log(num + ' X '+ i +' = ' + (num * i) );
}

console.log('\nusing => while loop');
var i = 1;
while (i <= 10){
    console.log(num + ' X '+ i +' = ' + (num * i) );
    i++;
}