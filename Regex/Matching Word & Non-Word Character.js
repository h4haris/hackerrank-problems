//* '\w' will match any word character.

//! Word characters include alphanumeric characters (a-z, A-Z and 0-9) and underscores (_).

//* '\W' matches any non-word character.

//! Non-word characters include characters other than alphanumeric characters (a-z, A-Z and 0-9) and underscore (_).

//* Task

////? You have a test string 'S'. Your task is to match the pattern 
////? xxxXxxxxxxxxxxXxxx
////? Here 'x' denotes any word character and 'X' denotes any non-word character.

////? 'S' must start with a digit 'X' and end with '.' symbol.
////? 'S' should be 6 characters long only.

var regexPattern = /\w{3}\W\w{10}\W\w{3}/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('www.hackerrank.com'); //true