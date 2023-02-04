--* Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

--? Input Format

-- The STUDENTS table is described as follows:

-- | Column | Type    |
-- | ------ | ------- |
-- | ID     | Integer |
-- | Name   | String  |
-- | Marks  | Integer |

-- The Name column only contains uppercase (A-Z) and lowercase (a-z) letters.


--? Sample Input

-- | ID | Name     | Marks |
-- | -- | -------- | ----- |
-- | 1  | Ashley   | 81    |
-- | 2  | Samantha | 75    |
-- | 3  | Julia    | 76    |
-- | 4  | Belvet   | 84    |


--? Sample Output

-- Ashley
-- Julia
-- Belvet

--? Explanation

-- Only Ashley, Julia, and Belvet have Marks > 75. If you look at the last three characters of each of their names, there are no duplicates and 'ley' < 'lia' < 'vet'.


Select Name from STUDENTS
where Marks > 75
order by Right(Name,3) asc, id asc


-- Stuart 
-- Kristeen 
-- Christene 
-- Amina 
-- Aamina 
-- Priya 
-- Heraldo 
-- Scarlet 
-- Julia 
-- Salma 
-- Britney 
-- Priyanka 
-- Samantha 
-- Vivek 
-- Belvet 
-- Devil 
-- Evil