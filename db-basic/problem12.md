### 문제 12: 가장 늦게 하교한 크루 찾기
3월 6일, 검프는 우연히 아침에 일찍 눈을 떴다. 상쾌하게 일찍 출근하기로 마음을 먹고 캠퍼스로 향했다. 검프가 가장 먼저 도착했다. 하지만, 경비 처리가 되어 있지 않은 걸 확인했다. 전날(3월 5일) 가장 늦게 하교한 크루를 찾아 DM을 보내려고 하는데 크루의 닉네임과 하교 시각은 어떻게 찾을 수 있을까?

``` sql
SELECT c.nickname, a.end_time
FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id
WHERE a.attendance_date = '2025-03-05'
  AND a.end_time = (
      SELECT MAX(end_time)
      FROM attendance
      WHERE attendance_date = '2025-03-05'
  );
```