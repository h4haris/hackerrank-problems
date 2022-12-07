//* The character class '[ ]' matches only one out of several characters placed inside the square brackets.

//* Task

// You have a test string 'S'.
// Write a regex that will match 'S' with following conditions:

////? 'S' must be of length: 6
////? First character: 1, 2 or 3
////? Second character: 1, 2 or 0
////? Third character: x, s or 0
////? Fourth character: 3, 0 , A or a
////? Fifth character: x, s or u
////? Sixth character: . or ,

var regexPattern = /^[123]{1}[120]{1}[xs0]{1}[30Aa]{1}[xsu]{1}[.,]{1}$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('1203x.'); //true
processData('3000s..'); //false
processData('13000u.'); //false