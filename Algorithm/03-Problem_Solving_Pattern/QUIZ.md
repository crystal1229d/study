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

```
```
[Answer] 


```