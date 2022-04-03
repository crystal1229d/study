# [Udemy] Javascript Algorithm

---

## Section 3. Algirithms & Problem Solving Patterns

### 3-3 Explore Concrete Examples

---

#### < Explore Examples >
- Coming up with examples can help you understand the problem better
- Examples also provide sanity checks that your eventual solution works how it should
- __User Stories__ or __Unit Tests__

<br>
#### < Steps of Exploring Examples >
1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty inputs (경계조건)
4. Explore Examples with Invalid Inputs (경계조건) 유효하지 않은 입력값


<br>
#### < Example >
```
[Problem] Write a function which takes in a string 
and returns counts of each character in the string.
```
```
[Process]
1. Start with Simple Examples
charCount('aaaa')   // Expected Result : { a:4 }
charCount('hello')  // Expected Result : { h:1, e:1, l:2, o:1 }
// 전달한 문자만 문자만 반환해야 하는지? 전달되지 않은 문자도 b:0, c:0 과 같이 포함해도 되는지? 

2. Progress to More Complex Examples
charCount('my phone number is 182763') 
// input 이 위와 같은 경우, 어떻게 반환해야 하는가? 공백도 고려해야하는가? 숫자도 포함해야하는가?
// 다른 문자, 달러 기호, 밑줄 등
charCount('Hello hi')
// 대문자와 소문자 모두 입력된 경우, 대소문자 무시?

3. Explore Examples with Empty inputs 
charCount() 
charCount('') 
// {}, null, false, undefined, error 중 어떤 것을 반환?

4. Explore Examples with Invalid Inputs
// input 으로 숫자, 객체, null 이 입력된다면?
```