--* You are given two tables: Students and Grades. 

--! Students contains three columns ID, Name and Marks.

-- | Column    | Type    |
-- | --------- | ------- |
-- | ID        | Integer |
-- | Name      | String  |
-- | Marks     | Integer |


--! Grades contains the following data:


-- | Grade  | Min_Mark | Max_Mark |
-- | ------ | -------- | -------- |
-- | 1      | 0        | 9        |
-- | 2      | 10       | 19       |
-- | 3      | 20       | 29       |
-- | 4      | 30       | 39       |
-- | 5      | 40       | 49       |
-- | 6      | 50       | 59       |
-- | 7      | 60       | 69       |
-- | 8      | 70       | 79       |
-- | 9      | 80       | 89       |
-- | 10     | 90       | 100      |


-- Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark. Ketty doesn't want the NAMES of those students who received a grade lower than 8. The report must be in descending order by grade -- i.e. higher grades are entered first. If there is more than one student with the same grade (8-10) assigned to them, order those particular students by their name alphabetically. Finally, if the grade is lower than 8, use "NULL" as their name and list them by their grades in descending order. If there is more than one student with the same grade (1-7) assigned to them, order those particular students by their marks in ascending order.

-- Write a query to help Eve.


--? Sample Input

-- | ID  | Name     | Marks |
-- | --- | -------- | ----- |
-- | 1   | Julia    | 88    |
-- | 2   | Samantha | 68    |
-- | 3   | Maria    | 99    |
-- | 4   | Scarlet  | 78    |
-- | 5   | Ashley   | 63    |
-- | 6   | Jane     | 81    |


--? Sample Output

-- Maria 10 99
-- Jane 9 81
-- Julia 9 88 
-- Scarlet 8 78
-- NULL 7 63
-- NULL 7 68

--? Note

-- Print "NULL"  as the name if the grade is less than 8.

--? Explanation

-- Consider the following table with the grades assigned to the students:

-- | ID  | Name     | Marks | Grade |
-- | --- | -------- | ----- | ----- |
-- | 1   | Julia    | 88    | 9     |
-- | 2   | Samantha | 68    | 7     |
-- | 3   | Maria    | 99    | 10    |
-- | 4   | Scarlet  | 78    | 8     |
-- | 5   | Ashley   | 63    | 7     |
-- | 6   | Jane     | 81    | 9     |

-- So, the following students got 8, 9 or 10 grades:

-- Maria (grade 10)
-- Jane (grade 9)
-- Julia (grade 9)
-- Scarlet (grade 8)





SELECT Name, Grade, Marks FROM 
(
    (Select s.Name, g.Grade, s.Marks from Students s, Grades g 
    where s.Marks between g.Min_Mark and g.Max_Mark and g.Grade >=8)
    
    Union 
    
    (Select NULL, g.Grade, s.Marks from Students s , Grades g 
    where s.Marks between g.Min_Mark and g.Max_Mark and g.grade <8)
) as result order by Grade desc, Name, Marks


-- Britney 10 95 
-- Heraldo 10 94 
-- Julia 10 96 
-- Kristeen 10 100 
-- Stuart 10 99 
-- Amina 9 89 
-- Christene 9 88 
-- Salma 9 81 
-- Samantha 9 87 
-- Scarlet 9 80
-- Vivek 9 84 
-- Aamina 8 77 
-- Belvet 8 78 
-- Paige 8 74 
-- Priya 8 76 
-- Priyanka 8 77  
-- NULL 7 64 
-- NULL 7 66 
-- NULL 6 55 
-- NULL 4 34 
-- NULL 3 24