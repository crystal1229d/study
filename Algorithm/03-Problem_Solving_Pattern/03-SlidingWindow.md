# [Udemy] Javascript Algorithm

---

## Section 4. Algirithms & Problem Solving Pattern

### 4-4 Sliding Window

---

#### < Slidign Window > 
This pattern involved creating a <strong>window</strong> which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track of a subset of data in an array/string etc.
- 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용하다


<br>
#### < Example : Sliding Window >
```
[Problem] 
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

[Example]
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 16
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 2) // null
```
<strong>이 때, 분류(assorted) 가 아닌 정렬(sorted) 된 배열이어야 한다. 다만 오름차순이어야 한다. (sorted in order)</strong>
```
[A naive solution (using nested loop)] Time Complexity : O(n²), Space Complexity : O(1)

function sumZero (arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}
```
__nested loop (중첩 루프) 는 되도록이면 사용하지 않는 것이 좋다.
두 개의 개별 루프가 두 개의 중첩된 루프보다 훨씬 낫다.__ 아래와 같이 개선할 수 있다.
```
[A refactored solutin] Time Complexity : O(n)

function sumZero (arr) {
    let left = 0
    let right = arr.length -1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right --
        } else {
            left ++
        }
    }
}
```

<br>
#### < Example : Frequency Counter + countUniqueValues 고유값 세기 >
```
[Problem] 
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
* You must do this with constant or O(1) space and O(n) time ! 
* Time Complexity - O(n)
* Space Complexity - O(n)

[Example]
countUniqueValues([1, 1, 1, 1, 1, 2])   // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])   // 7
countUniqueValues([])   // 0
countUniqueValues([-2, -1, -1, 0, 1])   // 4
```
```
[My Solution]
function countUniqueValues (arr) {

    if (arr.length < 2) {
        return arr.length
    }

    let uniqueVal = []

    for (let i=0; i<=arr.length-1; i++) {
        if (uniqueVal.indexOf(arr[i]) === -1) {
            uniqueVal.push(arr[i])
        }
    }

    return uniqueVal.length
}
```
```
[Teacher's Solution]
function countUniqueValues (arr) {
    if (arr.length === 0) return 0
    
    let i = 0;
    for (j=1; j<arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i 
}
```
1) Time Complexity : O(n) (=linear time) => 루프가 한 번만 적용되기 때문
2) multiple counter 사용