--* Consider P1(a,c) and P2(b,d) to be two points on a 2D plane where (a,b) are the respective minimum and maximum values of Northern Latitude (LAT_N) and (c,d) are the respective minimum and maximum values of Western Longitude (LONG_W) in STATION.

-- Query the Euclidean Distance between points P1 and P2 and format your answer to display 4 decimal digits.

--! Euclidean Distance formula = sqrt( (b - a)^2 + (d - c)^2 )

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





Select 
Cast(
    SQRT(
        SQUARE(Max(LAT_N) - Min(LAT_N)) +
    	SQUARE(Max(LONG_W) - Min(LONG_W))
    )
    as numeric(10,4)
)
from Station


-- 184.1616