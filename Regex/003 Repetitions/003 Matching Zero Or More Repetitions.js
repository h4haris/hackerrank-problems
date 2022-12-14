//* The '*' tool will match zero or more repetitions of character/character class/group.

//* For Example:

////? w* : It will match the character w 0 or more times.imes.
////? [xyz]* : It will match the characters x, y or z 0 or more times. 1 or more times.
////? \d* : It will match any digit 0 or more times.

//* Task

// You have a test string 'S'.
// Write a regex that will match 'S' using the following conditions:

////? 'S' should begin with 2 or more digits.
////? After that, 'S' should have 0 or more lowercase letters.
////? 'S' should end with 0 or more uppercase letters

var regexPattern = /^\d{2}\d*[a-z]*[A-Z]*$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('14'); //true
processData('1akldflkvnlDFVDFVDFVD'); //false