// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. 
// In this PDF viewer, each word is highlighted independently. For example:

////?       Highlighted Text
////?       |abc| |def| |ghi|

// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' 
// is at index 25. There will also be a string. Using the letter heights given, determine the area of the rectangle 
// highlight in mm^2 assuming all letters are 1mm wide.


//* Example

////?    h = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5] 
////?    word = 'torn'

// The heights are t=2, o=1, r=1 and n=1. The tallest letter is 2 high and there are 4 letters. The hightlighted area 
// will be 2*4 = 8mm^2 so the answer is 8.


//* Function Description

// Complete the designerPdfViewer function in the editor below.

// designerPdfViewer has the following parameter(s):

////?    int h[26]: the heights of each letter
////?    string word: a string


//* Returns

////?   int: the size of the highlighted area


//* Input Format

// The first line contains 26 space-separated integers describing the respective heights of each consecutive 
// lowercase English letter, ascii[a-z].

// The second line contains a single word consisting of lowercase English alphabetic letters.


//* Constraints
////?   1 <= h[?] <= 7, where '?' is an English lowercase letter.
////?   'word' contains no more than 10 letters.



//* Sample Input 0
////?   1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
////?   abc

//* Sample Output 0
////?   9


//* Explanation 0

// We are highlighting the word abc:

// Letter heights are a=1, b=3 and c=1. The tallest letter, b, is 3mm high. The selection area for this word is 
// 3 . 1mm . 3mm = 9mm^2.

//! Note: Recall that the width of each character is 1mm.



//* Sample Input 1
////?   1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
////?   zaba

//* Sample Output 1
////?   28


//* Explanation 0

// The tallest letter in 'zaba' is 'z' at 7mm. The selection area for this word is 4 x 1mm x 7mm = 28mm^2. 




class Result
{

    /*
     * Complete the 'designerPdfViewer' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY h
     *  2. STRING word
     */

    public static int designerPdfViewer(List<int> h, string word)
    {
        int letterHeight = 0;

        foreach (char letter in word)
        {
            //ASCII value of lowercase letter start from a:97 to z:123
            int letterNumber = (int)letter - 97;
            
            if(h[letterNumber] > letterHeight)
                letterHeight = h[letterNumber];
        }

        return letterHeight * word.Length;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        List<int> h = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(hTemp => Convert.ToInt32(hTemp)).ToList();

        string word = Console.ReadLine();

        int result = Result.designerPdfViewer(h, word);

        Console.WriteLine(result);
    }
}








//! Input 0
// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc

//! Output 0
// 9


//! Input 1
// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
// zaba

//! Output 1
// 28