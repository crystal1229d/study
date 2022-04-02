    
# [Udemy] Prefect REACT Guide (with Redux, Next.js, TypeScript)

---

Section 2. JavaScript Refresher 

2-1 Module

2-2 let & const

2-3 Arrow Function

2-4 Exports & Imports

2-5 Class

2-6 Class, Properties & Methods

2-7 Spread & Rest Operators

2-8 Destructuring

2-9 Primitive & Reference (Data) Type 

---


## Arrow Function
Advantages
1) shorter
2) no more 'this' problems
```
function printMyName (name) {
    console.log(name)
} 

const printMyName = (name) => {
    console.log(name)
}

// one argument
const printMyName = name => {
    console.log(name)
}

const printMyName = name => name
const multiplay = number => number * 2

// more than one argument
const printMyName = (name, age) => {
    console.log(name, age)
}

// no argument
const printMyName = () => {
    console.log('crystal')
}


printMyName('crystal')
```

<br>
## Exports & Imports
모듈식 코드작성
1) default (unnamed) exports, 기본 내보내기 
- default keyword 사용
- ONLY export of the file 
- Name in the receiving file is up to you
```
// person.js

const person = {
    name: 'crystal'
}
export default person

```
2) named exports, 이름으로 내보내기 
- 파일에 있는 특정 콘텐츠를 대상으로 하기 위해 구문을 가져올 때 중괄호 사용
```
// utility.js

export const clean = () => { ... }
export const baseData = 10

```
```
// app.js

import person from './person.js'
import prs from './person.js'

import { baseData } from './utility.js'
import { clean } from './utility.js'
import { baseData as initData } from './utility.js'
import * as bundled from './utility.js' // bundled.baseData, bundeld.clean

```

<br>
## Class 
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.
```
class Person {
    constructor() {
        this.name = 'crystal'
    }
    printName () => {
        console.log(this.name)
    }
}

const person = new Person()
person.prinName()

// crystal
```

```
class Human {
    constructor() {
        this.gender = 'female'
    }
    printGender () {
        console.log(this.gender)
    }
}

// 상속 (inheritance)
class Person extends Human {
    constructor() {
        super();    // 부모의 생성자 실행 (초기화)
        this.name = 'peter'
        this.gender = 'male'
    }
    printName () {
        console.log(this.name)
    }
}

const person = new Person()
person.printName()
person.printGender()

// peter
// male 
```

<br>
## Classes, Properties & Methods
- Properties are like 'variables attached to classes / objects'
```
// ES6 : 생성자 함수 호출
constructor () {
    this.myProperty = 'value'
}

// ES7 : 생성자 함수 X! 클래스에 속성 바로 할당 (알아서 변환됨)
myProperty = 'value' 
```


- Methods are like 'functions attached to classes / objects'
    메서드는 함수를 값으로 저장하는 속성이라고 보면 된다.
```
// ES6
MyMethod () { ... }

// ES7 : arrow function! 
//      이 구문의 장점 : 화살표 함수를 속성 값으로 쓰므로 this 를 문제없이 쓸 수 있다
MyMethod = () => { ... }
```

Class Section 에서 사용했던 예제를 아래와 같이 간단하게 작성가능
1) constructor X
2) super X
3) this X
```
class Human {
    gender = 'female'
    printGender = () {
        console.log(this.gender)
    }
}

// 상속 (inheritance)
class Person extends Human {
    name = 'peter'
    gender = 'male'
    printName = () {
        console.log(this.name)
    }
}

const person = new Person()
person.printName()
person.printGender()

// peter
// male 
```

<br>
## Spread & Rest Operators
- syntax : ...
- 어디에 사용하는지에 따라 Spread Operator (전개 연산자) 또는 Rest Operator (나머지 연산자) 로 나뉜다.
    Spread (전개) : Used to split up array elements OR object properties
            배열 요소나 객체 속성을 나눈다
    ```
    // 예전 배열의 모든 요소를 새 배열에 추가
    const oldArray = [ 1, 2, 3 ]
    const newArray = [ ...oldArray, 4, 5 ] // this is now [ 1, 2, 3, 4, 5 ]

    // 예전 객체의 모든 속성을 새 객체이 추가 
    const oldObject = { name: 'crystal' }
    const newObject = { ...oldObject, age: 26 } // => { name: 'crystal', age: 26 }
    ```
    Rest (나머지) : Used to merge a list of function arguments into an array
                매개변수 리스트를 배열로 통합
    ```
    const sortArgs = (...args) => {
        return args.sort()
    }
    console.log(sortArgs(0,1,9,2,3,4)) // [0,1,2,3,4,9]

    const filterArgs = (...args) => {
        return args.filter(el => el === 1)
    }
    console.log(filterArgs(1,2,3)) // [1]
    ```

- The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. 

<br>
## Destructuring (구조분해할당)
- Destructuring allows you to easily extract array elements or object properties and store them in variables. 
배열 요소나 객체 속성을 추출해서 변수로 저장
- 전개 연산자와 비슷한 역할을 하는가? NO
    전개 연산자 : 모든 요소와 속성을 새 배열(또는 객체)에 분배
    구조분해 : 하나의 요소나 속성만을 배열(또는 객체)를 위한 변수로 저장

Array Destructuring
- 어떤 속성을 취할지의 기준 : 순서
```
[a, b] = ['Hello', 'Crystal']
console.log(a) // Hello
console.log(b) // Crystal

const numbers = [1, 2, 3]
[num1, num2] = numbers 
console.log(num1)   // 1
console.log(num2)   // 2

[n1, , n3] = numbers
console.log(n1)     // 1
console.log(n3)     // 3
```

Object Destructuring
- 어떤 속성을 취할지의 기준 : 속성의 이름
```
{ name } = { name: 'Crystal', age: 26 }
console.log(name) // Crystal
console.log(age)    // undefined  
```

<br>
## Primitive & Reference (Data Type)
JS 자료형의 두 가지 형태 : 원시(primitive)타입 & 참조(reference)타입
- Primitive type : String, Number, Boolean, Null, Undefined, Symbol
    메모리에 값을 그대로 저장
    참조 없이 값이 변경됐을 때 메모리에 값을 그대로 저장
    다른 변수에 변수를 재할당하고 저장!
    ```
    const number = 1
    const num2 = number // number 복사
    ```
- Reference type : Object 형식의 타입 (object, array, function, ...)
    메모리에 값을 주소로 저장
    출력 시, 메모리주소와 일치하는 값 출력
    ```
    const person = {
        name: crystal'
    }
    const secondPerson = person // person 을 복사하지는 않음

    person.name = 'soojung'

    console.log(person, secondPerson)   // soojung, soojung

    // (1) 객체 person 은 메모리에 저장되고, 상수 person 은 메모리에 포인터 저장
    // (2) secondPerson 에 person 을 할당하면 포인터가 복사됨 (메모리에 있는 같은 객체 지정)
    ```
#### <중요> 객체와 배열이 참조 타입. 재할당시, 값이 아닌 포인터 복사. 진짜 복사가 하고싶다면 새 객체를 만들고 속성만 복사.
#### <결론> 나도 모르게 다른 객체를 조정하여 예상치 못한 결과를 도출하지 않기 위해, "변화가 생기지 않도록" 복사하는 방법을 알아야 한다! 즉, 포인터가 아닌 객체를 복사하기 위해 Spread Operator 사용
```
const person = {
    name: crystal'
}
const secondPerson = { ...person } // person 객체의 속성과 값을 추출하여 새로 생성된 객체에 추가 (중괄호를 이용하여 새로운 객체 생성) = 진짜 복사!
person.name = 'soojung'
console.log(person, secondPerson)   // 'soojung', 'crystal'
```
