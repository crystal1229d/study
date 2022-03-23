/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 2. Simplyfing Big O Expressions

    =============================


    모든 연산들의 정확한 갯수를 세는 것은 의미없다.
    전체적인 추세가 중요.
    따라서 5n+2 => n 으로 단순화


    <Rules For Simplyfing Big O Expressions>
    When determining the time complexity of an algorithm,
    there are some helpful rule of thumbs(경험법칙) for big O expressions.
    These rules of thumb are consequences of the definition of big O notation.

    1) Constants Don't Matter
    가장 중요한 것은 대략적으로 정확한 큰 그림. 따라서 상수는 중요치 않다.
    O(2n) => O(n)
    O(500) => O(1)
    O(13n²) => O(n²)
    
    상수를 없앤 후 단순화된 것들만 비교했을 때, 속도 : O(1) > O(n) > O(n²)
    
    2) Smaller Terms Don't Matter
    작은 연산들도 중요치 않다.
    O(n+10) => O(n)
    O(1000n+50) => O(n)
    O(n²+5n+8) => O(n²)   // 큰그림을 봤을때, n²에 비해  5n+8 은 너무 작고, 의미가 없어진다.


    Big O Shorthands



    */