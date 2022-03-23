/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 2. Big O Notation

    =============================

    Q. What does better mean? 
    A. 1, 2 are often can be more important than readability.
    1) Faster
    2) Less memory-intensive
    3) More readable


    Q. How to measure Speed of the code?
    A. use built-in timing functions e.g. performance.now()


    The Problem with Time
    It's not precise and we can't rely on that.
    1) Different machines will record different times
        => It's not reliable on the specifications of 
        a machine and what's currently happening on the machine
        and what code is runnig the time, the results you can get will be different
        It doesn't mean that will get wrong of opposite results
        where the first solution is suddenly faster than the second one.
        But it means that the margins could change the actual measurements could be different
        and are almost guaranteed to be different times.
    2) The same machine will record different times
    3) For fast algorithms, speed measurements may not be precise enough?


    Q. If not time, then what?
    A. Rather than couting seconds, which are so variable?
        Let's count the number of simple operations the computer has to perform!


    Counting is hard!
    Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2.
    But regardless of the exact number, the number of operations grows roughly proportionally wih n.


    Introducing... Big O 
    Big O Notation is a way to formalize fuzzy counting.
    It allow us to talk formally about how the runtime of an algorithm grows as the inputs grow.
    * The relationship between the input size and then the time relative to that input
    (입력의 크기와 실행시간의 관계)
    We won't care about the details, only the trends. 


    Big O Definition
    We say that an algorithm is O(f(n)) 
    if the number of simple operations the computer has to do 
    is eventually less than a constant times f(n), as n increases.
    입력(n)이 커질수록 알고리즘이 얼마나 효율적인지 표현하는 방식.
    n이 커질수록 실행 시간이 어떻게 영향을 받는가?
    
    <Options> describing the relationship between the input and the runtime
    f(n) could be linear (f(n) = n)  : 선형. N의 값이 커질수록 실행 시간도 같이 늘어남
    f(n) could be quadratic (f(n) = n²)  
    f(n) could be constant (f(n) = 1)  : 상수(또는 1). N 이 커져도 실행 시간에 아무 영향 X 
    f(n) could be something entirely different.


    <Example>
    1) O(1) 
    : Always 3 operations. n의 값이 커져도 실행 시간에 변화가 없다 (상수. costant)
    function addUpTo(n) {
        return n * (n + 1) / 2;
    }

    2) O(n)    Linear Graph
    : Number of operations is (eventually) bounded by a multiple of n (says, 10n)
    n의 값이 커질수록 실행 시간이 1:1 비율로 늘어난다. 연산의 갯수는 궁극적으로 N의 곱과 연결된다. 
    function addUpTo(n) {
        let total = 0;
        for (let i=1; i<=n; i++) {
            total += i;
        }
        return total;
    }

    2-1) O(n)   Linear Graph
    : 각각의 반복문(for문) 이 O(n). O(2n) 이라고 생각할 수 있지만, BigO 에서는 2n 이든 5n 이든 중요치않으므로 n.
    function countUpAndDown(n) {
        console.log('Going up');
        for (let i=0; i<n; i++) {
            console.log(i)
        }
        console.log('At the top.\nGoing down');
        for(let j=n-1; j>=0; j--) {
            console.log(j);
        }
        console.log('Back down. Bye!');
    }

    3) O(n*n) = O(n²)    Not Linear! Exponential Curve(지수 곡선)
    : O(n) operations inside of an O(n) operation  * Nested Loop
    Outer loop = O(n), inner loop = O(n)
    In such case, it's not O(2n) which is simplified to O(n).
    중첩문은 O(n) 으로 단순화되는 O(2n) 이 아닌, O(n제곱)이 된다.
    이 경우, n 이 커질수록 실행시간이 n 제곱의 값으로 늘어난다. 

    function printAllPairs(n) {
        for(var i=0; i<n; i++) {
            for(var j=0; j<n; j++) {
                console.log(i, j);
            }
        }
    }

*/