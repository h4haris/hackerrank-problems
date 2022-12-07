//* The '^' symbol matches the position at the start of a string.
//* The '$' symbol matches the position at the end of a string.

//* Task

// You have a test string 'S'. Your task is to match the pattern Xxxxx. 
// Here, 'x' denotes a word character, and 'X' denotes a digit.

////? 'S' must start with a digit 'X' and end with '.' symbol.
////? 'S' should be 6 characters long only.

var regexPattern = /^\d{1}\w{4}.$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('0qwer.'); //true