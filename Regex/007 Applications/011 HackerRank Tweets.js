//* Increasing popularity of hackerrank can be seen in tweets like

////? I love #hackerrank
////? I just scored 27 points in the Picking Cards challenge on #HackerRank
////? I just signed up for summer cup @hackerrank

// Given a set of most popular tweets, your task is to find out how many of those tweets has the string hackerrank in it.

//* Input Format

// First line is an integer N. N lines follow. Each line is a valid tweet.

//*   Constraints
////? 1 <= N <= 10
// Each character of the tweet is a valid ASCII character.

//* Output Format

// Print the total number of tweets that has hackerrank (case insensitive) in it.

////* Sample Input
////? 4
////? I love #hackerrank
////? I just scored 27 points in the Picking Cards challenge on #HackerRank
////? I just signed up for summer cup @hackerrank
////? interesting talk by hari, co - founder of hackerrank

////* Sample Output
////? 4



var regexPattern = /hackerrank/

function processData(input) {
    inputLines = input.split('\n')
    var inputLength = +inputLines[0]
    var output = 0

    for (var i = 1; i <= inputLength; i++) {
        var Regex = new RegExp(regexPattern, "gi")
        if (inputLines[i].match(Regex)) output++
    }

    console.log(output)
}


processData(`4
I love #hackerrank
I just scored 27 points in the Picking Cards challenge on #HackerRank
I just signed up for summer cup @hackerrank
interesting talk by hari, co-founder of hackerrank`)
// 4