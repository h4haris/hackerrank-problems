//* (?<=regex_2)regex_1 

//* The positive lookbehind (?<=) asserts regex_1 to be immediately preceded by regex_2. Lookbehind is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

//* For example,

////? (?<=[a-z])[aeiou] : matches 'e' in 'he1o' which is followed by a lowercase letter

//* Task

// You have a test string 'S'.
// Write a regex which can match all the occurences of digit which are immediately preceded by odd digit.

var regexPattern = /(?<=[13579])\d/g;

function processData(Test_String) {    
    var Array = Test_String.match(regexPattern);
    console.log("Number of matches :", Array.length);
} 

processData('123Go!'); //Number of matches : 1