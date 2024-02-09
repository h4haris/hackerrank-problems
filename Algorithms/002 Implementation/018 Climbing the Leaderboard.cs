// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses 
// Dense Ranking, so its leaderboard works like this:

////?   -   The player with the highest score is ranked number 1 on the leaderboard.

////?   -   Players who have equal scores receive the same ranking number, and the next player(s) receive the 
////?       immediately following ranking number.


//* Example

////?    ranked = [100,90,90,80]
////?    player = [70,80,105]

// The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, 
// their rankings after each game are 4th, 3rd  and 1st. Return [4,3,1].


//* Function Description

// Complete the climbingLeaderboard function in the editor below.

// climbingLeaderboard has the following parameter(s):

////?    int ranked[n]: the leaderboard scores
////?    int player[m]: the player's scores


//* Returns

////?   int[m]: the player's rank after each new score


//* Input Format

// The first line contains an integer 'n', the number of players on the leaderboard.
// The next line contains 'n' space-separated integers ranked[i], the leaderboard scores in decreasing order.
// The next line contains an integer, 'm', the number games the player plays.
// The last line contains 'm' space-separated integers player[j], the game scores.


//* Constraints
////?   1 <= n <= 2 x 10^5
////?   1 <= m <= 2 x 10^5
////?   0 <= ranked[i] <= 10^9 for 0 <= i < n
////?   0 <= player[j] <= 10^9 for 0 <= j < m
////?   The existing leaderboard, 'ranked', is in descending order.
////?   The player's scores, 'player', are in ascending order.

//* Subtask

// For 60% of the maximum score:

////?   1 <= n <= 200
////?   1 <= m <= 200


//* Sample Input 0
////?   7
////?   100 100 50 40 40 20 10
////?   4
////?   5 25 50 120

//* Sample Output 0
////?   6
////?   4
////?   2
////?   1

//* Explanation 0

// Alice starts playing with 7 players already on the leaderboard, which looks like this:

////?    | Rank | Name     | Score  |
////?    | ---- | -------- | ------ |
////?    | 1    | Emma     | 100    |
////?    | 1    | David    | 100    |
////?    | 2    | Caroline | 50     |
////?    | 3    | Ritika   | 40     |
////?    | 3    | Tom      | 40     |
////?    | 4    | Heraldo  | 20     |
////?    | 5    | Riley    | 10     |

// After Alice finishes game 0, her score is 5 and her ranking is 6:

////?    | Rank | Name     | Score  |
////?    | ---- | -------- | ------ |
////?    | 1    | Emma     | 100    |
////?    | 1    | David    | 100    |
////?    | 2    | Caroline | 50     |
////?    | 3    | Ritika   | 40     |
////?    | 3    | Tom      | 40     |
////?    | 4    | Heraldo  | 20     |
////?    | 5    | Riley    | 10     |
////?    | 6    | Alice    | 5      |

// After Alice finishes game 1, her score is 25 and her ranking is 4:

////?    | Rank | Name     | Score  |
////?    | ---- | -------- | ------ |
////?    | 1    | Emma     | 100    |
////?    | 1    | David    | 100    |
////?    | 2    | Caroline | 50     |
////?    | 3    | Ritika   | 40     |
////?    | 3    | Tom      | 40     |
////?    | 4    | Alice    | 25     |
////?    | 5    | Heraldo  | 20     |
////?    | 6    | Riley    | 10     |

// After Alice finishes game 2, her score is 50 and her ranking is tied with Caroline at 2:

////?    | Rank | Name     | Score  |
////?    | ---- | -------- | ------ |
////?    | 1    | Emma     | 100    |
////?    | 1    | David    | 100    |
////?    | 2    | Caroline | 50     |
////?    | 2    | Alice    | 50     |
////?    | 3    | Ritika   | 40     |
////?    | 3    | Tom      | 40     |
////?    | 4    | Heraldo  | 20     |
////?    | 5    | Riley    | 10     |

// After Alice finishes game 3, her score is 120 and her ranking is 1:

////?    | Rank | Name     | Score  |
////?    | ---- | -------- | ------ |
////?    | 1    | Alice    | 120    |
////?    | 2    | Emma     | 100    |
////?    | 2    | David    | 100    |
////?    | 3    | Caroline | 50     |
////?    | 4    | Ritika   | 40     |
////?    | 4    | Tom      | 40     |
////?    | 5    | Heraldo  | 20     |
////?    | 6    | Riley    | 10     |



//* Sample Input 1
////?   6
////?   100 90 90 80 75 60
////?   5
////?   50 65 77 90 102

//* Sample Output 1
////?   6
////?   5
////?   4
////?   2
////?   1






class Result
{

    /*
     * Complete the 'climbingLeaderboard' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY ranked
     *  2. INTEGER_ARRAY player
     */

    public static List<int> climbingLeaderboard(List<int> ranked, List<int> player)
    {
        List<int> results = new List<int>();
        ranked = ranked.Distinct().ToList();

        int rank = ranked.Count;

        foreach (int score in player)
        {
            while (rank > 0 && ranked[rank - 1] <= score)
            {
                rank -= 1;
            }
            results.Add(rank + 1);
        }

        return results;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        int rankedCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> ranked = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(rankedTemp => Convert.ToInt32(rankedTemp)).ToList();

        int playerCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> player = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(playerTemp => Convert.ToInt32(playerTemp)).ToList();

        List<int> result = Result.climbingLeaderboard(ranked, player);

        Console.WriteLine(String.Join("\n", result));
    }
}






//! Input 0
// 7
// 100 100 50 40 40 20 10
// 4
// 5 25 50 120

//! Output 0
// 6
// 4
// 2
// 1


//! Input 1
// 6
// 100 90 90 80 75 60
// 5
// 50 65 77 90 102

//! Output 1
// 6
// 5
// 4
// 2
// 1