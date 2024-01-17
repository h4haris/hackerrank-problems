// Complete the function solveMeFirst to compute the sum of two integers.

//* Example
////? a = 7
////? b = 3

////? Return 10

//* Function Description

// Complete the solveMeFirst function in the editor below.
// solveMeFirst has the following parameters:

////? int 'a': the first value
////? int 'b': the second value

// Returns
////? - int: the sum of 'a' and 'b'

//* Constraints
////? 1 <= a,b <= 1000

//* Sample Input
////? a = 2
////? b = 3

//* Sample Output
////? 5

//*Explanation
// 2 + 3 = 5

using System;
using System.Collections.Generic;
using System.IO;
class Solution {

    static int solveMeFirst(int a, int b) { 
      // Hint: Type return a+b; below  
      return a+b;
    }

    static void Main(String[] args) {
        int val1 = Convert.ToInt32(Console.ReadLine());
        int val2 = Convert.ToInt32(Console.ReadLine());
        int sum = solveMeFirst(val1,val2);
        Console.WriteLine(sum);
    }
}     

//! Input
// 2
// 3

//! Output
// 5

//! Input
// 100
// 1000

//! Output
// 1100