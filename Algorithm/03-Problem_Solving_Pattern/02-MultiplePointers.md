# [Udemy] Javascript Algorithm

---

## Section 4. Algirithms & Problem Solving Pattern

### 4-3 Multiple Pointers Pattern 

---

#### < Multiple Pointers > 
Creating <strong>pointers</strong> or values that correspond to an index or position and move towrads the beginning, end or middle based on a certain condition.
<strong>Very</strong> efficient for solving problems with minimal space complexity as well.
- 선형 구조(배열, 문자열, 이중 연결 리스트, 단일 연결리스트 등)와 같은 것을 만들어 한 쌍의 값이나 조건을 충족시키는 무언가를 찾는다 ```[-4, -3, -2, -1, 0, 1, 2]``` ```"abcedefghijk"```
- 두 가지 참조값을 사용하여 동시에 특정 방향을 향하여 탐색하며 원하는 값을 찾는다. (서로를 향하거나 같은 방향으로. 시작지점과 방향 자유)
    예를 들어, ```[-4, -3, -2, -1, 0, 1, 2]``` 에서 참조값1은 index 0부터 시작하여 우측으로 이동할 때 참조값2는 index 2부터 시작하여 좌측으로 이동 (참조값=포인터)

<br>
#### < Example : Multiple Pointers >
```
[Problem] 
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist

[Example]
sumZero([-3, -2, -1, 0, 1, 2, 3])  // [-3, 3]
sumZero([-2, 0, 1, 3])  // undefined
sumZero([1, 2, 3])  // undefined
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

[Example]
countUniqueValues([1, 1, 1, 1, 1, 2])   // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])   // 7
countUniqueValues([])   // 0
countUniqueValues([-2, -1, -1, 0, 1])   // 4
```
```
[My Solution]

```
```
[Teacher's Solution]

```