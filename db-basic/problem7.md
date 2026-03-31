### 문제 7: 누락된 출석 기록 추가 (INSERT)

확인해 보니, 어셔는 그날 출석 체크를 하지 못한 것이 사실로 드러났다. 사후 처리를 위해 출석을 추가해야 하는데 어떻게 추가해야 할까?

1. 먼저 '어셔'를 crew 테이블에 저장한다.
   ``` sql
    INSERT INTO crew(crew_id, nickname) VALUES(13, '어셔');
   ```
2. 누락된 출석 기록을 attendance에 추가한다.
    ``` sql
    INSERT INTO attendance(crew_id, attendance_date, start_time, end_time) 
    VALUES (13, '2025-03-06', '09:31', '18:01');
    ```