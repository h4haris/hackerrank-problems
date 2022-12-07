//* The dot (.) matches anything (except for a newline).

//* For example

////? A.B.C.D. : matches A+B-C=DE

//* Task

// You have a test string 'S'.
// Your task is to write a regular expression that matches only and exactly strings of form: 

////? abc.def.ghi.jkx 
////? where each variable a,b,c,d,e,f,g,h,i,j,k,x can be any single character except the newline.

var regexPattern = /^...\....\....\....$/g;

function processData(Test_String) {    
    var matches = Test_String.match(regexPattern);
    var match = matches != null && matches.length > 0;
    console.log(match);
} 

processData('123.456.abc.def'); //true 
processData('1123.456.abc.def'); //false 