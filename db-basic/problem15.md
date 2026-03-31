### 문제 15: 날짜별로 등교한 크루 수 조회
``` sql
SELECT attendance_date, count(DISTINCT crew_id) crew_count
FROM attendance
WHERE start_time is not null
GROUP BY attendance_date;
```