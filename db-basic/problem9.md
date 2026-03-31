### 문제 9: 허위 출석 기록 삭제 (DELETE)

시력은 좋지 않지만, 평소 눈썰미가 좋은 검프는 아론이 3월 12일에 캠퍼스에 도착하지 않은 점을 깨달았다. 그런데 무슨 이유에서인지 그날 출석 처리가 되어 있는 것을 우연히 발견했다.

검프: 아론...? 3월 12일에는 안 나오셨잖아요? 그날 구구한테 물어보니까 안 나오셨다던데...
아론: 앗.. 죄송해요 ㅜㅜ
검프: 해당 기록은 제가 지우겠습니다..

1. (아론이 crew 테이블에 없으므로) 먼저 아론을 crew 테이블에 저장
   ``` sql
    INSERT INTO crew(crew_id, nickname) VALUES(15, '아론');
   ```
2. (삭제하려면 데이터가 있어야 하므로) 아론의 출석 데이터 저장 (3월 12일)
    ``` sql
    INSERT INTO attendance(crew_id, attendance_date, start_time, end_time) 
    VALUES (15, '2025-03-12', '09:58', '18:01');
    ```
3. 삭제
   ``` sql
    DELETE from attendance where crew_id = 15 AND attendance_date = '2025-03-12'
   ```
