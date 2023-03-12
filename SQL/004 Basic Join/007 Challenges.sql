--* Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, and the total number of challenges created by each student. Sort your results by the total number of challenges in descending order. If more than one student created the same number of challenges, then sort the result by hacker_id. If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.

--? Input Format

-- The following tables contain challenge data:


--! Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker.

-- | Column    | Type    |
-- | --------- | ------- |
-- | hacker_id | Integer |
-- | name      | String  |



--! Challenges: The challenge_id is the id of the challenge, and hacker_id is the id of the student who created the challenge.

-- | Column           | Type    |
-- | ---------------- | ------- |
-- | challenge_id     | Integer |
-- | hacker_id        | Integer |



--? Sample Input 0

--! Hackers Table:

-- | hacker_id  | name     |
-- | ---------- | -------- |
-- | 5077       | Rose     |
-- | 21283      | Angela   |
-- | 62743      | Frank    |
-- | 88255      | Patrick  |
-- | 96196      | Lisa     |


--! Challenges Table:

-- | challenge_id | hacker_id  |
-- | ------------ | ---------- |
-- | 61654        | 5077       |
-- | 58302        | 21283      |
-- | 40587        | 88255      |
-- | 29477        | 5077       |
-- | 1220         | 21283      |
-- | 69514        | 21283      |
-- | 46561        | 62743      |
-- | 58077        | 62743      |
-- | 18483        | 88255      |
-- | 76766        | 21283      |
-- | 52382        | 5077       |
-- | 74467        | 21283      |
-- | 33625        | 96196      |
-- | 26053        | 88255      |
-- | 42665        | 62743      |
-- | 12859        | 62743      |
-- | 70094        | 21283      |
-- | 34599        | 88255      |
-- | 54680        | 88255      |
-- | 61881        | 5077       |



--? Sample Output 0

-- 21283 Angela 6
-- 88255 Patrick 5
-- 96196 Lisa 1


--? Sample Input 1

--! Hackers Table:

-- | hacker_id  | name     |
-- | ---------- | -------- |
-- | 12299      | Rose     |
-- | 34856      | Angela   |
-- | 79345      | Frank    |
-- | 80491      | Patrick  |
-- | 81041      | Lisa     |


--! Challenges Table:

-- | challenge_id | hacker_id  |
-- | ------------ | ---------- |
-- | 63963        | 81041      |
-- | 63117        | 79345      |
-- | 28225        | 34856      |
-- | 21989        | 12299      |
-- | 4653         | 12299      |
-- | 70070        | 79345      |
-- | 36905        | 34856      |
-- | 61136        | 80491      |
-- | 17234        | 12299      |
-- | 80308        | 79345      |
-- | 40510        | 34856      |
-- | 79820        | 80491      |
-- | 22720        | 12299      |
-- | 21394        | 12299      |
-- | 36261        | 34856      |
-- | 15334        | 12299      |
-- | 71435        | 79345      |
-- | 23157        | 34856      |
-- | 54102        | 34856      |
-- | 69065        | 80491      |



--? Sample Output 1

-- 12299 Rose 6
-- 34856 Angela 6
-- 79345 Frank 4
-- 80491 Patrick 3
-- 81041 Lisa 1


--? Explanation

-- For Sample Case 0, we can get the following details:

-- | hacker_id  | name     | challenges_created  |
-- | ---------- | -------- | ------------------- |
-- | 21283      | Angela   | 6                   |
-- | 88255      | Patrick  | 5                   |
-- | 5077       | Rose     | 4                   |
-- | 62743      | Frank    | 4                   |
-- | 96196      | Lisa     | 1                   |

-- Students 5077 and 62743 both created 4 challenges, but the maximum number of challenges created is 6 so these students are excluded from the result.

-- For Sample Case 1, we can get the following details:

-- | hacker_id  | name     | challenges_created  |
-- | ---------- | -------- | ------------------- |
-- | 12299      | Rose     | 4                   |
-- | 34856      | Angela   | 6                   |
-- | 79345      | Frank    | 4                   |
-- | 80491      | Patrick  | 5                   |
-- | 81041      | Lisa     | 1                   |

-- Students 12299 and 34856 both created 6 challenges. Because 6 is the maximum number of challenges created, these students are included in the result.





Select h.hacker_id, h.name, count(c.challenge_id) as challenges_created 
from Hackers as h
inner join Challenges as c 
on h.hacker_id = c.hacker_id
Group by h.hacker_id, h.name
Having 
count(c.challenge_id) = 
        (
            SELECT MAX(temp1.cnt) from 
            (
                SELECT COUNT(hacker_id) as cnt
                from Challenges
                group by hacker_id
            ) as temp1
        )

or count(c.challenge_id) in 
        (
            select temp2.cnt from 
            (
                select count(hacker_id) as cnt 
                from Challenges
                group by hacker_id
            ) as temp2
            group by temp2.cnt
            having count(temp2.cnt) = 1
        )
order by challenges_created DESC, h.hacker_id;




-- 5120 Julia 50 
-- 18425 Anna 50 
-- 20023 Brian 50 
-- 33625 Jason 50 
-- 41805 Benjamin 50 
-- 52462 Nicholas 50 
-- 64036 Craig 50 
-- 69471 Michelle 50 
-- 77173 Mildred 50 
-- 94278 Dennis 50 
-- 96009 Russell 50 
-- 96716 Emily 50 
-- 72866 Eugene 42 
-- 37068 Patrick 41 
-- 12766 Jacqueline 40 
-- 86280 Beverly 37 
-- 19835 Joyce 36 
-- 38316 Walter 35 
-- 29483 Jeffrey 34 
-- 23428 Arthur 33 
-- 95437 George 32 
-- 46963 Barbara 31 
-- 87524 Norma 30 
-- 84085 Johnny 29 
-- 39582 Maria 28 
-- 65843 Thomas 27 
-- 5443 Paul 26 
-- 52965 Bobby 25 
-- 77105 Diana 24 
-- 33787 Susan 23 
-- 45855 Clarence 22 
-- 33177 Jane 21 
-- 7302 Victor 20 
-- 54461 Janet 19 
-- 42277 Sara 18 
-- 99388 Mary 16 
-- 31426 Carlos 15 
-- 95010 Victor 14 
-- 27071 Gerald 10 
-- 90267 Edward 9 
-- 72609 Bobby 8