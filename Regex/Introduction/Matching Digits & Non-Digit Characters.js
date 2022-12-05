//* '\d' matches any digit [0-9].
//* '\D' matches any character that is not a digit.

//* Task

////? You have a test string 'S'. Your task is to match the pattern
////? xxXxxXxxxx 
////? Here 'x' denotes a digit character, and 'X' denotes a non-digit character.

var regexPattern = /\d\d\D\d\d\D\d\d\d\d/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('06-11-2015'); //true