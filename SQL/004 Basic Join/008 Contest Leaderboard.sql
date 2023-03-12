--* You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!

-- The total score of a hacker is the sum of their maximum scores for all of the challenges. Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with a total score of 0 from your result.

--? Input Format

-- The following tables contain contest data:


--! Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker.

-- | Column    | Type    |
-- | --------- | ------- |
-- | hacker_id | Integer |
-- | name      | String  |


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
-- | 4071       | Rose     |
-- | 4806       | Angela   |
-- | 26071      | Frank    |
-- | 49438      | Patrick  |
-- | 74842      | Lisa     |
-- | 80305      | Kimberly |
-- | 84072      | Bonnie   |
-- | 87868      | Michael  |
-- | 92118      | Todd     |
-- | 95895      | Joe      |


--! Submissions Table:

-- | submission_id | hacker_id  | challenge_id | score  |
-- | ------------- | ---------- | ------------ | ------ |
-- | 67194         | 74842      | 63132        | 76     |
-- | 64479         | 74842      | 19797        | 98     |
-- | 40742         | 26071      | 49593        | 20     |
-- | 17513         | 4806       | 49593        | 32     |
-- | 69846         | 80305      | 19797        | 19     |
-- | 41002         | 26071      | 89343        | 36     |
-- | 52826         | 49438      | 49593        | 9      |
-- | 31093         | 26071      | 19797        | 2      |
-- | 81614         | 84072      | 49593        | 100    |
-- | 44829         | 26071      | 89343        | 17     |
-- | 75147         | 80305      | 49593        | 48     |
-- | 14115         | 4806       | 49593        | 76     |
-- | 6943          | 4071       | 19797        | 95     |
-- | 12855         | 4806       | 25917        | 13     |
-- | 73343         | 80305      | 49593        | 42     |
-- | 84264         | 84072      | 63132        | 0      |
-- | 9951          | 4071       | 49593        | 43     |
-- | 45104         | 49438      | 25917        | 34     |
-- | 53795         | 74842      | 19797        | 5      |
-- | 26363         | 26071      | 19797        | 29     |
-- | 10063         | 4071       | 49593        | 96     |


--? Sample Output

-- 4071 Rose 191
-- 74842 Lisa 174
-- 84072 Bonnie 100
-- 4806 Angela 89
-- 26071 Frank 85
-- 80305 Kimberly 67
-- 49438 Patrick 43


--? Explanation

-- Hacker 4071 submitted solutions for challenges 19797 and 49593, so the total score = 95 + max(43,96) = 191.

-- Hacker 74842 submitted solutions for challenges 19797 and 63132, so the total score = max(98,5) + 76 = 174

-- Hacker 84072 submitted solutions for challenges 49593 and 63132, so the total score = 100 + 0 = 100.

-- The total scores for hackers 4806, 26071, 80305, and 49438 can be similarly calculated.




Select h.hacker_id, h.name, Sum(s.sc) as ts from Hackers as h
inner join 
(
    SELECT hacker_id, challenge_id, Max(Score) as sc
    from Submissions 
    group by hacker_id, challenge_id
    having Max(Score) <> 0
) as s 
on h.hacker_id = s.hacker_id
group by h.hacker_id, h.name
order by ts desc, h.hacker_id





-- 76971 Ashley 760 
-- 84200 Susan 710 
-- 76615 Ryan 700 
-- 82382 Sara 640 
-- 79034 Marilyn 580 
-- 78552 Harry 570 
-- 74064 Helen 540 
-- 78688 Sean 540 
-- 83832 Jason 540 
-- 72796 Jose 510 
-- 76216 Carlos 510 
-- 90304 Lillian 500 
-- 88507 Patrick 490 
-- 72505 Keith 480 
-- 88018 Dennis 480 
-- 78918 Julia 470 
-- 85319 Shawn 470 
-- 71357 Bobby 460 
-- 72047 Elizabeth 460 
-- 74147 Jason 460 
-- 80587 Ruth 460 
-- 89286 Jennifer 460 
-- 75626 Gerald 450 
-- 85788 Julia 440 
-- 90588 Charles 440 
-- 87978 Melissa 410 
-- 78547 Julia 400 
-- 82861 Denise 400 
-- 92906 Philip 400 
-- 94035 Doris 400 
-- 85042 Irene 380 
-- 79315 Susan 370 
-- 79254 Cheryl 340 
-- 81859 Jane 290 
-- 93258 Jimmy 290 
-- 87948 Linda 280 
-- 84196 Rose 270 
-- 85266 Jonathan 250 
-- 73214 Ann 230 
-- 3683 Robert 212 
-- 80554 Judith 210 
-- 55642 Elizabeth 203 
-- 6999 Linda 201 
-- 35308 Andrew 187 
-- 38308 Charles 187 
-- 45122 Patricia 176 
-- 2380 Todd 175 
-- 42279 Andrew 175 
-- 25310 Martin 169 
-- 25580 Paul 169 
-- 12200 Ralph 168 
-- 4881 Maria 164 
-- 10582 Paul 164 
-- 48534 Bobby 164 
-- 15940 Christina 163 
-- 66274 Chris 152 
-- 33393 Jonathan 151 
-- 44305 Jesse 147 
-- 68133 Janet 144 
-- 30917 Brandon 141 
-- 42122 Jean 136 
-- 59495 Stephen 133 
-- 70246 Kelly 133 
-- 49116 Wayne 131 
-- 47456 Aaron 127 
-- 55456 Thomas 127 
-- 66530 Jennifer 122 
-- 14015 Michelle 121 
-- 23032 Anthony 121 
-- 1869 Michael 120 
-- 12362 Gloria 120 
-- 39671 Alan 120 
-- 1700 Lisa 115 
-- 20843 John 115 
-- 64693 Sandra 113 
-- 42964 Diana 111 
-- 8352 Marilyn 110 
-- 48165 Dorothy 108 
-- 597 Angela 107 
-- 7850 Paula 107 
-- 32880 Dorothy 102 
-- 31803 Emily 100 
-- 9109 Julia 98 
-- 14446 Stephanie 98 
-- 34429 Norma 98 
-- 50325 Andrew 98 
-- 2751 Joe 97 
-- 19271 Marilyn 97 
-- 46027 Lillian 97 
-- 59991 Alan 97 
-- 64880 Helen 97 
-- 65694 Paul 97 
-- 17265 Brandon 96 
-- 49050 Clarence 95 
-- 54234 Cynthia 95 
-- 26489 Antonio 94 
-- 34553 Nancy 93 
-- 48754 Jeremy 93 
-- 49653 Carolyn 93 
-- 12754 David 91 
-- 18428 Lawrence 91 
-- 48304 Christopher 88 
-- 65153 Larry 88 
-- 49727 Margaret 87 
-- 41656 Robin 86 
-- 63648 Paul 86 
-- 26988 Diana 85 
-- 51558 Albert 83 
-- 2938 Earl 82 
-- 11315 James 81 
-- 28855 Debra 81 
-- 39731 Tammy 81 
-- 88494 Jeremy 80 
-- 56716 Justin 79 
-- 8526 Jennifer 76 
-- 63706 Gerald 75 
-- 486 Rose 74 
-- 28503 Phillip 74 
-- 3845 Amy 73 
-- 61687 Norma 73 
-- 52878 Arthur 72 
-- 69832 Charles 71 
-- 44539 Joyce 70 
-- 12968 Joyce 69 
-- 27705 Dorothy 69 
-- 36555 Benjamin 69 
-- 7725 Carol 67 
-- 48588 Carol 67 
-- 40617 Anna 66 
-- 66461 Steven 66 
-- 12671 Victor 64 
-- 48556 Gerald 64 
-- 31300 Ann 63 
-- 57314 Albert 61 
-- 7680 Melissa 60 
-- 14579 Gerald 60 
-- 33538 Dorothy 60 
-- 42591 Roy 59 
-- 1755 Bonnie 58 
-- 45237 Gregory 58 
-- 65689 Alan 57 
-- 19635 Lori 56 
-- 964 Patrick 55 
-- 8670 Harry 55 
-- 23773 Paula 55 
-- 27281 John 55 
-- 21323 Timothy 54 
-- 45908 Christine 54 
-- 61481 Joshua 54 
-- 66539 Bonnie 53 
-- 12089 Robin 52 
-- 28155 Evelyn 51 
-- 66566 Shirley 51 
-- 52382 Judy 50 
-- 54737 Jerry 47 
-- 21417 Christine 46 
-- 63492 Melissa 46 
-- 67347 Jeffrey 46 
-- 13279 Donna 45 
-- 20328 Matthew 45 
-- 24185 Kimberly 45 
-- 36517 Keith 45 
-- 41148 James 42 
-- 69289 Albert 42 
-- 4404 Pamela 41 
-- 48411 Bobby 39 
-- 5787 Joe 38 
-- 28619 Evelyn 36 
-- 64099 Ronald 35 
-- 20360 Jesse 34 
-- 58583 James 34 
-- 1746 Kimberly 32 
-- 775 Frank 31 
-- 26831 Jacqueline 31 
-- 9044 David 30 
-- 62538 Mildred 29 
-- 9113 Kevin 28 
-- 17381 Elizabeth 26 
-- 30731 Willie 22 
-- 18320 Joseph 18 
-- 45831 Brian 18 
-- 14891 Walter 17