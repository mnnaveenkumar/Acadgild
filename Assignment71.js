// Write a JavaScript conditional statement to find the largest of five numbers
var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;

if ( (num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5) ){
    console.log (num1 + " is the Largest.");
}else if ( (num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5) ){
    console.log (num2 + " is the Largest.");
}else if ( (num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5) ){
    console.log (num3 + " is the Largest.");
}else if ( (num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5) ){
    console.log (num4 + " is the Largest.");
}else{
    console.log (num5 + " is the Largest.");
}