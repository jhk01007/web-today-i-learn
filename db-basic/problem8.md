### 문제 8: 잘못된 출석 기록 수정 (UPDATE)
주니는 3월 12일 10시 정각에 캠퍼스에 도착했지만, 등교 버튼을 누르는 것을 깜빡하고 데일리 미팅에 참여했다. 뒤늦게야 알게 됐는데 시각은 10시 5분... 지각 처리가 되는 시점이었다.

주니: 검프~! 제가 3월 12일 10시 정각에 캠퍼스에 도착했는데 깜빡하고 등교 버튼을 늦게 눌렀어요. 나중에 확인해 보니까 10시 5분이더라구욥ㅠ 👉🏻👈🏻 ... 죄송한데 한 번만 출석 처리 해주실 수 있을까욥??? 🥹🥹
검프: 네 ^^;;; (그냥 지각 처리하면 안 되나ㅠㅠ)

1. (주니가 crew 테이블에 없으므로) 먼저 주니를 crew 테이블에 저장
   ``` sql
    INSERT INTO crew(crew_id, nickname) VALUES(14, '주니');
   ```
2. (수정하려면 데이터가 있어야 하므로) 주니의 출석 데이터 저장 (3월 12일 10시 5분)
    ``` sql
    INSERT INTO attendance(crew_id, attendance_date, start_time, end_time) 
    VALUES (14, '2025-03-12', '10:05', '18:01');
    ```
3. 10:00로 수정
   ``` sql
    UPDATE attendance SET start_time = '10:00' 
    WHERE attendance_date = '2025-03-12' AND crew_id = 14;
   ```