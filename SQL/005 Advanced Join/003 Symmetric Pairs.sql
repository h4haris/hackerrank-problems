--* You are given a table, Functions, containing two columns: X and Y.


-- | Column  | Type    |
-- | ------- | ------- |
-- | X       | Integer |
-- | Y       | Integer |


-- Two pairs (X1, Y1) and (X2, Y2) are said to be symmetric pairs if X1 = Y2 and X2 = Y1.

-- Write a query to output all such symmetric pairs in ascending order by the value of X. List the rows such that X1 ≤ Y1.


--? Sample Input


-- | X   | Y   |
-- | --- | --- |
-- | 20  | 20  |
-- | 20  | 20  |
-- | 20  | 21  |
-- | 23  | 22  |
-- | 22  | 23  |
-- | 21  | 20  |


--? Sample Output

-- 20 20
-- 20 21
-- 22 23





Select distinct result.X, result.Y from
(
    select f1.X, f1.Y from 
    (select X,Y, ROW_NUMBER() OVER (ORDER BY X) RN from functions) as f1,
    (select X,Y, ROW_NUMBER() OVER (ORDER BY X) RN from functions) as f2 
    where f1.RN != f2.RN and f1.X = f2.Y and f2.X = f1.Y
) as result
where result.X <= result.Y
order by result.X


-- 2 24 
-- 4 22 
-- 5 21 
-- 6 20 
-- 8 18 
-- 9 17 
-- 11 15
-- 13 13