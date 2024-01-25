// HackerLand University has the following grading policy:

////?    Every student receives a 'grade' in the inclusive range from 0 to 100.
////?    Any 'grade' less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's 'grade' according to these rules:

////?    If the difference between the 'grade' and the next multiple of 5 is less than 3, round 'grade' up to the next multiple of 5.
////?    If the value of 'grade' is less than 38, no rounding occurs as the result will still be a failing grade.


//* Example

////?    grade = 84 round to  (85 - 84 is less than 3)
////?    grade = 29 do not round (result is less than 40)
////?    grade = 57 do not round (60 - 57 is 3 or higher)

// Given the initial value of 'grade' for each of Sam's 'n' students, write code to automate the rounding process.


//* Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

////?    int grades[n]: the grades before rounding


//* Returns

////?   int[n]: the grades after rounding as appropriate


//* Input Format

// The first line contains a single integer, 'n', the number of students.
// Each line 'i' of the 'n' subsequent lines contains a single integer, grades[i].

//* Constraints
////?   1 <= n <= 60
////?   0 <= grades[i] <= 100



//* Sample Input
////?   4
////?   73
////?   67
////?   38
////?   33

//* Sample Output
////?   75
////?   67
////?   40
////?   33

//* Explanation 

// 1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75-73 < 3, the student's grade is rounded to 75.
// 2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70-67 = 3, the grade will not be modified and the student's final grade is 67.
// 3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40-38 < 3, the student's grade will be rounded to 40.
// 4. Student 4 received a grade below 33, so the grade will not be modified and the student's final grade is 33.



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
     * Complete the 'gradingStudents' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY grades as parameter.
     */

    public static List<int> gradingStudents(List<int> grades)
    {
        List<int> modified = new List<int>();
        
        grades.ForEach(x => {
            if(x < 38) modified.Add(x);
            else{
                var diff = (5 - x % 5);
                
                if(diff < 3) modified.Add(x + diff);
                else modified.Add(x);
            }
        });
        
        return modified;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int gradesCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> grades = new List<int>();

        for (int i = 0; i < gradesCount; i++)
        {
            int gradesItem = Convert.ToInt32(Console.ReadLine().Trim());
            grades.Add(gradesItem);
        }

        List<int> result = Result.gradingStudents(grades);

        Console.Write(String.Join("\n", result));
    }
}



//! Input
// 4
// 73
// 67
// 38
// 33

//! Output
// 75
// 67
// 40
// 33