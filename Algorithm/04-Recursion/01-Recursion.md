# [Udemy] Javascript Algorithm

---

## Section 5. Recursion

### 5-1 How recursive functions work

### 5-2 Example : Helper Method Recursion

---

## < How recursive functions work >
* 하나의 함수가 자기자신을 재귀적으로 계속해서 호출        
    Invoke the <strong>same</strong> function with a different input until you reach your base case! 
* Two essential parts of a recursive function
    1. <strong>Base Case, 종료 조건 (중단점)</strong>
        Base Case : The condition when the recursion ends
    2. <strong>Different Input</strong>

<br>

## < Recursion - countDown >
```js 
// using LOOP (do iteratively)
function countDown (num) {
    for (let i=num; i > 0; i--) {
        console.log(i)
    }
    console.log('All done')
}

```

```js
// using RECURSION
function countDown (num) {
    if (num <= 0) {
        console.log('All done')
        return
    }
    console.log(num)
    num --
    countDown(num)
}
```

<br>

## < Recursion - sumRange >
```js 
function sumRange (num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
```
Find 2 pieces of essential parts
1) can you spot the <strong>base case</strong>? ```if (num === 1) return 1; ```
2) do you notice the <strong>different input</strong>? ```return num + sumRange(num - 1)```
3) what would happen if we didn't return? 


<br>

## < Recursion - factorial >
팩토리얼(factorial) : 재귀 함수 사용법을 가장 고전적으로 설명한다
```js 
// using for LOOP
function factorial (num) {
    let total = 1
    for (let i=num; i > 0; i--) {
        total *= i;
    }
    return total;
}
```
```
// using RECURSION 
function factorial (num) {
    if (num === 1) return 1;
    return num * factorial (num-1);
}
```

<br>

## < Where things go wrong >
* No base case
* Forgetting to return or returning the wrong thing!
* Stack overflow

<br>

## < Helper Method Recursion >
* 지금까지 위에서 작성했던 모든 재귀 함수는 단일 단독 함수 (single standalone function) 
    * single standalone function : 스스로 재귀
* <strong>Helper Method Recursion</strong> : 재귀와 함께 사용되는 Design Pattern 
```js
function outer (input) {
    let outerScopedVariable = []

    function helper (helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;
}
```
* helper method recursion 에는 두 개의 함수가 있다.
    * outer function ```function outer() {...}```
    * (helper) recursive function ```function helper() {...}```
* 배열이나 데이터 목록 같은 것을 compile 해야 할 때 이와 같이 작업

<br>

## < Helper Method Recursion - collectOddValues >
collect all of the odd values in an array (배열에서 모든 홀수값을 수집하기)
```js
function collectOddValues (arr) {
        let result = []

        function helper (helperInput) {
            if (helperInput.length === 0) {
                return
            }
            if (helperInput[0] % 2 !== 0) {
                result.push(helperInput[0])
            }
            helper(helperInput.slice(1))
        }

        helper(arr)

        return result
    }
```

<br>

## < Pure Recursion >
* <strong>Pure Recursion</strong> (순수 재귀) : 필요한 모든 코드가 함수 자체에 포함되며, 재귀적이다
위의 collectOddValues 함수와 같이 외부 데이터 ```let result = []``` 를 사용하지 않는다. 
```js
function collectOddValues (arr) {
    let newArr = []

    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr
}
```

