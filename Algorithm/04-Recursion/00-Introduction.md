# [Udemy] Javascript Algorithm

---

## Section 5. Recursion

### 5-1 Objectives 

### 5-2 What is recursion?

### 5-3 Functions & Call stack

### 5-4 The Call Stack

### 5-5 Why Important?

---

## < Objectives >
* Define what recursion is and how it can be used
* Understand the two essential components of a recursive function 
* Visualize the call stack to better debug and understand recursive functions
* Use helper method recursion and pure recursion to solve more difficult problems

<br>

## < What is recursion? >
* <strong>What is recursion?</strong>
A process (a function in our case) that calls itself, 자기 자신을 호출하는 함수 

<br>

* <strong>Why do we need to know this?</strong>
It's Everywhere! 재귀는 모든 곳에 항상 사용되기 때문
    * JSON.parse / JSON.stringify
    * document.getElementById & DOM(Document Object Model) traversal algorithms (순회 알고리즘)
    <참고> DOM 은 모든 요소가 중첩된 트리 구조로 되어 있다
    * Object traversal 
    * We'll see it with more complex data structures

<br>

* <strong>Functions & Call stack</strong>
    * In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
    거의 모든 프로그래밍 언어에는 보이지 않는 곳에서 함수 호출을 관리하는 일종의 데이터 구조가 있다. 호출된 함수는 다른 함수가 반환(return) 될 때까지 기다리는 경우가 많다. (=> 특수한 순서가 생김) 이 때, 함수가 올바른 순서대로 실행되야 한다. 
    * It's names the <strong>call stack</strong>
    따라서 이것을 담당하는 데이터 구조가 있다. JavaScript 의 경우, call stack(호출 스택)

<br>

* <strong>The Call Stack</strong>
    * It's a <strong>stack</strong> data structure 
    * Any time a function is invoked it is place (pushed) on the top of the call stack 
    함수를 호출하면 호출 스택의 꼭대기에 쌓인다
    * When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)
    자바스크립트가 반환 키워드(return keyword) 를 확인하거나, 함수 안에 더 이상 실행할 코드가 없으면 compiler가 스택의 최상단에 있는 항목 제거

<br>

* <strong>Why Important? (Why do I care?)</strong>
    * You're used to functions being pushed on the call stack and popped off when they are done
    함수가 완료되면 호출 스택 아래로 밀려나서 제거되는 것에 익숙할 것
    * When we write recursive functions, we keep pushing new functions onto the call stack!    
    하지만 재귀 함수는 계속해서 새로운 함수(사실은 동일 함수)를 호출 스택에 추가한다. 
    추가된 함수는 호출을 기다린다. 
    하지만 어느 지점에서는 호출이 종료돼야 한다. 호출의 종료 시점도 중요!

<br>

* <strong>정리</strong>
    * 호출 스택 : 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조 (static data structure)
    * 항목이 꼭대기에 추가되고, 마찬가지로 꼭대기에서 제거되며, 함수가 호출되면 이 구조에 추가된다 