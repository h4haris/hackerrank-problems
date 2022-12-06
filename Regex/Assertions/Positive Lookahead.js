//* regex_1(?=regex_2) 

//* The positive lookahead (?=) asserts regex_1 to be immediately followed by regex_2. The lookahead is excluded from the match. It does not return matches of regex_2. The lookahead only asserts whether a match is possible or not.

//* For example,

////? c(?=o): matches 2nd 'c' in chocolate which is followed by 'o'

//* Task

// You have a test string 'S'.
// Write a regex that can match all occurrences of o followed immediately by oo in 'S'.


var regexPattern = /o(?=oo)/g;

function processData(Test_String) {    
    var Array = Test_String.match(regexPattern);
    console.log("Number of matches :", Array.length);
} 

processData('gooooo!'); //Number of matches : 3