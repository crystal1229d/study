# [Udemy] Javascript Algorithm

---

## Section 3. Algirithms & Problem Solving Approach

### 3-6 Look Back & Refactor

---

#### < Refactoring Questions > 
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem? 

<br>
#### < Example >
```
[Problem] Wirte a function which takes in a string 
and returns counts of each character in the string.
```
```
[Process] 
function charCount (str) {
    let obj = {}
    for (let i=0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) { // 정규식 추가 (영숫자가 아닌 공백, 밑줄, 대시, 마침표, 쉼표 등을 제거)
            if (obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1
            }
        }
    }
    return obj
}
```
```
[Refactoring]
1) for loop 교체
    for 문은 숫자의 범위에 적용되는 루프로, 숫자를 받아 개별 문자를 바꾸는 불필요한 단계가 있다
    i 를 사용하지 않고, for-of 같은 루프 사용하여 문자 즉시 출력
    * for loop 에서 해당 문자열에 대해 let char 를 적용하면 char 를 다시 정의할 필요X

function charCount (str) {
    let obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) { // 정규식 추가 (영숫자가 아닌 공백, 밑줄, 대시, 마침표, 쉼표 등을 제거)
            if (obj[char] > 0) {
                obj[char]++
            } else {
                obj[char] = 1
            }
        }
    }
    return obj
}  
```
```
[Refactoring]
2) if-else 문 교체
    간단한 연산만을 진행하는 긴 if-else 문을 한 줄로 교체

function charCount (str) {
    let obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) { 
            obj[char] = ++obj[char] || 1    // 값이 이미 있다면 추가하고, 값이 없다면 1로 설정
        }
    }
    return obj
}  
```
```
[Refactoring]
3) 정규표현식 교체
    크롬등에서 문제가 발생할 수 있는 정규 표현식을 (charCodeAt 을 이용한) 간단한 수학적 비교로 대체 (중요X)

function charCount (str) {
    let obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) { 
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1    // 값이 이미 있다면 추가하고, 값이 없다면 1로 설정
        }
    }
    return obj
}  

function isAlphaNumerci (char) {
    let code = char.charCodeAt(0)
    if (! (code > 47 && code < 58) &&    // numeric (0-9)
        ! (code > 64 && code < 91) &&
        ! (code > 96 && code < 123) ) {
        return false
    }
    return true
}
```