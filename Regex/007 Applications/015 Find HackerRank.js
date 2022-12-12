//* At HackerRank, we always want to find out how popular we are getting every day and have scraped conversations from popular sites. Each conversation fits in 1 line and there are N such conversations. Each conversation has at most 1 word that says hackerrank (all in lowercase). We would like you to help us figure out whether a conversation:

////? Starts with hackerrank
////? Ends with hackerrank
////? Start and ends with hackerrank

//* Input Format

// First line of the input contains an integer, N. Then N lines follow.
// From the second line onwards, each line contains a set of W words separated by a single space

//*   Constraints
////? 1 <= N <= 10
////? 1 <= W <= 100
////? All the characters in W are lowercase alphabet characters.
////? If C is the count of the characters in W, then 1 <= C <= 20

//* Output Format

// For every line,
////? 1. Print 1 if the conversation starts with hackerrank
////? 2. Print 2 if the conversation ends with hackerrank
////? 3. Print 0 if the conversation starts and ends with hackerrank
////? 4. Print - 1 if none of the above.

////* Sample Input
////? 4
////? i love hackerrank
////? hackerrank is an awesome place for programmers
////? hackerrank
////? i think hackerrank is a great place to hangout

////* Sample Output
////? 2
////? 1
////? 0
////? -1



function processData(input) {
    inputLines = input.split('\n')
    var inputLength = +inputLines[0]

    for (var i = 1; i <= inputLength; i++) {
        if (inputLines[i].match(/^hackerrank(.*hackerrank)?$/)) console.log(0)

        else if (inputLines[i].match(/^(hackerrank).+/)) console.log(1)

        else if (inputLines[i].match(/.+(hackerrank)$/)) console.log(2)

        else console.log(-1)
    }
}


processData(`5
i love hackerrank
hackerrank is an awesome place for programmers
hackerrank is an awesome place for hackerrank
hackerrank
i think hackerrank is a great place to hangout`)
/*
2
1
0
0
-1
 */