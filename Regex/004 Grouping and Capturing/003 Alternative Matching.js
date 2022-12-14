//* Alternations, denoted by the | character, match a single item out of several possible items separated by the vertical bar. When used inside a character class, it will match characters; when used inside a group, it will match entire expressions (i.e., everything to the left or everything to the right of the vertical bar). We must use parentheses to limit the use of alternations.

//* For example

////? (and|AND|And) : will match either And or and or AND
////? (Bob|Kevin|Stuart): will match either Bob or Kevin or Stuart.
////? ([a-f]|[A-F]): will match any of the following characters: a, b, c, d, e, f, A, B, C, D, E, or F.

//* Task

// Given a test string, 's', write a RegEx that matches 's' under the following conditions:

////? 's' must start with Mr., Mrs., Ms., Dr. or Er..
////? The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).


var regexPattern = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('Mr.DOSHI'); //true 
processData('Mr#DOSHI'); //false 