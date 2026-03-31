### 문제 4: 유니크 키 설정

우아한테크코스에서는 닉네임의 '중복'이 엄연히 금지된다. 그런데 현재 테이블에는 중복된 닉네임이 담길 수 있다. crew 테이블의 결함을 어떻게 해결할 수 있을까?
``` sql
ALTER TABLE ALTER TABLE crew ADD CONSTRAINT
nickname_uniq unique(nickname);
```