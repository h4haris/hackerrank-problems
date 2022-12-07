//* Forward reference creates a back reference to a regex that would appear later.
//* Forward references are only useful if they're inside a repeated group.
//* Then there may arise a case in which the regex engine evaluates the backreference after the group has been matched already.

//* For example

////? (\2amigo|(go!))+ : will match go!go!amigo.

//* Task

// You have a test string 'S'.
// Write a regex which will match 'S', with following condition(s):

////? 'S' consists of tic or tac.
////? tic should not be immediate neighbour of itself.
////? The first tic must occur only when tac has appeared at least twice before.

//* Valid 'S'

////? tactactic
////? tactactictactic

//* Invalid 'S'

////? tactactictactictictac
////? tactictac


var regexPattern = /^(tac){2,}(\2tac|(tic(?!tic)))+$/;

function processData(Test_String) {    
    console.log(!!Test_String.match(regexPattern));
} 

processData('tactactic'); //true 
processData('tactactictactic'); //true 
processData('tactactictactictictac'); //false 
processData('tactictac'); //false 