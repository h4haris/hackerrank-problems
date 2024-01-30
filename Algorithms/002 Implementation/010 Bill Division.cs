// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they 
// consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2,4,6]. Anna declines to eat item k = bill[2] which 
// costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3. If he includes the cost of bill[2], he will
// calculate (2+4+6)/2 = 6. In the second case, he should refund 3 to Anna.


//* Function Description

// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. 
// Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

////?    bill: an array of integers representing the cost of each item ordered
////?    k: an integer representing the zero-based index of the item Anna doesn't eat
////?    b: the amount of money that Anna contributed to the bill


//* Input Format

// The first line contains two space-separated integers 'n' and 'k', the number of items ordered and the 0-based 
// index of the item that Anna did not eat.

// The second line contains 'n' space-separated integers bill[i] where 0 <= i < n.

// The third line contains an integer, 'b', the amount of money that Brian charged Anna for her share of the bill.


//* Constraints
////?   2 <= n <= 10^5
////?   0 <= k < n
////?   0 <= bill[i] <= 10^4
////?            n-1
////?   0 <= b <= Sum (bill[i])
////?              i=0 
////?   The amount of money due Anna will always be an integer


//* Output Format

// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference 
// (i.e., b(charged) - b(actual)) that Brian must refund to Anna. This will always be an integer.



//* Sample Input 0
////?   4 1
////?   3 10 2 9
////?   12

//* Sample Output 0
////?   5

//* Explanation 0

// Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian. The total cost of the shared 
// items is 3 + 2 + 9 = 14 and, split in half, the cost per person is b(actual) = 7. Brian charged her b(charged) = 12 
// for her portion of the bill. We print the amount Anna was overcharged, b(charged) - b(actual) = 12 - 7 = 5, on 
// a new line.


//* Sample Input 1
////?   4 1
////?   3 10 2 9
////?   7

//* Sample Output 1
////?   Bon Appetit

//* Explanation 1

// Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian. The total cost of the shared 
// items is 3 + 2 + 9 = 14 and, split in half, the cost per person is b(actual) = 7. Because b(actual) = b(charged) = 7. 
// we print Bon Appetit on a new line.





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
     * Complete the 'bonAppetit' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY bill
     *  2. INTEGER k
     *  3. INTEGER b
     */

    public static void bonAppetit(List<int> bill, int k, int b)
    {
        var billA = bill.Where((val, idx) => idx != k).ToList();
        
        var ba = billA.Sum() / 2;
        var bc = bill.Sum() / 2;
        var diff = bc - ba;
        
        if(ba == b)
            Console.WriteLine("Bon Appetit");
        else
            Console.WriteLine(diff);
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int n = Convert.ToInt32(firstMultipleInput[0]);

        int k = Convert.ToInt32(firstMultipleInput[1]);

        List<int> bill = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(billTemp => Convert.ToInt32(billTemp)).ToList();

        int b = Convert.ToInt32(Console.ReadLine().Trim());

        Result.bonAppetit(bill, k, b);
    }
}







//! Input 0
// 4 1
// 3 10 2 9
// 12

//! Output 0
// 5


//! Input 1
// 4 1
// 3 10 2 9
// 7

//! Output 1
// Bon Appetit