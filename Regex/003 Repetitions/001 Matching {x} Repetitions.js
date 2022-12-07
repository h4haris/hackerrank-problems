//* '{x}' will match exactly 'x' repetitions of character/character class/groups.

//* For Example:

////? w{3} : It will match the character w exactly 3 times.
////? [xyz]{5} : It will match the string of length 5 consisting of characters {x, y, z}. For example it will match xxxxx, xxxyy and xyxyz.
////? \d{4} : It will match any digit exactly 4 times.

//* Task

// You have a test string 'S'.
// Write a regex that will match 'S' using the following conditions:

////? 'S' must be of length equal to 45.
////? The first 40 characters should consist of letters(both lowercase and uppercase), or of even digits.
////? The last 5 characters should consist of odd digits or whitespace characters.

var regexPattern = /^[a-zA-Z24680]{40}[13579\s]{5}$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('2222222222aaaaaaaaaa2222222222aaaaaaaaaa13 57'); //true
processData('x4202v2A22A8a6aaaaaa2G2222m222qwertyYuIo1395779'); //false