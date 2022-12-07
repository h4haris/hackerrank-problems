//! \b assert position at a word boundary.

// Three different positions qualify for word boundaries :
////? Before the first character in the string, if the first character is a word character.
////? Between two characters in the string, where one is a word character and the other is not a word character.
////? After the last character in the string, if the last character is a word character.


//* For example

////? \bcat\b : matches 'A cat' but not 'Acat'


//* Task

//You have a test String 'S'.

////? Write a regex which will match word starting with vowel (a,e,i,o, u, A, E, I , O or U).
////? The matched word can be of any length. The matched word should consist of letters (lowercase and uppercase both) only.
////? The matched word must start and end with a word boundary.


var regexPattern = /\b[aeiouAEIOU][A-Za-z]*\b/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('Found any match?'); //true
processData('I found3 i0'); //true