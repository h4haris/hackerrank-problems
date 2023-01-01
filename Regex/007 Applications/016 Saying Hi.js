//* Given a sentence, , write a RegEx to match the following criteria:

////? The first character must be the letter `H` or `h`.
////? The second character must be the letter `I` or `i`.
////? The third character must be a single space(i.e.: \s).
////? The fourth character must not be the letter `D` or `d`.

// Given n lines of sentences as input, print each sentence matching your RegEx on a new line.

//* Input Format

// The first line contains an integer, n, denoting the number of lines of sentences.
// Each of the n subsequent lines contains some sentence s you must match.

//* Constraints

////? 1 <= n <= 10
////? Each sentence, s, contains 1 to 10 words.
////? Each word / token in a sentence is comprised only of upper and lowercase English letters.

//* Output Format

// Find each sentence, s, satisfying the RegEx criteria mentioned above, and print it on a new line.

//* Sample Input

////? 5
////? Hi Alex how are you doing
////? hI dave how are you doing
////? Good by Alex
////? hidden agenda
////? Alex greeted Martha by saying Hi Martha

//* Sample Output

////? Hi Alex how are you doing

//* Explanation

// The first sentence satisfies the RegEx criteria set forth in the Problem Statement(starts with the case -insensitive word, `Hi` followed by a space, followed by a letter that is not `d`), so we print the sentence on a new line.

// The second sentence fails our RegEx criteria, as the second word / token starts with a `d`(so we print nothing).

// The third sentence fails our RegEx criteria, as it doesn't start with an `h` (so we print nothing).

// The fourth sentence fails our RegEx criteria, as the third character in the sentence is not a space(so we print nothing).

// The fifth sentence fails as our RegEx criteria, as the sentence does not start with the word `Hi`(so we print nothing).


var regexPattern = /^[H|h][I|i]\s[^D|d]/g

function processData(input) {
    inputLines = input.split('\n')
    var inputLength = +inputLines[0]

    for (var i = 1; i <= inputLength; i++) {
        var isValid = inputLines[i].match(regexPattern)
        if (isValid)
            console.log(inputLines[i])
    }
}


processData(`5
Hi Alex how are you doing
hI dave how are you doing
Good by Alex
hidden agenda
Alex greeted Martha by saying Hi Martha`)
/*
Hi Alex how are you doing
 */