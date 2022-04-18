# [Udemy] Javascript Algorithm

---

## Section 4. Algirithms & Problem Solving Pattern

### 4-2 Frequency Counter Pattern 

---

#### < Frequency Counters > 
This pattern uses objects or sets to collect values/frequencies of values.
This can often avoid the need for nested loops of O(n²) operations with arrays/strings.
- 여러 데이터와 입력값이 서로 비슷한 값으로 구성되어 있는지 / 서로 간의 에너그램인지 / 값이 다른 값에 포함되어있는지 여부 확인
- 데이터를 입력값이나 두 개 이상의 빈도 혹은 특정하게 발생하는 빈도와 비교 
- 여러 데이터를 서로 비교해야 하는 경우 (특히 데이터가 같은 개별 데이터 조각으로 구성되어 있는지, 한 배열이 각 개별 데이터 조각을 제곱한 다른 배열과 같은지, 또는 내가 본 다른 것과 같은지 등을 확인해야 하는 경우)

<br>
#### < Example : Frequency Counter >
```
[Problem] 
Write a function called 'same', which accepts two arrays.
The function should return true 
if every value in the array has it's corresponding value squared(²) in the second array.
The frequency of values must be the same.

[Example]
same([1,2,3], [4,1,9])  // true
same([1,2,3], [1,9])    // false
same([1,2,1], [4,4,1])  // false (must be same frequency)
```
```
[A naive solution (using nested loop)] Time Complexity : O(n²)
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    
    for (let i=0; i<arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }

    return true
}
```
__nested loop (중첩 루프) 는 되도록이면 사용하지 않는 것이 좋다.
두 개의 개별 루프가 두 개의 중첩된 루프보다 훨씬 낫다.__ 아래와 같이 개선할 수 있다.
```
[A refactored solutin (using FREQUENCY COUNTER PATTERN)] Time Complexity : O(n)
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in freqeuncyCounter2)) {     // 대응하는 값이 있는지 체크
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {   // 대응하는 값이 몇 개 있는지 체크
            return false
        }
    }

    return true
}
```
- 두 객체(frequencyCounter1, frequencyCounter2) 를 사용해 각 배열(arr1, arr2)의 개별 값의 빈도를 구한다 (= 각 값이 해당 배열에서 몇 번 나타나는가)
마지막 return true 전에 두 객체를 각각 콘솔에 찍어보면
same([1,2,3,2], [9,1,4,4]) 의 경우,
frequencyCounter1 = { 1:1, 2:2, 3:1 }
frequencyCounter2 = { 1:1, 4:2, 9:1 }
와 같다. 
- 중요한 점은, 이를 구현하는데 각 배열에 대해 한 번만 반복(one iteration)한다는 것이다.
- 또 다른 점은, 루프를 한 번만 추가해서 둘(frequencyCounter1, frequencyCounter2) 중 하나에만 적용하면 결과를 얻을 수 있다는 것이다. 
- <참고> for-of 구문은 배열이나 문자열에 적용하기 좋은 루프
- Time Complexity : 중첩되지 않은, 배열 길이만큼 한 번 순회하는 for 문이 3개 있으므로 O(3n) = O(n)



<br>
#### < Example : Frequency Counter + Anagrams >
```
[Problem] 
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman.

[Example]
validAnagram('', '')                // true
validAnagram('aaz', 'zza')          // false
validAnagram('anagram', 'nagaram')  // true
validAnagram('rat', 'car')          // false
validAnagram('awesome', 'awesom')   // false
validAnagram('qwerty', 'qeywrt')    // true
validAnagram('texttwisttime', 'timetwisttext')  // true
```
Frequency Counter 사용하여 해결하자
1) 루프를 적용하여 만든 객체 사용
2) 중첩되지 않은 루프 사용
=> O(n) time complexity 유지
```
[My Solution]
function validAnagram (str1, str2) {
    let regex = / /gi
    str1 = str1.replace(regex, '')
    str2 = str2.replace(regex, '')
    
    if (str1.length === 0 && str2.length === 0) {
        return true
    }

    if (str1.length !== str2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let index in str1) {
        frequencyCounter1[str1[index]] = (frequencyCounter1[str1[index]] || 0) + 1
    }

    for (let index in str2) {
        frequencyCounter2[str2[index]] = (frequencyCounter2[str2[index]] || 0) + 1
    }

    for (let alphabet in frequencyCounter1) {
        if (!(alphabet in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter1[alphabet] !== frequencyCounter2[alphabet]) {
            return false
        }
    }   
    return true
}
```
```
[Teacher's Solution]
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
```