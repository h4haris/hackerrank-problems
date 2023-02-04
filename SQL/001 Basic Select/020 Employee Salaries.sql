--* Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than $2000 per month who have been employees for less than 10 months. Sort your result by ascending employee_id.

--? Input Format

-- The Employee table containing employee data for a company is described as follows:

-- | Column      | Type    |
-- | ----------- | ------- |
-- | employee_id | Integer |
-- | name        | String  |
-- | months      | Integer |
-- | salary      | Integer |

-- where employee_id is an employee's ID number, name is their name, months is the total number of months they've been working for the company, and salary is the their monthly salary.


--? Sample Input

-- | ID | name     | months | salary |
-- | -- | -------- | ------ | ------ |
-- | 1  | Rose     | 15     | 1968   |
-- | 2  | Angela   | 1      | 3443   |
-- | 3  | Frank    | 17     | 1608   |
-- | 4  | Patrick  | 7      | 1345   |
-- | 4  | Lisa     | 11     | 2330   |
-- | 4  | Kimberly | 16     | 4372   |
-- | 4  | Bonnie   | 8      | 1771   |
-- | 4  | Michael  | 6      | 2017   |
-- | 4  | Todd     | 5      | 3396   |
-- | 4  | Joe      | 9      | 3573   |


--? Sample Output

-- Angela
-- Michael
-- Todd
-- Joe


--? Explanation

-- Angela has been an employee for 1 month and earns $3443 per month.

-- Michael has been an employee for 6 months and earns $2017 per month.

-- Todd has been an employee for 5 months and earns $3396 per month.

-- Joe has been an employee for 9 months and earns $3573 per month.

-- We order our output by ascending employee_id.




select name from Employee
where salary > 2000
and months < 10
order by employee_id


-- Rose 
-- Patrick 
-- Lisa 
-- Amy 
-- Pamela 
-- Jennifer 
-- Julia 
-- Kevin 
-- Paul 
-- Donna 
-- Michelle 
-- Christina 
-- Brandon 
-- Joseph 
-- Jesse 
-- Paula 
-- Louise 
-- Evelyn 
-- Emily 
-- Jonathan 
-- Nancy 
-- Benjamin 
-- Roy 
-- Diana 
-- Christine