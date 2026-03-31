### 문제 3: 외래키 설정하기

attendance에서 관심사의 분리를 통해 crew 테이블을 별도로 만들었다. 따라서, 나중에 nickname이 필요하다면 crew 테이블에서 확인하면 된다.

그런데 잠재적인 문제가 남아 있다:
- 만약에 crew 테이블에는 crew_id가 12번인 크루가 존재하지 않지만, attendance 테이블에는 여전히 crew_id가 12번인 크루가 존재한다면?
  - 해당 크루가 중간에 퇴소했거나
  - 누군가의 실수에 의해 레코드가 삭제되었거나

``` sql
ALTER TABLE attendance ADD CONSTRAINT 
crew_foreign foreign key(crew_id) references crew(crew_id);
```