# [Udemy] Javascript Algorithm

---

## Section 5. CHALLANGING QUIZ 

### 5 QUIZ 

---

#### < Frequency Counter - sameFrequency > 
```
[Problem] 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities :
Time : O(n)

[Example]
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
```
```
[My Solution] 

function sameFrequency (str1, str2) {

    if (str1.length !== str2.length) return false

    let lookup1 = {}
    let lookup2 = {}

    for (let val of str1.toString()) {
        lookup1[val] = (lookup1[val] || 0) + 1
    }

    for (let val of str2.toString()) {
        lookup2[val] = (lookup2[val] || 0) + 1
    }

    for (let num in lookup1) {
        if (!(num in lookup2)) { // !(lookup2[num])
            return false
        }
        if (lookup1[num] !== lookup2[num]) {
            return false
        }
    }
    
    return true
}
```
```
[Answer] 


```

<br>

#### < Frequency Counter / Multiple Pointers - areThereDuplicates > 
```
[Problem] 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

- Restrictions :
Time - O(n)
Space - O(n)

- Bonus : 
Time - O(n log n)
Spcae - O(1)

[Example]
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
```
```
[My Solution] 

function areThereDuplicates () {
    if (arguments.length < 2) return false 

    let lookup = {}
    
    for (let val of arguments) {
        lookup[val] = (lookup[val] || 0) + 1    

        if (lookup[val] > 1) {
            return true
        }
    }

    return false
}
```
```
[Answer] 


```

<br>

#### < Multiple Pointers - averagePair > 
```
[Problem] 
Write a function called averagePair. Given a sorted array of integers and a target average, dtermine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

- Best Constraints :
Time : O(N)
Space : O(1)

[Example]
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false
```
```
[My Solution] 

function averagePair (arr, avg) {
    if (arr.length < 2) return false

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let temp_avg = (arr[left] + arr[right]) / 2
        if (temp_avg > avg) {
            right -= 1
        } else if (temp_avg < avg) {
            left += 1
        } else {
          return true  
        }
    }
    
    return false    
}
```
```
[Answer] 

function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
```

<br>

#### < Multiple Pointers - isSubsequence > 
```
[Problem] 
Write a function called isSubsequence which takes in two strings and cheks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 

Your solution MUST have AT LEAST the following complexities.
Time Complexity - O(N+M)
Space Complexity - O(1)

[Example]
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // false
isSubsequence('abc', 'acb') // false
```
```
[My Solution] 

function isSubsequence (str1, str2) {

    if (str1.length === 0 || str2.length === 0) return false

    let i = 0
    let j = 0

    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i ++
        }

        if (i === str1.length) {
            return true
        }

        j++
    }

    return false
   
}
```
```
[Answer] 

// 1) Solution 1 - 반복
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

// 2) Solution 2 - O(1) 공간이 아닌 재귀
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
```

<br>

#### < Sliding Window - maxSubarraySum > 
```
[Problem] 
Given an array of integers and a number, 
write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constarints:
Time Complexity - O(n)
Space Complexity - O(1)

[Example]
maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubarraySum([2, 3], 3) // null
```
```
[My Solution] 

function maxSubarraySum (arr, num) {
    if (arr.length < num) return null
    let temp = 0
    let max = 0
    for (let i=0; i<num; i++) {
        temp += arr[i]
    }
    max = temp
    for (let i=num; i<arr.length; i++) {
        temp = temp + arr[i] - arr[i-num]
        if (max < temp) max = temp
    }

    return max
}
```
```
[Answer] 

```

<br>

#### < Sliding Window - minSubArrayLen > 
```
[Problem] 
Wirte a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Time Complexity - O(n)
Space Complexity - O(1)

[Example]
minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smalledst subarray
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
```
```
[My Solution] 


```
```
[Answer] 
```

<br>

#### < Sliding Window - findLongestSubstring > 
```
[Problem] 
Write a function called findLongestSubstring, 
which accepts a string and returns the length of the longest substring with all distinct characters.

Time Complexity - O(n)

[Example]
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

```
```
[My Solution] 
```
```
[Answer] 
```