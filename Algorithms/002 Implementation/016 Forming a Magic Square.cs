// We define a magic square to be an n x n matrix of distinct positive integers from 1 to n^2 where the sum of any 
// row, column, or diagonal of length 'n' is always equal to the same number: the magic constant.

// You will be given a 3 x 3 matrix  of integers in the inclusive range [1,9]. We can convert any digit 'a' to any 
// other digit 'b' in the range [1,9] at cost of |a-b|. Given 's', convert it into a magic square at minimal cost. 
// Print this cost on a new line.

//! Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].


// https://en.wikipedia.org/wiki/Magic_square


//* Example

// $s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

// The matrix looks like this:

////?    5 3 4
////?    1 5 8
////?    6 4 2

// We can convert it to the following magic square:

////?    8 3 4
////?    1 5 9
////?    6 7 2

// This took three replacements at a cost of |5-8| + |8-9| + |4-7| = 7.


//* Function Description

// Complete the formingMagicSquare function in the editor below.

// formingMagicSquare has the following parameter(s):

////?    int s[3][3]: a  array of integers


//* Returns

////?   int: the minimal total cost of converting the input square to a magic square


//* Input Format

// Each of the 3 lines contains three space-separated integers of row s[i].


//* Constraints
////?   s[i][j] is element of [1,9]


//* Sample Input 0
////?   4 9 2
////?   3 5 7
////?   8 1 5

//* Sample Output 0
////?   1

//* Explanation 0

// If we change the bottom right value, s[2][2], from 5 to 6 at a cost of |6-5| = 1, s becomes a magic square at the 
// minimum possible cost.


//* Sample Input 1
////?   4 8 2
////?   4 5 7
////?   6 1 6

//* Sample Output 1
////?   4

//* Explanation 1

// Using 0-based indexing, if we make

////?   s[0][1] -> 9 at a cost of |9-8| = 1
////?   s[1][0] -> 3 at a cost of |3-4| = 1
////?   s[2][0] -> 8 at a cost of |8-6| = 2,

// then the total cost will be 1 + 1 + 2 = 4.






using System.CodeDom.Compiler;
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
     * Complete the 'formingMagicSquare' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY s as parameter.
     */

    public static int formingMagicSquare(List<List<int>> s)
    {
        int minimumCost = int.MaxValue;
        List<List<List<int>>> magicSquares;

        // Build up all 3x3 magic squares
        magicSquares = findAllMagicSquare(9, 3, 15);

        // OR

        // Hard coding all possibilities of a 3x3 magic square i.e. 8 possibilities
        magicSquares = new List<List<List<int>>>()
        {
            new List<List<int>>() { 
                new List<int>() { 4, 9, 2 }, 
                new List<int>() { 3, 5, 7 }, 
                new List<int>() { 8, 1, 6 } 
            },
            new List<List<int>>() { 
                new List<int>() { 4, 3, 8 }, 
                new List<int>() { 9, 5, 1 }, 
                new List<int>() { 2, 7, 6 } 
            },
            new List<List<int>>() { 
                new List<int>() { 2, 9, 4 }, 
                new List<int>() { 7, 5, 3 }, 
                new List<int>() { 6, 1, 8 } 
            },
            new List<List<int>>() { 
                new List<int>() { 2, 7, 6 }, 
                new List<int>() { 9, 5, 1 }, 
                new List<int>() { 4, 3, 8 } 
            },
            new List<List<int>>() { 
                new List<int>() { 8, 1, 6 }, 
                new List<int>() { 3, 5, 7 }, 
                new List<int>() { 4, 9, 2 } 
            },
            new List<List<int>>() { 
                new List<int>() { 8, 3, 4 }, 
                new List<int>() { 1, 5, 9 }, 
                new List<int>() { 6, 7, 2 } 
            },
            new List<List<int>>() { 
                new List<int>() { 6, 7, 2 }, 
                new List<int>() { 1, 5, 9 }, 
                new List<int>() { 8, 3, 4 } 
            },
            new List<List<int>>() { 
                new List<int>() { 6, 1, 8 }, 
                new List<int>() { 7, 5, 3 }, 
                new List<int>() { 2, 9, 4 } 
            },
        };

        // Calculate minimum cost
        foreach (List<List<int>> magicSquare in magicSquares)
        {
            int cost = calculateReplacementCost(s, magicSquare);

            // Update minimum cost
            if (cost < minimumCost)
                minimumCost = cost;
        }
        return minimumCost;
    }

    static List<List<List<int>>> findAllMagicSquare(int n, int k, int desiredSum)
    {
        // Construct all matrix K x K
        List<List<List<int>>> squares = permuteSquares(n, k, desiredSum);

        // Create a array list to store all magic squares
        List<List<List<int>>> magicSquares = new List<List<List<int>>>();

        // Iterate through each squares to find valid magic squares
        foreach (List<List<int>> square in squares)
        {
            if (isMagicSquare(square))
                magicSquares.Add(square);
        }

        return magicSquares;
    }

    static List<List<List<int>>> permuteSquares(int n, int k, int desiredSum)
    {
        // Construct all possible permutations N objects taken K
        List<List<int>> rows = permute(n, k, desiredSum);

        // Create convenient collections
        List<List<int>> current = new List<List<int>>();
        List<List<List<int>>> results = new List<List<List<int>>>();

        bool[] used = new bool[rows.Count + 1];

        // Construct all permutaions of rows taken K (squares),and store into results list
        permuteSquaresHelper(k, used, rows, current, ref results);
        return results;
    }

    static void permuteSquaresHelper(int k,
                                   bool[] used,
                                   List<List<int>> rows,
                                   List<List<int>> current,
                                   ref List<List<List<int>>> results)
    {
        // Base case: if k is 0, add current into results
        if (k == 0)
        {
            results.Add(current.ToList());
            return;
        }

        // Recursive case
        int n = rows.Count;
        for (int i = 0; i < n; i++)
        {
            if (!used[i])
            {
                List<List<int>> updatedCurrent = current.ToList();
                updatedCurrent.Add(rows[i].ToList());
                used[i] = true;
                permuteSquaresHelper(k - 1, used, rows, updatedCurrent, ref results);
                used[i] = false; //backtracking
            }
        }
    }

    /// <summary>
    /// Find all permutaions 'n' items taken 'k' having sum is desiredSum, in range[1:N]
    /// </summary>
    /// <param name="n">Last value to permute</param>
    /// <param name="k"></param>
    /// <param name="desiredSum"></param>
    /// <returns>List of generated permutaions</returns>
    static List<List<int>> permute(int n, int k, int desiredSum)
    {
        List<List<int>> results = new List<List<int>>();
        List<int> current = new List<int>();
        bool[] used = new bool[n + 1];
        permuteHelper(n, k, desiredSum, used, current, ref results);
        return results;
    }

    static void permuteHelper(int n, int k, int desiredSum,
                            bool[] used,
                            List<int> current,
                            ref List<List<int>> results)
    {
        // Basecase: if k is 0 store current into results         
        if (k == 0)
        {
            // Calculate sum of current list
            int sum = 0;

            foreach (int num in current)
            {
                sum += num;
            }

            if (sum == desiredSum)
            {
                results.Add(current.ToList());
            }
            return;
        }

        // Recursive case:
        for (int i = 1; i <= n; i++)
        {

            if (!used[i])
            {
                current.Add(i);
                used[i] = true;
                permuteHelper(n, k - 1, desiredSum, used, current, ref results);
                used[i] = false; //backtrack
                current.RemoveAt(current.Count - 1);
            }
        }
    }

    static bool isMagicSquare(List<List<int>> matrix)
    {
        // If the given matrix isn't containing unique integers then return false.
        if (!isAllUniqueSquare(matrix))
            return false;

        // Get the size of the given matrix (assuming it's square)
        int n = matrix.Count();

        // Sum of the first row (initial value)
        int desiredSum = matrix[0].Sum();

        // Check horizontal sums
        foreach (List<int> row in matrix)
        {
            int rowSum = row.Sum();

            if (rowSum != desiredSum)
                return false;
        }

        // Check vertical sums
        for (int col = 0; col < n; col++)
        {
            int colSum = 0;
            for (int row = 0; row < n; row++)
            {
                colSum += matrix[row][col];
            }

            if (colSum != desiredSum)
                return false;
        }

        // Check the main diagonal sum (top-left to bottom-right)
        {
            int mainDiagonalSum = 0;

            for (int i = 0; i < n; i++)
            {
                mainDiagonalSum += matrix[i][i];
            }

            if (mainDiagonalSum != desiredSum)
                return false;
        }

        // Check the secondary diagonal sum (top-right to bottom-left)
        {
            int secondaryDiagonalSum = 0;
            for (int i = 0; i < n; i++)
            {
                secondaryDiagonalSum += matrix[i][n - i - 1];
            }

            if (secondaryDiagonalSum != desiredSum)
                return false;
        }

        // If all checks pass, the given matrix is a magic square
        return true;
    }

    /// <summary>
    /// Validates the given square matrix is unique integers or not
    /// </summary>
    /// <param name="square">List of integers that represents rows of a square</param>
    /// <returns>Return false if the matrix doesn't contain unique elements, otherwise return true.</returns>
    static bool isAllUniqueSquare(List<List<int>> square)
    {
        int distinctValuesCount = square.SelectMany(x => x).Distinct().Count();

        return square.Count * square.Count == distinctValuesCount;
    }

    /// <summary>
    /// Calculate replacement cost of a square matrix and a square magic.
    /// </summary>
    /// <param name="matrix">List of list integers that represents matrix rows</param>
    /// <param name="squareMagic"> List of list integers that represents square magic rows</param>
    /// <returns>Integer Replacement Cost</returns>
    static int calculateReplacementCost(List<List<int>> matrix, List<List<int>> squareMagic)
    {
        int cost = 0;
        int numberOfRows = matrix.Count;
        int numberOfCols = matrix[0].Count;

        //Iterate through all given matrix items to calculate replacement cost.
        for (int row = 0; row < numberOfRows; row++)
        {
            for (int col = 0; col < numberOfCols; col++)
            {
                //Get the value from matrix
                int value = matrix[row][col];

                //Get the value from magic square
                int magic = squareMagic[row][col];

                if (value != magic)
                {
                    cost += Math.Abs(value - magic);
                }
            }
        }

        return cost;
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        List<List<int>> s = new List<List<int>>();

        for (int i = 0; i < 3; i++)
        {
            s.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(sTemp => Convert.ToInt32(sTemp)).ToList());
        }

        int result = Result.formingMagicSquare(s);

        Console.WriteLine(result);
    }
}






//! Input 0
// 4 9 2
// 3 5 7
// 8 1 5

//! Output 0
// 1


//! Input 1
// 4 8 2
// 4 5 7
// 6 1 6

//! Output 1
// 4