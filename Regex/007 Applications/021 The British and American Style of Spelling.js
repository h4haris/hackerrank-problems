//* American English and British English differ in several aspects which are reflected in their spelling. One difference frequently observed, is that words written in American English, which have a suffix ze often end in se in British English. Given the American-English spelling of a word which ends in ze your task is to find the total count of all its British and American variants in all the given sequences of words. i.e. you need to account for the cases where the word occurs as it is given to you (i.e. the version ending in -ze) and you also need to find the occurances of its British-English counterparts (i.e, the version ending in -se).


//* Input Format

// First line contains N, N lines follow each line contains a sequence of words (W) separated by a single space. Next line contains T. T testcases follow in a new line. Each line contains the American English spelling of a word (W')


//* Constraints

////? 1 <= N <= 10
////? Each line doesn't contain more than 10 words (W)
////? Each character of W and W' is a lowercase alphabet.
////? If C is the count of the number of characters of W or W', then
////? 1 <= C <= 20
////? 1 <= T <= 10
////? W' ends with ze ( US version of the word)


//* Output Format

// Output T lines and in each line output the total number of American and British versions of (W') in all of N lines that contains a sequence of words.


//* Sample Input

////? 2
////? hackerrank has such a good ui that it takes no time to familiarise its environment
////? to familiarize oneself with ui of hackerrank is easy
////? 1
////? familiarize


//* Sample Output

////? 2


//* Explanation

// In the given 2 lines, we find familiarize and familiarise once each. So, the total count is 2.


function processData(input) {
    let split = input.split(/\n?\d+\n/); // splitting with digits
    split.shift();
    let paragraphs = split[0].split(/\n/).join(' '); // combining all sentences

    let testCases = split[1].split('\n');
    testCases.forEach((item, index) =>{
        let regex = "(" + item + "|" + item.substring(0,item.length-2) + 'se' + ")";
        regex = new RegExp(regex, 'g');
        let matches = paragraphs.match(regex);
        console.log(matches != null ? matches.length : 0);
    });
}


processData(`2
hackerrank has such a good ui that it takes no time to familiarise its environment
to familiarize oneself with ui of hackerrank is easy
1
familiarize`)
/*
2
 */

console.log('\n');

processData(`3
crucial cold jam successful millimetre impression catalyze catalyse long rule
polish broad paralyze conclude lonely exhibit sir paralyze pound distinguish
male border noisily paralyze index crop caramelise truly accurately bound
3
caramelize
catalyze
paralyze`)
/*
1
2
3
 */