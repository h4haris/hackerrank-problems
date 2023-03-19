--* You are given three tables: Students, Friends and Packages. Students contains two columns: ID and Name. Friends contains two columns: ID and Friend_ID (ID of the ONLY best friend). Packages contains two columns: ID and Salary (offered salary in $ thousands per month).

-- | Column  | Type    |
-- | ------- | ------- |
-- | ID      | Integer |
-- | Name    | String  |
---------- Students


-- | Column    | Type    |
-- | --------- | ------- |
-- | ID        | Integer |
-- | FRIEND_ID | Integer |
---------- Friends


-- | Column  | Type    |
-- | ------- | ------- |
-- | ID      | Integer |
-- | Salary  | Float   |
---------- Packages

-- Write a query to output the names of those students whose best friends got offered a higher salary than them. Names must be ordered by the salary amount offered to the best friends. It is guaranteed that no two students got same salary offer.

--? Sample Input


-- | ID  | Name     |
-- | --- | -------- |
-- | 1   | Ashley   |
-- | 2   | Samantha |
-- | 3   | Julia    |
-- | 4   | Scarlet  |
------ Students


-- | ID  | FRIEND_ID  |
-- | --- | ---------- |
-- | 1   | 2          |
-- | 2   | 3          |
-- | 3   | 4          |
-- | 4   | 1          |
------ Friends


-- | ID  | Salary  |
-- | --- | ------- |
-- | 1   | 15.20   |
-- | 2   | 10.06   |
-- | 3   | 11.55   |
-- | 4   | 12.12   |
------ Packages

--? Sample Output

-- Samantha
-- Julia
-- Scarlet

--? Explanation

-- See the following table:

-- | ID            | 1      | 2        | 3      | 4       |
-- | ------------- | ------ | -------- | ------ | ------- |
-- | Name          | Ashley | Samantha | Julia  | Scarlet |
-- | Salary        | 15.20  | 10.06    | 11.55  | 12.12   |
-- | Friend ID     | 2      | 3        | 4      | 1       |
-- | Friend Salary | 10.06  | 11.55    | 12.12  | 15.20   |

--Now,

--! Samantha's best friend got offered a higher salary than her at 11.55
--! Julia's best friend got offered a higher salary than her at 12.12
--! Scarlet's best friend got offered a higher salary than her at 15.2
--! Ashley's best friend did NOT get offered a higher salary than her

-- The name output, when ordered by the salary offered to their friends, will be:

--! Samantha
--! Julia
--! Scarlet





select a.Name from
(
    select s.ID, s.Name, p.Salary, f.Friend_ID from students as s
    inner join friends as f on s.ID = f.ID 
    inner join packages as p on s.ID = p.ID
) as a
inner join 
(
    select s.ID, p.Salary from students as s
    inner join friends as f on s.ID = f.ID 
    inner join packages as p on f.Friend_ID  = p.ID
) as b
on a.ID = b.ID
where b.Salary > a.Salary
order by b.Salary


-- Stuart 
-- Priyanka 
-- Paige 
-- Jane 
-- Julia 
-- Belvet 
-- Amina 
-- Kristeen 
-- Scarlet 
-- Priya 
-- Meera