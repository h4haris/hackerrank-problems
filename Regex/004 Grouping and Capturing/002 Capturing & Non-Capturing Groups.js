//! ( )  can group that part of regex together. This allows us to apply different quantifiers to that group.
//* These parenthesis also create a numbered capturing. It stores the part of string matched by the part of regex inside parentheses.
//* These numbered capturing can be used for backreferences.


//! (?: ) can be used to create a non-capturing group. It is useful if we do not need the group to capture its match.


//* Task

// Given a test string, 'S', write a RegEx that matches 'S' under the following conditions:

////? 'S' should have 3 or more consecutive repetitions of ok.


var regexPattern = /(ok){3,}.+/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('okokok! cya'); //true