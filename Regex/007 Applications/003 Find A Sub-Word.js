//* We define a word character to be any of the following:

////? An English alphabetic letter (i.e., a-z and A-Z).
////? A decimal digit (i.e., 0-9).
////? An underscore (i.e., _, which corresponds to ASCII value 95).

// We define a word to be a contiguous sequence of one or more word characters that is preceded and succeeded by one or more occurrences of non-word-characters or line terminators. For example, in the string I l0ve- cheese_?, the words are I, l0ve, and cheese_.

// We define a sub-word as follows:

////? A sequence of word characters (i.e., English alphabetic letters, digits, and/or underscores) that occur in the same exact order (i.e., as a contiguous sequence) inside another word.

////? It is preceded and succeeded by word characters only.

// Given n sentences consisting of one or more words separated by non-word characters, process q queries where each query consists of a single string, s. To process each query, count the number of occurrences of s as a sub-word in all n sentences, then print the number of occurrences on a new line.


//* Input Format

////? The first line contains an integer, n, denoting the number of sentences.
////? Each of the n subsequent lines contains a sentence consisting of words separated by non-word characters.
////? The next line contains an integer, q, denoting the number of queries.
////? Each line i of the q subsequent lines contains a string, s, to check.


//*   Constraints
////? 1 <= n <= 100
////? 1 <= q <= 10


//* Output Format

// For each query string, si, print the total number of times it occurs as a sub-word within all words in all n sentences.


////* Sample Input
////? 1
////? existing pessimist optimist this is
////? 1
////? is


////* Sample Output

////? 3 


////* Explanation

// We must count the number of times s=is occurs as a sub-word in our n=1 input sentence(s):

////? s occurs 1 time as a sub-word of existing.
////? s occurs 1 time as a sub-word of pessimist.
////? s occurs 1 time as a sub-word of optimist.

////? While s is a substring of the word this, it's followed by a blank space; because a blank space is non-alphabetic, non-numeric, and not an underscore, we do not count it as a sub-word occurrence.

////? While s is a substring of the word is in the sentence, we do not count it as a match because it is preceded and succeeded by non-word characters (i.e., blank spaces) in the sentence. This means it doesn't count as a sub-word occurrence.

// Next, we sum the occurrences of s as a sub-word of all our words as 1+1+1+0+0=3. Thus, we print 3 on a new line.


function processData(input) {
    let split = input.split(/\n?\d+\n/); // splitting with digits
    split.shift();
    let paragraphs = split[0].split(/\n/).join(' '); // combining all sentences

    let testCases = split[1].split('\n');
    testCases.forEach((item, index) =>{
        let regex = "\\w" + item + "\\w";
        regex = new RegExp(regex, 'g');
        let matches = paragraphs.match(regex);
        console.log(matches != null ? matches.length : 0);
    });
}


processData(`1
existing pessimist optimist this is
1
is`)
/*
3
*/