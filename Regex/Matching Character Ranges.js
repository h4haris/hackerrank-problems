//* For Example:

////? [a-z] : matches any lowercase letter from a to z.
////? [0-5] : matches any digits between range 0 to 5.
////? [^A-F] : matches any letter that is not in the inclusive range from A to F.

//* Task

// Write a RegEx that will match a string satisfying the following conditions:

////? The string's length is >=5.
////? The first character must be a lowercase English alphabetic character.
////? The second character must be a positive digit. Note that we consider zero to be neither positive ////? nor negative.
////? The third character must not be a lowercase English alphabetic character.
////? The fourth character must not be an uppercase English alphabetic character.
////? The fifth character must be an uppercase English alphabetic character.

var regexPattern = /^[a-z][1-9][^a-z][^A-Z][A-Z][\w\W]*$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('h4CkR'); //true
processData(' q9$?WWe'); //false
processData("a4$?ZWe41.l;'a"); //true