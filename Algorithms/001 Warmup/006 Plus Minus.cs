// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

//! Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though 
//! answers with absolute error of up to 10^-4 are acceptable.

//* Example

// arr = [1,1,0,-1,-1]

// There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 
// and 1/5 = 0.200000. Results are printed as:

////?   0.400000
////?   0.400000
////?   0.200000

//* Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

////?    int arr[n]: an array of integers

//* Print

// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate 
// line with 6 digits after the decimal. The function should not return a value.

//* Input Format

// The first line contains an integer, 'n', the size of the array.
// The second line contains 'n' space-separated integers that describe arr[n].

//* Constraints
////?   0 < n <= 100
////?   -100 <= arr[i] <= 100

//* Output Format

// Print the following 3 lines, each to 6 decimals:

// 1. proportion of positive values
// 2. proportion of negative values
// 3. proportion of zeros


//* Sample Input
////?   STDIN           Function
////?   -----           --------
////?   6               arr[] size n = 6
////?   -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

//* Sample Output
////?   0.500000
////?   0.333333
////?   0.166667

//* Explanation

// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000 , negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.

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
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<int> arr)
    {
        int pos=0;
        int neg=0;
        int zero=0;
        decimal pF = 0,nF = 0,zF = 0;
        int n = arr.Count;
        
        for(int i=0; i < n; i++)
        {
            if(arr[i] > 0)
                pos++;
            else if(arr[i] < 0)
                neg++;
            else
                zero++;
        }
        
        if(pos!=0)
            pF = (decimal) pos/n;
        if(neg!=0)
            nF = (decimal) neg/n;
        if(zero!=0)
            zF = (decimal) zero/n;
        
        Console.WriteLine(Math.Round(pF,6).ToString("0.000000"));
        Console.WriteLine(Math.Round(nF,6).ToString("0.000000"));
        Console.WriteLine(Math.Round(zF,6).ToString("0.000000"));
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> arr = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(arrTemp => Convert.ToInt32(arrTemp)).ToList();

        Result.plusMinus(arr);
    }
}



//! Input
// 6
// -4 3 -9 0 4 1

//! Output
// 0.500000
// 0.333333
// 0.166667


//! Input
// 8
// 1 2 3 -1 -2 -3 0 0

//! Output
// 0.375000
// 0.375000
// 0.250000