-- Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.

-- The CITY table is described as follows:

-- | Field       | Type         |
-- | ----------- | ------------ |
-- | ID          | NUMBER       |
-- | NAME        | VARCHAR2(17) |
-- | COUNTRYCODE | VARCHAR2(3)  |
-- | DISTRICT    | VARCHAR2(20) |
-- | POPULATION  | NUMBER       |


select * from CITY
where Population > 100000
and countrycode = 'USA'


-- 3878 Scottsdale USA Arizona 202705 
-- 3965 Corona USA California 124966 
-- 3973 Concord USA California 121780 
-- 3977 Cedar Rapids USA Iowa 120758 
-- 3982 Coral Springs USA Florida 117549 