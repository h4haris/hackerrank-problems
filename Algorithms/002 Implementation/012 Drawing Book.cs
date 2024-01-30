// A teacher asks the class to open their books to a page number. A student can either start turning pages from the 
// front of the book or from the back of the book. They always turn pages one at a time. When they open the book, 
// page 1 is always on the right side:

// When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. 
// The last page may only be printed on the front, given the length of the book. If the book is 'n' pages long, and 
// a student wants to turn to page 'p', what is the minimum number of pages to turn? They can start at the beginning 
// or the end of the book.

// Given 'n' and 'p', find and print the minimum number of pages that must be turned in order to arrive at page 'p'.

//* Example

////?    n = 5
////?    p = 3

////?     ___ ___          ___ ___          ___ ___  
////?    |   |   |        |   |   |        |   |   |  
////?    |   | 1 | ->     | 2 | 3 | ->     | 4 | 5 |
////?    |___|___|        |___|___|        |___|___|

// Using the diagram above, if the student wants to get to page 3, they open the book to page 1, flip 1 page and they are 
// on the correct page. If they open the book to the last page, page 5, they turn 1 page and are at the correct page. 
// Return 1.


//* Function Description

// Complete the pageCount function in the editor below.

// pageCount has the following parameter(s):

////?    int n: the number of pages in the book
////?    int p: the page number to turn to


//* Returns

////?   int: the minimum number of pages to turn


//* Input Format

// The first line contains an integer 'n', the number of pages in the book.
// The second line contains an integer, 'p', the page to turn to.


//* Constraints
////?   1 <= n <= 10^5
////?   1 <= p <= n


//* Sample Input 0
////?    6
////?    2

//* Sample Output 0
////?   1

//* Explanation 0

// If the student starts turning from page 1, they only need to turn 1 page:

////?     ___ ___          ___ ___  
////?    |   |   |        |   |   |  
////?    |   | 1 | ->     | 2 | 3 |
////?    |___|___|        |___|___|

// If a student starts turning from page 6, they need to turn 2 pages:


////?     ___ ___          ___ ___          ___ ___  
////?    |   |   |        |   |   |        |   |   |  
////?    | 6 |   | ->     | 4 | 5 | ->     | 2 | 3 |
////?    |___|___|        |___|___|        |___|___|

// Return the minimum value, 1.



//* Sample Input 1
////?    5
////?    4

//* Sample Output 1
////?   0

//* Explanation 1

// If the student starts turning from page 1, they need to turn 2 pages:

////?     ___ ___          ___ ___          ___ ___  
////?    |   |   |        |   |   |        |   |   |  
////?    |   | 1 | ->     | 2 | 3 | ->     | 4 | 5 |
////?    |___|___|        |___|___|        |___|___|


// If they start turning from page 5, they do not need to turn any pages:

////?     ___ ___ 
////?    |   |   |
////?    | 4 | 5 |
////?    |___|___|

// Return the minimum value, 0.







using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'pageCount' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER p
     */

    public static int pageCount(int n, int p)
    {
        if(p == 1 || p == n || (n % 2 != 0 && p == n-1))
            return 0;
            
        var fromLast = n % 2 == 0 ? (n+1-p)/2 : (n-p)/2;
        var fromFirst = p/2;
        
        return Math.Min(fromFirst, fromLast);
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        int p = Convert.ToInt32(Console.ReadLine().Trim());

        int result = Result.pageCount(n, p);

        Console.WriteLine(result);
    }
}









//! Input 0
// 6
// 2

//! Output 0
// 1


//! Input 1
// 5
// 4

//! Output 1
// 0


//! Input 2
// 6
// 5

//! Output 2
// 1