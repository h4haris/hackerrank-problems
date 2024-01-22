// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four 
// of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated 
// long integers.

//* Example

// arr = [1,3,5,7,9]

// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints

////?    16 24

//* Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

////?    arr: an array of 5 integers

//* Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.


//* Input Format

// A single line of five space-separated integers.


//* Constraints
////?   1 <= arr[i] <= 10^9


//* Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)


//* Sample Input
////?   1 2 3 4 5 

//* Sample Output
////?   10 14

//* Explanation

// The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

// Sum everything except 1, the sum is 2+3+4+5=14.
// Sum everything except 2, the sum is 1+3+4+5=13.
// Sum everything except 3, the sum is 1+2+4+5=12.
// Sum everything except 4, the sum is 1+2+3+5=11.
// Sum everything except 5, the sum is 1+2+3+4=10.

//! Hints: Beware of integer overflow! Use 64-bit Integer.

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
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<int> arr)
    {
        arr.Sort();
        
        List<long> longs = arr.ConvertAll(i => (long)i);
        
        long min = longs.Take(4).Sum();
        long max = longs.Skip(1).Take(4).Sum();
        
        Console.WriteLine(min + " " + max);
    }

}

class Solution
{
    public static void Main(string[] args)
    {

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        Result.miniMaxSum(arr);
    }
}



//! Input 1
// 1 2 3 4 5

//! Output 1
// 10 14


//! Input 2
// 793810624 895642170 685903712 623789054 468592370

//! Output 2
// 2572095760 2999145560


//! Input 3
// 7 69 2 221 8974

//! Output 3
// 299 9271