/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 1. Big O Notation

    1-3 Quiz : Time Complexity

    =============================


    1. 다음 빅오 표현식을 간단히 하시오. 
        O(n + 10)

    [O] O(n)
    [ ] O(n^2)
    [ ] O(n log n)


    2. 다음 빅오 표현식을 간단히 하시오. 
        O(100 * n)

    [ ] O(2n)
    [ ] O(1)
    [O] O(n)


    3. 다음 빅오 표현식을 간단히 하시오. 
        O(25)

    [ ] O(n)
    [ ] O(n!)
    [O] O(1)


    4. 다음 빅오 표현식을 간단히 하시오. 
        O(n^2 + n^3)

    [ ] O(n^2)
    [ ] O(n)
    [O] O(n^3)


    5. 다음 빅오 표현식을 간단히 하시오. 
        O(n + n + n + n)

    [X] O(4n)
    [O] O(n)
    [ ] O(n^2)


    6. 아래 함수에 대한 시간 복잡도를 구하시오.
        function logUpTo(n) {
            for (var i=1; i<=n; i++) {
                console.log(i);
            }
        }

    [O] O(n)
    [ ] O(n^2)
    [ ] O(n log n)


    7. 아래 함수에 대한 시간 복잡도를 구하시오.
        function logAtMost10(n) {
            for (var i=1; i<=Math.min(n, 10); i++) {
                console.log(i);
            }
        }

    [O] O(1)
    [X] O(n)
    [ ] O(n^2)


    8. 아래 함수에 대한 시간 복잡도를 구하시오.
        function logAtLeast10(n) {
            for (var i=1; i<=Math.max(n, 10); i++) {
                console.log(i);
            }
        }

    [O] O(n)
    [ ] O(1)
    [ ] O(n log n)


    9. 아래 함수에 대한 시간 복잡도를 구하시오.
        function onlyElementsAtEvenIndex (array) {
            var newArray = Array(Math.ceil(array.length / 2));
            for (var i=0; i<array.length; i++) {
                if (i % 2 === 0) {
                    newArray[i / 2] = array[i];
                }
            }
            return newArray;
        }

    [O] O(n)
    [ ] O(1)
    [ ] O(n^2)


    10. 아래 함수에 대한 시간 복잡도를 구하시오.
        function subtotals (array) {
            var subtotalArray = Array(array.length);
            for(var i=0; i<array.length; i++) {
                var subtotal = 0;
                for (var j=0; j<=i; j++) {
                    subtotal += array[j];
                }
                subtotalArray[i] = subtotal;
            }
            return subtotalArray;
        }

    [ ] O(1)
    [ ] O(n)
    [O] O(n^2)

    */