//* regex_1(?!regex_2) 

//* The negative lookahead (?!) asserts regex_1 not to be immediately followed by regex_2. Lookahead is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

//* For example,

////? c(?!o): matches 1st 'c' in chocolate which is not followed by 'o'

//* Task

// You have a test string 'S'.
// Write a regex which can match all characters which are not immediately followed by that same character.

//* Example

// If S= goooo, then regex should match 'g'ooo'o'. Because the first g is not follwed by g and the last o is not followed by o.


var regexPattern = /([\w\W])(?!\1)/g;

function processData(Test_String) {    
    var Array = Test_String.match(regexPattern);
    console.log("Number of matches :", Array.length);
} 

processData('gooooo'); //Number of matches : 2
processData('goluo'); //Number of matches : 5