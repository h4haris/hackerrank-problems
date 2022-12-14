//* We define a word as a non-empty maximum sequence of characters that can contain only lowercase letters, uppercase letters, digits and underscores '_' (ASCII value 95). Maximum sequence means that the word has to be immediately preceeded by a character not allowed to occur in a word or by the left boundary of the sentence, and it has to be immediately followed by a character not allowed to occur in a word or by the right boundary of the sentence.

// Given N sentences and T words, for each of these words, find the number of its occurences in all the N sentences.



//* Input Format

// In the first line there is a single integer N. Each of the next N lines contains a single sentence. After that, in the next line, there is a single integer T denoting the number of words. In the i-th of the next T lines, there is a single word denoting the i-th word for which, you have to find the number of its occurences in the sentences.



//*   Constraints
////? 1 <= n <= 100
////? 1 <= T <= 10



//* Output Format

// For every word, print the number of occurrences of the word in all the N sentences listed.



////* Sample Input
////? 1
////? foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.
////? 1
////? foo


////* Sample Output

////? 6 


////* Explanation

////? foo is the first word
////? (foo) is preceeded by '(' and followed by ')', so it's the second word.
////? foo-bar is considered as two words and 'foo' is the first of them. It is preceeded by a space and followed by a hyphen '-'
////? bar-foo also contains foo for the same reason mentioned above
////? foo_bar is a single single word and hence foo in it is not counted
////? foo'bar is considered as two words and 'foo' is the first of them. It is preceeded by a space and followed by a apostrophe "'"
////? foo. as it is preceeded by a space and followed by a dot'.'



function processData(input) {
    let split = input.split(/\n?\d+\n/); // splitting with digits
    split.shift();
    let paragraphs = split[0].split(/\n/).join(' '); // combining all sentences

    let testCases = split[1].split('\n');
    testCases.forEach((item, index) =>{
        let regex = "[^A-Za-z0-9_]" + item + "[^A-Za-z0-9_]|\\b" + item + "[^A-Za-z0-9_]|[^A-Za-z0-9_]" + item + "\\b";
        regex = new RegExp(regex, 'g');
        let matches = paragraphs.match(regex);
        console.log(matches != null ? matches.length : 0);
    });
}


processData(`1
foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.
1
foo`)
/*
6
*/