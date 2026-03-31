### 문제 13: 크루별로 '기록된' 날짜 수 조회

``` sql
SELECT crew_id, count(DISTINCT attendance_date) attendance_date_cnt
FROM attendance
GROUP BY crew_id;
```