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


    <Big O Shorthands>
    * Analyzing complexity with big O can get complicated.
    * There are several rules of thumb that can help.
    * These rules won't ALWAYS work, but are a helpful starting point.
    
    1) Arithmetic operations are constant. (+, -, *, /)
    2) Variable assignment is constant. 
    3) Accessing elements in an array (by index) or object (by key) is constant.
    4) In a loop, the complexity is the length of the loop times the complexity of whatever happends inside the loop.
        complexity = (length of the loop) * (complexity of operations inside the loop) 
        복잡도 = (루프의 길이) * (루프 내의 연산들)

    <참고> 배수나 횟수(빈도)를 나타낼 때
    기수 + times
    : [배수]나 [횟수], [연산-곱하기]를 나타낼 때 times 를 쓴다.
    times 앞에 기수를 붙이면 '몇 배, 몇 번, 곱하기 몇' 의 의미가 된다.
    e.g. 'times' 앞에 기수 2를 붙이면 => 2 times : 2배(배수), 2번(횟수), 2곱하기(연산)
    e.g. [배수] Mine is 3 times smaller than yours.
    e.g. [횟수] I work out 4 times a week.
    e.g. [연산-곱하기] 2 times 2 is 4. 


    A Couple More Examples

    function logAtLest5(n) {
        for (var i=1; i<=Math.max(5, n); i++) {
            console.log(i);
        }
    }
    5 이하 숫자(n)를 입력하면 1~5까지 출력, 5 초과 숫자(n)를 입력하면 1~n까지 출력.
    결국 5 or n 까지 반복.
    이 경우, 5를 신경 쓸 수 있지만, n 이 작을 경우에만 중요하다. 
    주목해야할 부분은 n이 무한대까지 커지는 경우. 이 경우, 5는 별로 중요치 않다. 
    BigO = O(n)  

    function logAtMost5(n) {
        for (var i=1; i<=Math.min(5, n); i++) {
            console.log(i);
        }
    }
    (양수만 가능)
    5 이하 숫자(n)를 입력하면 1~n까지 출력, 5 초과 숫자(n)를 입력하면 1~5까지 출력.
    n 이 커져도 아무 영향을 주지 않는다는 것이 중요. 5를 넘지 않을 것이기 때문에 n 이 커질수록 bigO 는 상수라고 단순화 가능.
    BigO = O(1)

    => BigO 를 생각할 때, 그래프를 떠올리자. 

    */