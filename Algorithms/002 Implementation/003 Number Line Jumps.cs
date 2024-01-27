// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a 
// number line ready to jump in the positive direction (i.e, toward positive infinity).

////?   The first kangaroo starts at location 'x1' and moves at a rate of 'v1' meters per jump.
////?   The second kangaroo starts at location 'x2' and moves at a rate of 'v2' meters per jump.

// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
// If it is possible, return YES, otherwise return NO.

//* Example

////?    x1 = 2
////?    v1 = 1
////?    x2 = 1
////?    v2 = 2

// After one jump, they are both at x=3, (x1+v1 = 2+1, x2+v2 = 1+2), so the answer is YES.


//* Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

////?    int x1, int v1: starting position and jump distance for kangaroo 1
////?    int x2, int v2: starting position and jump distance for kangaroo 2


//* Returns

////?    string: either YES or NO


//* Input Format

// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.


//* Constraints
////?   0 <= x1 < x2 <= 10000
////?   1 <= v1 <= 10000
////?   1 <= v2 <= 10000


//* Sample Input 0
////?   0 3 4 2

//* Sample Output 0
////?   YES

//* Explanation

// The two kangaroos jump through the following sequence of locations:

////?                                 Jump1   Jump2   Jump3   Jump4
////?   Kangroo2                    |-------|-------|-------|-------|
////?
////?                   Jump1       Jump2       Jump3       Jump4
////?   Kangroo1    |-----------|-----------|-----------|-----------|
////?           -1  0   1   2   3   4   5   6   7   8   9   10  11  12  13

// From the above, it is clear that the kangaroos meet at the same location (number 12 on the number line) after same 
// number of jumps (4 jumps), and we print YES.


//* Sample Input 1
////?   0 2 5 3

//* Sample Output 0
////?   NO

//* Explanation

// The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting 
// location (i.e., x2 > x1). Because the second kangaroo moves at a faster rate (meaning v2 > v1) and is already 
// ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.



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
     * Complete the 'kangaroo' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. INTEGER x1
     *  2. INTEGER v1
     *  3. INTEGER x2
     *  4. INTEGER v2
     */

    public static string kangaroo(int x1, int v1, int x2, int v2)
    {
        if(x2>x1 && v2>=v1)
            return "NO";
        
        // we want to find a Y such that 
        // x1 + Yv1 = x2 + Yv2 
        // => Yv1 = x2 + Yv2 - x1 
        // => Yv1 - Yv2 = x2 - x1 
        // => Y(v1 - v2) = x2 - x1 
        // => Y = (x2 - x1) / (v1 - v2) 
        // and beacuse they cant move a fraction of a move, the answer must be an integer

        if((x2 - x1) % (v1 - v2) == 0)
            return "YES";
        else 
           return "NO";
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int x1 = Convert.ToInt32(firstMultipleInput[0]);

        int v1 = Convert.ToInt32(firstMultipleInput[1]);

        int x2 = Convert.ToInt32(firstMultipleInput[2]);

        int v2 = Convert.ToInt32(firstMultipleInput[3]);

        string result = Result.kangaroo(x1, v1, x2, v2);

        Console.Write(result);
    }
}



//! Input 0
// 0 3 4 2

//! Output 0
// YES


//! Input 1
// 0 2 5 3

//! Output 1
// NO