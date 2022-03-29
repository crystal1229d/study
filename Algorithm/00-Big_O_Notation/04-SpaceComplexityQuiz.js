/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 1. Big O Notation

    1-5 Quiz : Space Complexity

    =============================

    1. 아래 함수에 대한 공간 복잡도를 구하시오.
        function logUpTo (n) {
            for (var i=0; i<=n; i++) {
                console.log(i);
            }
        }

    [O] O(1)
    [ ] O(n)
    [ ] O(n log n)


    2. 아래 함수에 대한 공간 복잡도를 구하시오.
        function logAtMost10 (n) {
            for (var i=1; i<=Math.min(n, 10); i++) {
                console.log(i);
            }
        }

    [O] O(1)
    [ ] O(n)
    [ ] O(n log n)


    3. 아래 함수에 대한 공간 복잡도를 구하시오.
        function onlyElementsAtEvenIndex (array) {
            var newArray = Array(Math.ceil(array.length / 2));
            for (var i=0; i<array.length; i++) {
                if (i % 2 === 0) {
                    newArray[i % 2] = array[i];
                }
            }
            return newArray;
        }

    [O] O(n)
    [ ] O(n log n)
    [ ] O(n^2)


    4. 아래 함수에 대한 공간 복잡도를 구하시오.
        function subtotal (array) {
            var subtotalArray = Array(array.length);
            for (var i=0; i<array.length; i++) {
                var subtotal = 0;
                for (var j=0; j<=i; j++) {
                    subtotal += array[j];
                }
                subtotalArray[i] = subtotal;
            }
            return subtotalArray;
        }

    [ ] O(1)
    [O] O(n)
    [ ] O(n^2)

*/