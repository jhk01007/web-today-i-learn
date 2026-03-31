### 문제 14: 크루별로 등교 기록이 있는(start_time IS NOT NULL) 날짜 수 조회
``` sql
SELECT crew_id, count(DISTINCT attendance_date) attendance_date_cnt
FROM attendance
WHERE start_time is not null
GROUP BY crew_id ;
```