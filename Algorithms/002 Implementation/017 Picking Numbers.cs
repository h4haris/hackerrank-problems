// Given an array of integers, find the longest subarray where the absolute difference between any two elements 
// is less than or equal to 1.


//* Example

////?    a = [1,1,2,2,4,4,5,5,5]

// There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 
// 5 elements.


//* Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

////?    int a[n]: an array of integers


//* Returns

////?   int: the length of the longest subarray that meets the criterion


//* Input Format

// The first line contains a single integer 'n', the size of the array 'a'.
// The second line contains 'n' space-separated integers, each an a[i].


//* Constraints
////?   2 <= n <= 100
////?   0 < a[i] < 100
////?   The answer will be >= 2.


//* Sample Input 0
////?   6
////?   4 6 5 3 3 1

//* Sample Output 0
////?   3

//* Explanation 0

// We choose the following multiset of integers from the array: {4,3,3}. Each pair in the multiset has an 
// absolute difference <= 1 (i.e., |4-3| = 1 and |3-3| = 0), so we print the number of chosen integers, 3, 
// as our answer.


//* Sample Input 1
////?   6
////?   1 2 2 3 1 2

//* Sample Output 1
////?   5

//* Explanation 1

// We choose the following multiset of integers from the array: {1,2,2,1,2}. Each pair in the multiset has an 
// absolute difference <= 1 (i.e., |1-2| = 1, |1-1| = 0, and |2-2| = 0), so we print the number of chosen integers,
// 5, as our answer.






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
     * Complete the 'pickingNumbers' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static int pickingNumbers(List<int> a)
    {
        a.Sort();
        
        int ans=0;
        int lastNumber = a[0]; // setting 1st number for comparison in loop

        for(int i=0; i<a.Count; i++)
        {
            // skipping number if same as last number because it will give same answer as on last step
            if(i != 0 && lastNumber == a[i])
                continue;

            //Console.WriteLine(a[i]);
            ans = Math.Max(ans, a.Count(z=> z == a[i] || z == a[i] + 1));
        }
        return ans;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> a = Console.ReadLine()
                                .TrimEnd()
                                .Split(' ')
                                .ToList()
                                .Select(aTemp => Convert.ToInt32(aTemp))
                                .ToList();

        int result = Result.pickingNumbers(a);

        Console.WriteLine(result);
    }
}







//! Input 0
// 6
// 4 6 5 3 3 1

//! Output 0
// 3


//! Input 1
// 6
// 1 2 2 3 1 2

//! Output 1
// 5