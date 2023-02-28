--* Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. Order your output in descending order by the total number of challenges in which the hacker earned a full score. If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.

--? Input Format

-- The following tables contain contest data:


--! Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker.

-- | Column    | Type    |
-- | --------- | ------- |
-- | hacker_id | Integer |
-- | name      | String  |


--! Difficulty: The difficult_level is the level of difficulty of the challenge, and score is the score of the challenge for the difficulty level.

-- | Column           | Type    |
-- | ---------------- | ------- |
-- | difficulty_level | Integer |
-- | score            | Integer |


--! Challenges: The challenge_id is the id of the challenge, the hacker_id is the id of the hacker who created the challenge, and difficulty_level is the level of difficulty of the challenge.

-- | Column           | Type    |
-- | ---------------- | ------- |
-- | challenge_id     | Integer |
-- | hacker_id        | Integer |
-- | difficulty_level | Integer |


--! Submissions: The submission_id is the id of the submission, hacker_id is the id of the hacker who made the submission, challenge_id is the id of the challenge that the submission belongs to, and score is the score of the submission.

-- | Column        | Type    |
-- | ------------- | ------- |
-- | submission_id | Integer |
-- | hacker_id     | Integer |
-- | challenge_id  | Integer |
-- | score         | Integer |


--? Sample Input

--! Hackers Table:

-- | hacker_id  | name     |
-- | ---------- | -------- |
-- | 5580       | Rose     |
-- | 8439       | Angela   |
-- | 27205      | Frank    |
-- | 52243      | Patrick  |
-- | 52348      | Lisa     |
-- | 57645      | Kimberly |
-- | 77726      | Bonnie   |
-- | 83082      | Michael  |
-- | 86870      | Todd     |
-- | 90411      | Joe      |


--! Difficulty Table:

-- | difficulty_level | score  |
-- | ---------------- | ------ |
-- | 1                | 20     |
-- | 2                | 30     |
-- | 3                | 40     |
-- | 4                | 60     |
-- | 5                | 80     |
-- | 6                | 100    |
-- | 7                | 120    |


--! Challenges Table:

-- | challenge_id | hacker_id  | difficulty_level |
-- | ------------ | ---------- | ---------------- |
-- | 4810         | 77726      | 4                |
-- | 21089        | 27205      | 1                |
-- | 36566        | 5580       | 7                |
-- | 66730        | 52243      | 6                |
-- | 71055        | 52243      | 2                |


--! Submissions Table:

-- | submission_id | hacker_id  | challenge_id | score  |
-- | ------------- | ---------- | ------------ | ------ |
-- | 68628         | 77726      | 36566        | 30     |
-- | 65300         | 77726      | 21089        | 10     |
-- | 40326         | 52243      | 36566        | 77     |
-- | 8941          | 27205      | 4810         | 4      |
-- | 83554         | 77726      | 66730        | 30     |
-- | 43353         | 52243      | 66730        | 0      |
-- | 55385         | 52348      | 71055        | 20     |
-- | 39784         | 27205      | 71055        | 23     |
-- | 94613         | 86870      | 71055        | 30     |
-- | 45788         | 52348      | 36566        | 0      |
-- | 93058         | 86870      | 36566        | 30     |
-- | 7344          | 8439       | 66730        | 92     |
-- | 2721          | 8439       | 4810         | 36     |
-- | 523           | 5580       | 71055        | 4      |
-- | 49105         | 52348      | 66730        | 0      |
-- | 55877         | 57645      | 66730        | 80     |
-- | 38355         | 27205      | 66730        | 35     |
-- | 3924          | 8439       | 36566        | 80     |
-- | 97397         | 90411      | 66730        | 100    |
-- | 84162         | 83082      | 4810         | 40     |
-- | 97431         | 90411      | 71055        | 30     |


--? Sample Output

-- 90411 Joe


--? Explanation

-- Hacker 86870 got a score of 30 for challenge 71055 with a difficulty level of 2, so 86870 earned a full score for this challenge.

-- Hacker 90411 got a score of 30 for challenge 71055 with a difficulty level of 2, so 90411 earned a full score for this challenge.

-- Hacker 90411 got a score of 100 for challenge 66730 with a difficulty level of 6, so 90411 earned a full score for this challenge.

-- Only hacker 90411 managed to earn a full score for more than one challenge, so we print the their hacker_id and name as 2 space-separated values.




Select h.hacker_id, h.name from Hackers as h
inner join Submissions as s on h.hacker_id  = s.hacker_id 
inner join Challenges as c on s.challenge_id  = c.challenge_id 
inner join Difficulty as d on c.difficulty_level  = d.difficulty_level 
where s.score = d.score
group by h.hacker_id,h.name
having count(s.challenge_id) > 1
order by count(s.challenge_id) desc, h.hacker_id


-- 27232 Phillip 
-- 28614 Willie 
-- 15719 Christina 
-- 43892 Roy 
-- 14246 David 
-- 14372 Michelle 
-- 18330 Lawrence 
-- 26133 Jacqueline 
-- 26253 John 
-- 30128 Brandon 
-- 35583 Norma 
-- 13944 Victor 
-- 17295 Elizabeth 
-- 19076 Matthew 
-- 26895 Evelyn 
-- 32172 Jonathan 
-- 41293 Robin 
-- 45386 Christina 
-- 45785 Jesse 
-- 49652 Christine 
-- 13391 Robin 
-- 14366 Donna 
-- 14777 Gerald 
-- 16259 Brandon 
-- 17762 Joseph 
-- 28275 Debra 
-- 36228 Nancy 
-- 37704 Keith 
-- 40226 Anna 
-- 49307 Brian 
-- 12539 Paul 
-- 14363 Joyce 
-- 14658 Stephanie 
-- 19448 Jesse 
-- 20504 John 
-- 20534 Martha 
-- 22196 Anthony 
-- 23678 Kimberly 
-- 28299 David 
-- 30721 Ann 
-- 32254 Dorothy 
-- 46205 Joyce 
-- 47641 Patricia 
-- 13122 James 
-- 13762 Gloria 
-- 14863 Walter 
-- 18690 Marilyn 
-- 18983 Lori 
-- 21212 Timothy 
-- 25732 Antonio 
-- 28250 Evelyn 
-- 30755 Emily 
-- 38852 Benjamin 
-- 42052 Andrew 
-- 44188 Diana 
-- 48984 Gregory 
-- 13380 Kelly 
-- 13523 Ralph 
-- 21463 Christine 
-- 24663 Louise 
-- 26243 Diana 
-- 26289 Dorothy 
-- 39277 Charles 
-- 23278 Paula 
-- 25184 Martin 
-- 32121 Dorothy 
-- 36322 Andrew 
-- 39782 Tammy 
-- 40257 James 
-- 41319 Jean 
-- 10857 Kevin 
-- 25238 Paul 
-- 34242 Marilyn 
-- 39771 Alan 
-- 49789 Lillian 
-- 57947 Justin 
-- 74413 Harry