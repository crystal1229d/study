# [Udemy] Javascript Algorithm

---

## Section 3. Algirithms & Problem Solving Approach

### 3-5 Solve / Simplify

---

#### < Solve the Problem > 
SOLVE THE PROBLEM.
If you can't, SOLVE A SIMPLER PROBLEM.
- 다른 모든 것에 집중하기 위해 시간이 많이 소요되는 부분은 무시

<br>
#### < SIMPLIFY > 
- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

<br>
#### < Example >
```
[Problem] Wirte a function which takes in a string 
and returns counts of each character in the string.
```
```
[Process] 
function charCount (str) {
    // (1) make object to return at end
    let result = {}
    // (2) loop over string, for each character...
    for (let i=0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++
        } else {
            // if the char is a number/lectter AND not in object, add it to object and set value to 1 
            result[char] = 1
        }
    }
        // if character is something else (space, period, etc.) don't do anything 
    // (3) retrn object at end 
    return result
}
```