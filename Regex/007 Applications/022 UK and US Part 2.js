//* We've already seen how UK and US words differ in their spelling. One other difference is how UK has kept the usage of letters our in some of its words and US has done away with the letter u and uses just or. Given the UK format of the word that has our in it, find out the total number of occurrences of both its UK and US variants in a given sequence of words.


//* Input Format

// First line contains an integer N. N lines follow, each line contains a sequence of words (W) separated by a single space.
// Next lines contains an integer T. T testcases follow in a new line. Each line contains the UK spelling of a word (W')


//* Constraints

////? 1 <= N <= 10
////? Each line doesn't contain more than 10 words (W)
////? Each character of W and W' is a lowercase alphabet.
////? If C is the count of the number of characters of W or ////? W', then
////? 1 <= C <= 20
////? 1 <= T <= 10
////? W' that has our as a sub-string in it.

//* Output Format

// Output T lines and in each line output the number of UK and US version of (W') in all of N lines that contains a sequence of words.


//* Sample Input

////? 2
////? the odour coming out of the left over food was intolerable
////? ammonia has a very pungent odor
////? 1
////? odour


//* Sample Output

////? 2


//* Explanation

// In the given 2 lines, we find odour and odor once each. So, the total count is 2.


function processData(input) {
    let split = input.split(/\n?\d+\n/); // splitting with digits
    split.shift();
    let paragraphs = split[0].split(/\n/).join(' '); // combining all sentences

    let testCases = split[1].split('\n');
    testCases.forEach((item, index) =>{
        let regex = "\\b(" + item + "|" + item.replace('our', 'or') + ")\\b";
        regex = new RegExp(regex, 'g');
        let matches = paragraphs.match(regex);
        console.log(matches != null ? matches.length : 0);
    });
}


processData(`2
the odour coming out of the left over food was intolerable
ammonia has a very pungent odor
1
odour`)
/*
2
 */

console.log('\n');

processData(`3
labour however salty access stream strange odor favorite dancing milligram
anxious spoon formal lesson vapor close soft drunk odour pt
text labor instead knit shop flavor find humor critical driving
9
armour
humour
behaviour
labour
favourite
flavour
clamour
odour
vapour`)
/*
0
1
0
2
1
1
0
2
1
 */

console.log('\n');

processData(`10
splendour wealth piece recognition savoury endeavour oil cannot reality fish
sincere savor argument vigour chain awake cap surprising savoury jump
natural study process immoral flag vigour habit assist candy pet
shoulder aside slightly onto crash later disagreement savour rumour entrance
splendour petrol unable inevitably crowd growth fasten leading responsibility artificially
equally alarmed also knowledge ok splendor armory pick sale be
activity rumour ending alcoholic savory curve splendour honestly enjoyable rumour
determined used rumor union affair odor granddaughter elect endeavor alter
savor hour enjoyable waiter divorce at mental prepared folding primary
cheaply vegetable upon splendor disease savor it cast hear cardboard
9
endeavour
savoury
savour
vigour
valour
splendour
rumour
odour
armoury`)
/*
2
3
4
2
0
5
4
1
1
 */