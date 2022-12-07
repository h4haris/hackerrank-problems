//* Task

////? You have a test string 'S'. Your task is to match the string 'hackerrank'. This is case sensitive.

var regexPattern = 'hackerrank';

function processData(Test_String) {    
    var Regex = new RegExp(regexPattern, "g");
    var Array = Test_String.match(Regex);
    console.log("Number of matches :", Array.length);
} 

processData('The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers.'); //Number of matches : 2