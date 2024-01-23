// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year 
// of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.


//* Example

////?    candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.


//* Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

////?    int candles[n]: the candle heights


//* Returns

////?   int: the number of candles that are tallest


//* Input Format

// The first line contains a single integer, 'n', the size of candles[].
// The second line contains 'n' space-separated integers, where each integer 'i' describes the height of candles[i].


//* Constraints
////?   1 <= n <= 10^5
////?   1 <= candles[i] <= 10^7



//* Sample Input
////?   4
////?   3 2 1 3

//* Sample Output
////?   2

//* Explanation

// Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them.



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
     * Complete the 'birthdayCakeCandles' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY candles as parameter.
     */

    public static int birthdayCakeCandles(List<int> candles)
    {  
        int resultCount = 1;
        int result = candles[0];
        for(int i=1 ; i < candles.Count ; i++)
        {          
            if (result == candles[i])
                resultCount++;

            if (candles[i] > result)
            {
                result = candles[i];
                resultCount = 1;
            }
        }
        return resultCount;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int candlesCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> candles = Console.ReadLine().TrimEnd().Split(' ').ToList()
                            .Select(candlesTemp => Convert.ToInt32(candlesTemp)).ToList();

        int result = Result.birthdayCakeCandles(candles);

        Console.Write(result);
    }
}



//! Input
// 4
// 3 2 1 3

//! Output
// 2