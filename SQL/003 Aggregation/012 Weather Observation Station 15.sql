-- Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than 137.2345. Round your answer to 4 decimal places.



--? Input Format


-- The STATION table is described as follows:


-- | Field  | Type         |
-- | ------ | ------------ |
-- | ID     | NUMBER       |
-- | CITY   | VARCHAR2(21) |
-- | STATE  | VARCHAR2(2)  |
-- | LAT_N  | NUMBER       |
-- | LONG_W | NUMBER       |


-- where LAT_N is the northern latitude and LONG_W is the western longitude.





Select Cast(LONG_W as numeric(10,4)) from Station
where LAT_N = (select Max(LAT_N) from Station where LAT_N < 137.2345)


-- 117.2465