--* You are given a table, BST, containing two columns: N and P, where N represents the value of a node in Binary Tree, and P is the parent of N.

-- | Column  | Type    |
-- | ------- | ------- |
-- | N       | Integer |
-- | P       | Integer |


-- Write a query to find the node type of Binary Tree ordered by the value of the node. Output one of the following for each node:

----? Root: If node is root node.
----? Leaf: If node is leaf node.
----? Inner: If node is neither root nor leaf node.


--? Sample Input

-- | N   | P    |
-- | --- | ---- |
-- | 1   | 2    |
-- | 3   | 2    |
-- | 6   | 8    |
-- | 9   | 8    |
-- | 2   | 5    |
-- | 8   | 5    |
-- | 5   | null |


--? Sample Output

-- 1 Leaf
-- 2 Inner
-- 3 Leaf
-- 5 Root
-- 6 Leaf
-- 8 Inner
-- 9 Leaf


--? Explanation

-- The Binary Tree below illustrates the sample:


--         5         
--        / \        
--       2     8     
--      / \   / \    
--    1    3  6  9  




Select
CASE
    WHEN P IS NOT NULL THEN
		CASE
          	WHEN N IN (Select distinct P from BST) THEN CONCAT(N, ' Inner')
        	ELSE CONCAT(N, ' Leaf')
        END
    ELSE CONCAT(N, ' Root')
END
FROM BST
ORDER BY N


-- 1 Leaf 
-- 2 Inner 
-- 3 Leaf 
-- 4 Inner 
-- 5 Leaf 
-- 6 Inner 
-- 7 Leaf 
-- 8 Leaf 
-- 9 Inner 
-- 10 Leaf 
-- 11 Inner 
-- 12 Leaf 
-- 13 Inner 
-- 14 Leaf 
-- 15 Root