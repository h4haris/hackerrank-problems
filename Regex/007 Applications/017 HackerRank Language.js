//* Every submission at HackerRank has a field called language which indicates the programming language which a hacker used to code his solution.

////? C:CPP:JAVA:PYTHON:PERL:PHP:RUBY:CSHARP:HASKELL:CLOJURE:BASH:SCALA: 
////? ERLANG:CLISP:LUA:BRAINFUCK:JAVASCRIPT:GO:D:OCAML:R:PASCAL:SBCL:DART:GROOVY:OBJECTIVEC

// Sometimes, error-prone API requests can have an invalid language field. Could you find out if a given submission has a valid language field or not?


//* Input Format

// First line contains N. N API requests follow, each in a newline. Each request has an integer api_id and a string language which are the request parameters placed by the an API request.


//* Constraints

////? 1 <= n <= 100
////? 10^4 <= api_id < 10^5

// a valid language is any of the languages listed above (case sensitive):


//* Output Format

// For every api request given in input, print "VALID" if it has a valid language string in it or print "INVALID" otherwise.


//* Sample Input

////? 3
////? 11011 LUA
////? 11022 BRAINFUCK
////? 11044 X


//* Sample Output

////? VALID
////? VALID
////? INVALID


//* Explanation

// LUA and BRAINFUCK are valid languages as listed above. As X is doesn't appear in the list, it is an invalid request.


var regexPattern = /^\d+\s(C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART|GROOVY|OBJECTIVEC)$/g

function processData(input) {
    inputLines = input.split('\n')
    var inputLength = +inputLines[0]

    for (var i = 1; i <= inputLength; i++) {
        var isValid = inputLines[i].match(regexPattern)
        console.log(isValid ? "VALID" : "INVALID")
    }
}


processData(`3
11011 LUA
11022 BRAINFUCK
11044 X`)
/*
VALID
VALID
INVALID
 */

console.log('\n')

processData(`67
15502 EQQG
65556 PASCAL
56271 Z
37346 NR
28538 HKSSBV
54809 OCAML
56029 C
80365 CLOJURE
60220 TKWLTIQ
61559 VMBSFCFNOO
31671 TSYB
29093 GO
67370 RUBY
72666 TTSTCNY
47641 LUA
66414 STHEINLC
27309 TF
30580 DART
94106 ED
51290 C
59987 KOFAWG
20409 GROOVY
77589 GOVDKWSAV
31699 ITKY
65067 CLOJURE
24477 PERL
79489 BLUZSAYUG
17058 YRJA
65009 TQAMDUKSEA
59635 VU
15156 EKZSYDI
22709 AVSJSJLV
64661 IBBHI
30982 PYTHON
53292 EV
16847 GROOVY
56841 JIFRJH
29840 JAVASCRIPT
38589 JAVASCRIPT
36048 CLOJURE
73776 R
46206 MEWNEUJRWX
54382 AX
36472 HASKELL
34150 FUUGSMQK
66914 S
86498 QOBJ
37221 PYTHON
56223 IQRN
21091 CKJCNDCNE
99582 HASKELL
41871 D
36251 JAVA
72147 SAVRTCCZHU
80384 IRG
72621 PASCAL
10925 IH
83936 CLISP
19685 VEQAA
97115 YRB
22940 MY
60041 J
60904 GROOVY
54831 LUA
78352 DART
48962 JAVASCRIPT
42932 PERL`)
/*
INVALID
VALID
INVALID
INVALID
INVALID
VALID
VALID
VALID
INVALID
INVALID
INVALID
VALID
VALID
INVALID
VALID
INVALID
INVALID
VALID
INVALID
VALID
INVALID
VALID
INVALID
INVALID
VALID
VALID
INVALID
INVALID
INVALID
INVALID
INVALID
INVALID
INVALID
VALID
INVALID
VALID
INVALID
VALID
VALID
VALID
VALID
INVALID
INVALID
VALID
INVALID
INVALID
INVALID
VALID
INVALID
INVALID
VALID
VALID
VALID
INVALID
INVALID
VALID
INVALID
VALID
INVALID
INVALID
INVALID
INVALID
VALID
VALID
VALID
VALID
VALID
 */