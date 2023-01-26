--* Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.

-- The STATION table is described as follows:


-- | Field  | Type         |
-- | ------ | ------------ |
-- | ID     | NUMBER       |
-- | CITY   | VARCHAR2(21) |
-- | STATE  | VARCHAR2(2)  |
-- | LAT_N  | NUMBER       |
-- | LONG_W | NUMBER       |


-- where LAT_N is the northern latitude and LONG_W is the western longitude.



select distinct CITY from STATION
where (CITY like 'a%'
or CITY like 'e%'
or CITY like 'i%'
or CITY like 'o%'
or CITY like 'u%')
and 
(CITY like '%a'
or CITY like '%e'
or CITY like '%i'
or CITY like '%o'
or CITY like '%u')


-- Acme 
-- Aguanga 
-- Alba 
-- Aliso Viejo 
-- Alpine 
-- Amazonia 
-- Amo 
-- Andersonville 
-- Archie 
-- Arispe 
-- Arkadelphia 
-- Atlantic Mine 
-- East China 
-- East Irvine 
-- Eastlake 
-- Eleele 
-- Elm Grove 
-- Eriline 
-- Ermine 
-- Eskridge 
-- Eufaula 
-- Oconee 
-- Ojai 
-- Osborne 
-- Oshtemo 
-- Ozona 
-- Upperco 
-- Urbana