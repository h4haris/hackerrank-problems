--* Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.

-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

--? Input Format

-- The CITY and COUNTRY tables are described as follows:

------------- CITY
-- | Field       | Type         |
-- | ----------- | ------------ |
-- | ID          | NUMBER       |
-- | NAME        | VARCHAR2(17) |
-- | COUNTRYCODE | VARCHAR2(3)  |
-- | DISTRICT    | VARCHAR2(20) |
-- | POPULATION  | NUMBER       |


------------- COUNTRY
-- | Field          | Type         |
-- | -------------- | ------------ |
-- | CODE           | VARCHAR2(3)  |
-- | NAME           | VARCHAR2(44) |
-- | CONTINENT      | VARCHAR2(13) |
-- | REGION         | VARCHAR2(25) |
-- | SURFACEAREA    | NUMBER       |
-- | INDEPYEAR      | VARCHAR2(5)  |
-- | POPULATION     | NUMBER       |
-- | LIFEEXPECTANCY | VARCHAR2(4)  |
-- | GNP            | NUMBER       |
-- | GNPOLD         | VARCHAR2(9)  |
-- | LOCALNAME      | VARCHAR2(44) |
-- | GOVERNMENTFORM | VARCHAR2(44) |  
-- | HEADOFSTATE    | VARCHAR2(32) |
-- | CAPITAL        | VARCHAR2(4)  |
-- | CODE2          | VARCHAR2(2)  |





Select b.CONTINENT, Avg(a.POPULATION) from CITY as a
inner join COUNTRY as b
on a.CountryCode = b.Code
group by b.CONTINENT


-- Oceania 109189 
-- South America 147435 
-- Europe 175138 
-- Africa 274439 
-- Asia 693038 