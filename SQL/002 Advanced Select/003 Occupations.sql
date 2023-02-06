--* Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.

-- ! Note: Print NULL when there are no more names corresponding to an occupation.

--? Input Format

-- The OCCUPATIONS table is described as follows:

-- | Column     | Type   |
-- | ---------- | ------ |
-- | Name       | String |
-- | Occupation | String |

-- Occupation will only contain one of the following values: Doctor, Professor, Singer or Actor.



--? Sample Input

-- An OCCUPATIONS table that contains the following records:

-- | Name      | Occupation |
-- | --------  | ---------- |
-- | Samantha  | Doctor     |
-- | Julia     | Actor      |
-- | Maria     | Actor      |
-- | Meera     | Singer     |
-- | Ashley    | Professor  |
-- | Ketty     | Professor  |
-- | Christeen | Professor  |
-- | Jane      | Actor      |
-- | Jenny     | Doctor     |
-- | Priya     | Singer     |


--? Sample Output

-- Jenny    Ashley     Meera  Jane
-- Samantha Christeen  Priya  Julia
-- NULL     Ketty      NULL   Maria


--? Explanation

-- The first column is an alphabetically ordered list of Doctor names.
-- The second column is an alphabetically ordered list of Professor names.
-- The third column is an alphabetically ordered list of Singer names.
-- The fourth column is an alphabetically ordered list of Actor names.
-- The empty cell data for columns with less than the maximum number of names per occupation (in this case, the Professor and Actor columns) are filled with NULL values.




SELECT [Doctor],[Professor],[Singer],[Actor]
FROM
(
SELECT ROW_NUMBER() OVER(PARTITION BY occupation ORDER BY name) AS rn,*
FROM occupations
) AS PivotData
PIVOT
(
MAX(name) FOR occupation IN ([Doctor],[Professor],[Singer],[Actor])
) PivotTable


-- Aamina Ashley Christeen Eve 
-- Julia Belvet Jane Jennifer 
-- Priya Britney Jenny Ketty 
-- NULL Maria Kristeen Samantha 
-- NULL Meera NULL NULL 
-- NULL Naomi NULL NULL 
-- NULL Priyanka NULL NULL


--? Query Explanation

-- The query first selects data from the "occupations" table and assigns a unique row number to each record in the table based on the "occupation" column, ordering by the "name" column. This subquery result is then pivoted to create a new table with columns for each "occupation" type, where the value in each column is the maximum "name" in the original table for that occupation type.

-- The final result is a table with four columns: "Doctor", "Professor", "Singer", and "Actor". The values in these columns represent the maximum "name" for each occupation type.