// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


//* Example

////?   s = '12:01:00PM'
////?   Return '12:01:00'.


////?    s = '12:01:00AM'
////?    Return '00:01:00'.


//* Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time 
// in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format


//* Returns

// string: the time in 24 hour format


//* Input Format

// A single string 's' that represents a time in 12-hour clock format (i.e.:hh:mm:ssAM or hh:mm:ssPM).


//* Constraints
////?   All input times are valid



//* Sample Input
////?   07:05:45PM 

//* Sample Output
////?   19:05:45





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
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static string timeConversion(string s)
    {
        string[] sp = s.Split(':');
        
        if(sp[2].Contains("AM") && sp[0]=="12")
            sp[0] = "00";
        else if(sp[2].Contains("PM") && sp[0]!="12")
            sp[0] = (Convert.ToInt32(sp[0]) + 12).ToString();
        
        sp[2] = sp[2].Substring(0,sp[2].Length - 2);
        
        return sp[0] + ":" + sp[1] + ":" + sp[2];
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        string s = Console.ReadLine();

        string result = Result.timeConversion(s);

        Console.Write(result);
    }
}



//! Input
// 07:05:45PM

//! Output
// 19:05:45