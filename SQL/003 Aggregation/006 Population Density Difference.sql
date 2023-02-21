--* Query the difference between the maximum and minimum populations in CITY.


--? Input Format

-- The CITY table is described as follows:

-- | Field       | Type         |
-- | ----------- | ------------ |
-- | ID          | NUMBER       |
-- | NAME        | VARCHAR2(17) |
-- | COUNTRYCODE | VARCHAR2(3)  |
-- | DISTRICT    | VARCHAR2(20) |
-- | POPULATION  | NUMBER       |




Select Max(Population)-Min(Population) from City


-- 4695354 