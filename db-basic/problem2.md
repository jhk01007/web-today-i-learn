### 문제 2: 테이블 컬럼 삭제하기 (ALTER TABLE)

1. crew 테이블을 만들고 중복을 제거했다. attendance에서 불필요해지는 컬럼은?
    > nickname
2. 컬럼을 삭제하려면 어떻게 해야 하는가?
    ``` sql
    alter table attendance drop column nickname;
    ```