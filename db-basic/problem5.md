### 문제 5: 크루 닉네임 검색하기 (LIKE)

3월 4일, 아침에 검프에게 어떤 크루가 상냥하게 인사했다. 그런데 검프도 구면인 것 같아서 닉네임 첫 글자가 디라는 건 떠올랐는데... 누구지?

``` sql
SELECT nickname FROM crew WHERE nickname like('시%');
```