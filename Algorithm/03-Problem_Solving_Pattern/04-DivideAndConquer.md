# [Udemy] Javascript Algorithm

---

## Section 4. Algirithms & Problem Solving Pattern

### 4-5 Divide and Conquer

---

#### < Divide and Conquer > 
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This patten can tremendously <strong>decrease time complexity</strong>
- 이 알고리즘은 주 배열이나 문자열, 연결 리스트, 트리 같은 큰 규모의 데이터셋을 처리한다
- 정렬 알고리즘 중 '퀵 정렬'과 '병합 정렬' 은 분할 정복 알고리즘의 예시들이다
- 검색 알고리즘 중 '이진 탐색' 은 분할 정보 알고리즘이다

<br>
#### < Example : Divide and Conquer >
Search 혹은 Binary Search (탐색, 이진탐색) 의 예시이다
```
[Problem] 
Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

[Example]
search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1
```
```
[A naive solution] Linear Search, Time Complexity : O(n)

function search (arr, val) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === val) {
            return i
        }   
    }
    return -1
}
```
```
[A refactored solutin] Binary Search, Time Complexity : O(logN)

function search (array, val) {

    let min = 0
    let max = array.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if (array[middle] < val) {
            min = middle + 1
        } 
        else if (array[middle] > val) {
            max = middle - 1
        } 
        else {
            return middle
        }
    }
    
    return -1
}
```