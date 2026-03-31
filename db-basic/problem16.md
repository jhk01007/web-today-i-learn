### 문제 16: 크루별 가장 빠른 등교 시각(MIN)과 가장 늦은 등교 시각(MAX)

``` sql
SELECT crew_id, min(start_time) fastest_time, max(start_time) latest_time
FROM attendance
GROUP BY crew_id;
```