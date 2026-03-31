### 문제 11: nickname으로 쿼리 처리하기 (서브 쿼리)
검프는 SQL이 익숙지 않아 crew 테이블에서 먼저 닉네임을 검색하고 해당 아이디 값을 찾아 직접 WHERE문에서 crew_id 항목의 값을 수동으로 입력했다. 그런데 nickname을 입력하면 이를 기준으로 쿼리문을 처리할 수도 있지 않을까?

``` sql
    SELECT * FROM attendance
    WHERE crew_id = (SELECT crew_id FROM crew WHERE nickname = '검프');
```