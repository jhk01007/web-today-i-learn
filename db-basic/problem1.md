1. attendance 테이블은 중복된 데이터가 쌓이는 구조이다. 중복된 데이터는 어떤 컬럼인가?
    > crew_id, nickname, attendance_date, attendance_date, start_time, end_time
2. attendance 테이블에서 중복을 제거하기 위해 crew 테이블을 만들려고 한다. 어떻게 구성해 볼 수 있을까?
    > crew_id, nickname
    
3. crew 테이블에 들어가야 할 크루들의 정보는 어떻게 추출할까? (hint: DISTINCT)
    ``` sql
    select distinct(crew_id), nickname from attendance;
4. 최종적으로 crew 테이블 생성:
    ``` sql
    create table crew (
        crew_id INT NOT NULL primary key,
        nickname VARCHAR(5)
    );
    ```
5. attendance 테이블에서 크루 정보를 추출해서 crew 테이블에 삽입하기
    ``` sql
    INSERT INTO crew(crew_id, nickname)
    SELECT DISTINCT crew_id, nickname FROM attendance;
    ```
