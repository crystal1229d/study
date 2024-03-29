# [Udemy] Javascript Algorithm

---

## Section 3. Algirithms & Problem Solving Approach

### 3-4 Break It Down

---

#### < Break the Problem Down > 문제 세분화하기
Explicitly write out the steps you need to take.
This forces you to think about the code you'll write before you write it,
and helps you catch any lingering conceptual issues or misunderstandings
before you dive in and have to worry about details as (e.g. language syntax) well.

<br>
#### < Example >
```
[Problem] Wirte a function which takes in a string 
and returns counts of each character in the string.
```
```
[Process]
charCount('Your PIN number is 1234!')
/* Expected Result : {
    1: 1,
    2: 1,    
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
 }
*/

function charCount (str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string;
    // values should be the counts for those characters 

    // (1) make object to return at end
    // (2) loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/lectter AND not in object, add it to object and set value to 1 
        // if character is something else (space, period, etc.) don't do anything 
    // (3) retrn object at end 
}
```