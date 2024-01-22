// Staircase detail

// This is a staircase of size n = 4:

////?      #
////?     ##
////?    ###
////?   ####

// Its base and height are both equal to 'n'. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size 'n'.

//* Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

////?    int n: an integer

//* Print

// Print a staircase as described above.


//* Input Format

// A single integer, 'n', denoting the size of the staircase.


//* Constraints
////?   0 < n <= 100


//* Output Format

// Print a staircase of size 'n' using # symbols and spaces.

//! Note: The last line must have 0 spaces in it.


//* Sample Input
////?   6 

//* Sample Output
////?        #
////?       ##
////?      ###
////?     ####
////?    #####
////?   ######

//* Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.


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
     * Complete the 'staircase' function below.
     *
     * The function accepts INTEGER n as parameter.
     */

    public static void staircase(int n)
    {
        for(int i=1; i <= n; i++)
        {
            for(int j=1; j <= n-i; j++)
            {
                Console.Write(" ");
            }
            for(int j=1; j <= i; j++)
            {
                Console.Write("#");
            }
            
            Console.WriteLine();
        }
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        Result.staircase(n);
    }
}



//! Input
// 6

//! Output
//      #
//     ##
//    ###
//   ####
//  #####
// ######