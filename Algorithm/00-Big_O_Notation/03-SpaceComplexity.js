/* 

    [Udemy] Javascript Algorithm

    =============================

    Section 1. Big O Notation

    1-4 Space Complexity

    =============================


    <Space Complexity>
    So far, we've been focusing on TIME COMPLEXITY :
    how can we analyze the runtime of an algorithm as the size of the inputs increases.

    We can also use big O notation to analyze SPACE COMPLEXITY :
    how much additional "memory" do we need to allocate in order to run the code in our algorithm?



    <What about the inputs?>
    (알고 넘어가기: n 이 커질수록, 무한대까지 가면서 입력 자체가 커진다)
    Sometimes, you'll hear the term AUXILIARY SPACE COMPLEXITY (보조 공간 복잡도)
    to refer to space required by the algorithm, not including space taken up by the inputs.

    Q. Why AUXILIARY space complexity? 
    A. We care about the algorithm. We don't care about the space of inputs. 
        We basically focus in what happens inside the algorithm.
    
    Unless otherwise noted, when we talk about space complexity, 
    technically we'll be talking about auxiliary space complexity.



    <Space Complexity in JS -Rules of Thumb->
    * Most primitives (booleans, numbers, undefined, null) are constant space(불변 공간).
        number : 입력의 크기(1이든 1000이든)와 상관없이 모두 불변공간
        boolean : true 이든 false 이든 같은 똑같은 공간 차지
    * Strings require O(n) space (where n is the string length)
        (길이가 50인 문자열)이 (길이가 1인 문자열)보다 50배 많은 공간 차지.
    * Reference types are generally O(n), 
        where n is the length(for arrays) or the number of keys(for objects)
        reference type, array, object : string 과 동일. 대부분 O(n). 이 때 n=배열의 길이, 객체의 키 개수
        (길이가 4인 배열)이 (길이가 2인 배열)보다 2배 많은 공간 차지


    <Example>
    function sum (arr) {
        let total = 0;
        for (let i=0; i<arr.length; i++) {
            total += arr[i];
        }
        return total;
    }
    
    * 공간을 차지할 것들이 무엇인지 생각 : total(number), i(number)
    total 변수에 값을 더할 뿐이므로, 결국 상수공간이 있을 뿐.
    => O(1) 공간


    function double (arr) {
        let newArr = [];
        for (let i=0; i<arr.length; i++) {
            newArr.push(2 * arr[i]);
        }
        return newArr;
    }

    * 공간을 차지하는 것, 리턴하는 것은 무엇인지 생각 : 새로 만든 배열(newArr)
    처음에 만든 빈 배열은 그 배열이 입력과 비례해서 길어지는것과 비교하면 별로 중요하지 않다.
    차지하는 공간은 입력된 배열의 크기과 비례해서 커지게된다
    return 하는 newArr = n numbers
    => O(n) 공간

*/