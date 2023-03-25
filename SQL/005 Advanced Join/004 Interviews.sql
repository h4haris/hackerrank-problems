--* Samantha interviews many candidates from different colleges using coding challenges and contests. Write a query to print the contest_id, hacker_id, name, and the sums of total_submissions, total_accepted_submissions, total_views, and total_unique_views for each contest sorted by contest_id. Exclude the contest from the result if all four sums are 0.

--! Note: A specific contest can be used to screen candidates at more than one college, but each college only holds 1 screening contest.

--? Input Format

-- The following tables hold interview data:


--! Contests: The contest_id is the id of the contest, hacker_id is the id of the hacker who created the contest, and name is the name of the hacker.

-- | Column     | Type    |
-- | ---------- | ------- |
-- | contest_id | Integer |
-- | hacker_id  | Integer |
-- | name       | String  |


--! Colleges: The college_id is the id of the college, and contest_id is the id of the contest that Samantha used to screen the candidates.

-- | Column     | Type    |
-- | ---------- | ------- |
-- | college_id | Integer |
-- | contest_id | Integer |


--! Challenges: The challenge_id is the id of the challenge that belongs to one of the contests whose contest_id Samantha forgot, and college_id is the id of the college where the challenge was given to candidates.

-- | Column           | Type    |
-- | ---------------- | ------- |
-- | challenge_id     | Integer |
-- | college_id       | Integer |


--! View_Stats: The challenge_id is the id of the challenge, total_views is the number of times the challenge was viewed by candidates, and total_unique_views is the number of times the challenge was viewed by unique candidates.

-- | Column             | Type    |
-- | ------------------ | ------- |
-- | challenge_id       | Integer |
-- | total_views        | Integer |
-- | total_unique_views | Integer |


--! Submission_Stats: The challenge_id is the id of the challenge, total_submissions is the number of submissions for the challenge, and total_accepted_submission is the number of submissions that achieved full scores.

-- | Column                     | Type    |
-- | -------------------------- | ------- |
-- | challenge_id               | Integer |
-- | total_submissions          | Integer |
-- | total_accepted_submissions | Integer |


--? Sample Input

--! Contests Table:

-- | contest_id | hacker_id  | name     |
-- | ---------- | ---------- | -------- |
-- | 66406      | 17973      | Rose     |
-- | 66556      | 79153      | Angela   |
-- | 94828      | 80275      | Frank    |


--! Colleges Table:

-- | college_id | contest_id |
-- | ---------- | ---------- |
-- | 11219      | 66406      |
-- | 32473      | 66556      |
-- | 56685      | 94828      |


--! Challenges Table:

-- | challenge_id | college_id  |
-- | ------------ | ----------- |
-- | 18765        | 11219       |
-- | 47127        | 11219       |
-- | 60292        | 32473       |
-- | 72974        | 56685       |


--! View_Stats Table:

-- | challenge_id | total_views  | total_unique_views |
-- | ------------ | ------------ | ------------------ |
-- | 47127        | 26           | 19                 |
-- | 47127        | 15           | 14                 |
-- | 18765        | 43           | 10                 |
-- | 18765        | 72           | 13                 |
-- | 75516        | 35           | 17                 |
-- | 60292        | 11           | 10                 |
-- | 72974        | 41           | 15                 |
-- | 75516        | 75           | 11                 |


--! Submission_Stats Table:

-- | challenge_id | total_submissions  | total_accepted_submissions |
-- | ------------ | ------------------ | -------------------------- |
-- | 75516        | 34                 | 12                         |
-- | 47127        | 27                 | 10                         |
-- | 47127        | 56                 | 18                         |
-- | 75516        | 74                 | 12                         |
-- | 75516        | 83                 | 8                          |
-- | 72974        | 68                 | 24                         |
-- | 72974        | 82                 | 14                         |
-- | 47127        | 28                 | 11                         |


--? Sample Output

-- 66406 17973 Rose 111 39 156 56
-- 66556 79153 Angela 0 0 11 10
-- 94828 80275 Frank 150 38 41 15


--? Explanation

-- The contest 66406 is used in the college 11219. In this college 11219, challenges 18765 and 47127 are asked, so from the view and submission stats:

---- Sum of total submissions = 27 + 56 + 28 = 111

---- Sum of total accepted submissions = 10 + 18 + 11 = 39

---- Sum of total views = 43 + 72 + 26 + 15 = 156

---- Sum of total unique views = 10 + 13 + 19 + 14 = 56

-- Similarly, we can find the sums for contests 66556 and 94828.




Select c.contest_id, c.hacker_id, c.name, 
Sum(sstat.ts), Sum(sstat.tas), Sum(vstat.tv), Sum(vstat.tuv)
from Contests as c
left join Colleges as col on c.contest_id  = col.contest_id 
left join Challenges as chal on col.college_id  = chal.college_id 
left join 
(
    Select challenge_id, SUM(total_views) as tv, SUM(total_unique_views) as tuv
    from View_Stats
	group by challenge_id
) as vstat on chal.challenge_id  = vstat.challenge_id 
left join 
(
    Select challenge_id, SUM(total_submissions) as ts, SUM(total_accepted_submissions) as tas
    from Submission_Stats
    group by challenge_id
) as sstat on chal.challenge_id  = sstat.challenge_id 
group by c.contest_id, c.hacker_id, c.name
having 
(
    SUM(sstat.ts) > 0 or
    SUM(sstat.tas) > 0 or
    SUM(vstat.tv)> 0 or
    SUM(vstat.tuv)> 0
)
order by c.contest_id


-- 845 579 Rose 1987 580 1635 566 
-- 858 1053 Angela 703 160 1002 384 
-- 883 1055 Frank 1121 319 1217 338 
-- 1793 2655 Patrick 1337 360 1216 412 
-- 2374 2765 Lisa 2733 815 3368 904 
-- 2963 2845 Kimberly 4306 1221 3603 1184 
-- 3584 2873 Bonnie 2492 652 3019 954 
-- 4044 3067 Michael 1323 449 1722 528 
-- 4249 3116 Todd 1452 376 1767 463 
-- 4269 3256 Joe 1018 372 1766 530 
-- 4483 3386 Earl 1911 572 1644 477 
-- 4541 3608 Robert 1886 516 1694 504 
-- 4601 3868 Amy 1900 639 1738 548 
-- 4710 4255 Pamela 2752 639 2378 705 
-- 4982 5639 Maria 2705 759 2558 711 
-- 5913 5669 Joe 2646 790 3181 835 
-- 5994 5713 Linda 3369 967 3048 954 
-- 6939 6550 Melissa 2842 859 3574 1004 
-- 7266 6947 Carol 2758 665 3044 835 
-- 7280 7030 Paula 1963 554 886 259 
-- 7484 7033 Marilyn 3217 934 3795 1061 
-- 7734 7386 Jennifer 3780 1015 3637 1099 
-- 7831 7787 Harry 3190 883 2933 1012 
-- 7862 8029 David 1738 476 1475 472 
-- 8812 8147 Julia 1044 302 819 266 
-- 8825 8438 Kevin 2624 772 2187 689 
-- 9136 8727 Paul 4205 1359 3125 954 
-- 9613 8762 James 3438 943 3620 1046 
-- 10568 8802 Kelly 1907 620 2577 798 
-- 11100 8809 Robin 1929 613 1883 619 
-- 12742 9203 Ralph 1523 413 1344 383 
-- 12861 9644 Gloria 1596 536 2089 623 
-- 12865 10108 Victor 2076 597 1259 418 
-- 13503 10803 David 924 251 584 167 
-- 13537 11390 Joyce 1381 497 1784 538 
-- 13612 12592 Donna 1981 550 1487 465 
-- 14502 12923 Michelle 1510 463 1830 545 
-- 14867 13017 Stephanie 2471 676 2291 574 
-- 15164 13256 Gerald 2570 820 2085 607 
-- 15804 13421 Walter 1454 459 1396 476 
-- 15891 13569 Christina 2188 710 2266 786 
-- 16063 14287 Brandon 1804 580 1621 521 
-- 16415 14311 Elizabeth 4535 1366 3631 1071 
-- 18477 14440 Joseph 1320 391 1419 428 
-- 18855 16973 Lawrence 2967 1020 3371 1011 
-- 19097 17123 Marilyn 2956 807 2554 750 
-- 19575 17562 Lori 2590 863 2627 760