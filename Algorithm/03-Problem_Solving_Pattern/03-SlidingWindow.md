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
```
[A naive solution (using nested loop)] Time Complexity : O(n²)

function maxSubarraySum (arr, num) {
    if (num > arr.length) return null

    let max = -Infinity
    for (let i=0; i<arr.length - num + 1; i++) {
        let temp = 0
        for (let j=0; j<num; j++) {
            temp += arr[i+j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}
```
위의  경우와 달리, arr 과 num 이 큰 숫자 (예: 백만 이상)이라면 매우 비효율적이다.
따라서 아래와 같이 Sliding Window 패턴을 적용한다.
```
[A refactored solutin] Time Complexity : O(n)

function maxSubarraySum (arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i=0; i<num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i=num; i<arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
```