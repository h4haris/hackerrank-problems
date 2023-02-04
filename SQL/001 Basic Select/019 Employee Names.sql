--* Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.

--? Input Format

-- The Employee table containing employee data for a company is described as follows:

-- | Column      | Type    |
-- | ----------- | ------- |
-- | employee_id | Integer |
-- | name        | String  |
-- | months      | Integer |
-- | salary      | Integer |

-- where employee_id is an employee's ID number, name is their name, months is the total number of months they've been working for the company, and salary is their monthly salary.


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
-- Bonnie
-- Frank
-- Joe
-- Kimberly
-- Lisa
-- Michael
-- Patrick
-- Rose
-- Todd



select name from Employee
order by name


-- Alan 
-- Amy 
-- Andrew 
-- Andrew 
-- Angela 
-- Ann 
-- Anna 
-- Anthony 
-- Antonio 
-- Benjamin 
-- Bonnie 
-- Brandon 
-- Brandon 
-- Brian 
-- Carol 
-- Charles 
-- Christina 
-- Christina 
-- Christine 
-- Christine 
-- David 
-- David 
-- David 
-- Debra 
-- Diana 
-- Diana 
-- Donna 
-- Dorothy 
-- Dorothy 
-- Dorothy 
-- Earl 
-- Elizabeth 
-- Emily 
-- Evelyn 
-- Evelyn 
-- Frank 
-- Gerald 
-- Gloria 
-- Gregory 
-- Harry 
-- Jacqueline 
-- James 
-- James 
-- Jean 
-- Jennifer 
-- Jesse 
-- Jesse 
-- Joe 
-- Joe 
-- John 
-- John 
-- Jonathan 
-- Joseph 
-- Joyce 
-- Joyce 
-- Julia 
-- Keith 
-- Kelly 
-- Kevin 
-- Kimberly 
-- Kimberly 
-- Lawrence 
-- Lillian 
-- Linda 
-- Lisa 
-- Lori 
-- Louise 
-- Maria 
-- Marilyn 
-- Marilyn 
-- Marilyn 
-- Martha 
-- Martin 
-- Matthew 
-- Melissa 
-- Michael 
-- Michelle 
-- Nancy 
-- Norma 
-- Pamela 
-- Patricia 
-- Patrick 
-- Paul 
-- Paul 
-- Paula 
-- Paula 
-- Phillip 
-- Ralph 
-- Robert 
-- Robin 
-- Robin 
-- Rose 
-- Roy 
-- Stephanie 
-- Tammy 
-- Timothy 
-- Todd 
-- Victor 
-- Walter 
-- Willie