//* (?<!regex_2)regex_1 

//* The negative lookbehind (?<!) asserts regex_1 not to be immediately preceded by regex_2. Lookbehind is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

//* For example,

////? (?<![a-z])[aeiou] : matches 'o' in 'he1o' which is not followed by a lowercase letter

//* Task

// You have a test string 'S'.
// Write a regex which can match all the occurences of characters which are not immediately preceded by vowels (a, e, i, u, o, A, E, I, O, U).

var regexPattern = /(?<![aeiouAEIOU])[\w\W]/g;

function processData(Test_String) {    
    var Array = Test_String.match(regexPattern);
    console.log("Number of matches :", Array.length);
} 

processData('1o1s'); //Number of matches : 3