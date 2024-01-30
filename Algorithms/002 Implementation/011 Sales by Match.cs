// There is a large pile of socks that must be paired by color. Given an array of integers representing the color 
// of each sock, determine how many pairs of socks with matching colors there are.


//* Example

////?    n = 7
////?    ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of 
// pairs is 2.


//* Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

////?    int n: the number of socks in the pile
////?    int ar[n]: the colors of each sock


//* Returns

////?   int: the number of pairs


//* Input Format

// The first line contains an integer 'n', the number of socks represented in 'ar'.
// The second line contains 'n' space-separated integers, ar[i], the colors of the socks in the pile.


//* Constraints
////?   1 <= n <= 100
////?   1 <= ar[i] <= 100 where 0 <= i < n


//* Sample Input

////?    STDIN                       Function
////?    -----                       --------
////?    9                           n = 9
////?    10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

//* Sample Output
////?   3

//* Explanation

////?   [10,10]
////?   [10,10]
////?   [20,20]
////?   LeftOver = [20,30,50]

// There are three pairs of socks.





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
     * Complete the 'sockMerchant' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER_ARRAY ar
     */

    public static int sockMerchant(int n, List<int> ar)
    {
        var pairs = (int) ar.GroupBy(x => x)
                            .Sum(item => Math.Floor((decimal)item.Count()/2));
        
        return pairs;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> ar = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arTemp => Convert.ToInt32(arTemp)).ToList();

        int result = Result.sockMerchant(n, ar);

        Console.WriteLine(result);
    }
}








//! Input 0
// 9
// 10 20 20 10 10 30 50 10 20

//! Output 0
// 3


//! Input 1
// 10
// 1 1 3 1 2 1 3 3 3 3

//! Output 1
// 4