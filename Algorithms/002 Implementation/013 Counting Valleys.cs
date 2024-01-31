// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every 
// step it was noted if it was an uphill, 'U', or a downhill, 'D' step. Hikes always start and end at sea level, and each 
// step up or down represents a 1 unit change in altitude. We define the following terms:

////?   A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with 
////?   a step down to sea level.

////?   A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with 
////?   a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

//* Example

////?    steps = 8 path = [DDUUUUDD]

// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, 
// the hiker returns to sea level and ends the hike.


//* Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

////?    int steps: the number of steps on the hike
////?    string path: a string describing the path


//* Returns

////?   int: the number of valleys traversed


//* Input Format

// The first line contains an integer 'steps', the number of steps in the hike.
// The second line contains a single string 'path', of 'steps' characters that describe the path.


//* Constraints
////?   2 <= steps <= 10^6
////?   path[i] consists of {UD}


//* Sample Input
////?    8
////?    UDDDUDUU

//* Sample Output
////?   1

//* Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

////?    _/\      _
////?       \    /
////?        \/\/

// The hiker enters and leaves one valley.







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
     * Complete the 'countingValleys' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER steps
     *  2. STRING path
     */

    public static int countingValleys(int steps, string path)
    {
        string[] pathChar = path.Select(digit => digit.ToString()).ToArray();
        
        int level = 0, valleyCount = 0;
        bool valleyStart = false;

        for (int i = 0; i < steps; i++)
        {
            if (pathChar[i] == "U")
                level++;
            else 
                level--;

            // If level is below 0 then passing thru a valley 
            if (level < 0 && valleyStart == false)
                valleyStart = true;

            // Append valley count if level reached to 0 again
            if (valleyStart && level == 0)
            {
                valleyStart = false;
                valleyCount++;
            }
        }

        return valleyCount;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int steps = Convert.ToInt32(Console.ReadLine().Trim());

        string path = Console.ReadLine();

        int result = Result.countingValleys(steps, path);

        Console.WriteLine(result);
    }
}










//! Input 0
// 8
// UDDDUDUU

//! Output 0
// 1


//! Input 1
// 12
// DDUUDDUDUUUD

//! Output 1
// 2


//! Input 2
// 10
// UDUUUDUDDD

//! Output 2
// 0


//! Input 3
// 100
// UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU

//! Output 3
// 6