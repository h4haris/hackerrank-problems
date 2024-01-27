// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

////?    1. The elements of the first array are all factors of the integer being considered
////?    2. The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


//* Example

////?   a = [2,6]
////?   b = [24,36]

// There are two numbers between the arrays: 6 and 12.
////?    6%2 = 0, 6%6 = 0, 24%6 = 0 and 36%6 = 0 for the first value.
////?    12%2 = 0, 12%6 = 0 and 24%12 = 0, 36%12 = 0 for the second value. Return 2.


//* Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

////?    int a[n]: an array of integers
////?    int b[m]: an array of integers


//* Returns

////?    int: the number of integers that are between the sets


//* Input Format

// The first line contains two space-separated integers, 'n' and 'm', the number of elements in arrays 'a' and 'b'.
// The second line contains 'n' distinct space-separated integers a[i] where 0 <= i < n.
// The third line contains 'm' distinct space-separated integers b[j] where 0 <= j < m.


//* Constraints
////?   1 <= n,m <= 10
////?   1 <= a[i] <= 100
////?   1 <= b[j] <= 100


//* Sample Input
////?   2 3
////?   2 4
////?   16 32 96

//* Sample Output
////?   3

//* Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of 'a' is a factor and each is a factor of 
// all elements of 'b'.


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
     * Complete the 'getTotalX' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY a
     *  2. INTEGER_ARRAY b
     */

    public static int getTotalX(List<int> a, List<int> b)
    {
        int aMax = a.Max();
        int bMin = b.Min();

        // if largest number of 'a' > smallest number of 'b'
        // then there will be no number which satisfy both conditions
        if (bMin < aMax)
            return 0;

        // 1. Getting all numbers from aMax to bMin inclusive both
        // 2. Then filtering each if satisfy condition 1   
        var numbersSatisfyingCond1 = Enumerable.Range(aMax, bMin - aMax + 1).
                                        Where(num => a.All(factor => num % factor == 0));

        // Then filtering further on above list if they satisfy condition 2                             
        var numbersSatisfyingBoth = numbersSatisfyingCond1.Where(factor => 
                                            b.All(num => num % factor == 0));

        return numbersSatisfyingBoth.Count();
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int n = Convert.ToInt32(firstMultipleInput[0]);

        int m = Convert.ToInt32(firstMultipleInput[1]);

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        List<int> brr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(brrTemp => Convert.ToInt32(brrTemp)).ToList();

        int total = Result.getTotalX(arr, brr);

        Console.Write(total);
    }
}




//! Input 0
// 2 3
// 2 4
// 16 32 96

//! Output 0
// 3


//! Input 1
// 10 10
// 100 99 98 97 96 95 94 93 92 91
// 1 2 3 4 5 6 7 8 9 10

//! Output 1
// 0


//! Input 2
// 2 2
// 3 4
// 24 48

//! Output 2
// 2