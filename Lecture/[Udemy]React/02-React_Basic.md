# [Udemy] Prefect REACT Guide (with Redux, Next.js, TypeScript)

---

## Section 3. 리액트 기초 및 실습 컴포넌트

3-1 Module

3-2 Component

3-3 React Project (feat. CRA)

---


## Module
Component-Driven User Interfaces
Building Interactive & Scalable UIs 
Component 라는 개념 이용하여 UI 만들기

Module Content
- React Core Syntax & JSX
- Working with Components 
- Workign with Data 

<br>
## Component
```
컴포넌트란 무엇인가? 왜 리액트는 컴포넌트의 전부라고하는가?
```
리액트는 컴포넌트로 구성되어있다

React is a JavaScript library for building user interfaces
HTML, CSS & JavaScript are about buildign user interfaces as well
React makes building complex, interactive and reactive user interfaces __simpler__

React is all about "__Components__"
Because all user interfaces in the end are made up of components

#### Why Components?
- Reusability  재사용성
    DRY(Don't Repeat Yourself)
- Separation of Concerns  관심사의 분리
    Don't do too many things in one and the same place (function)
- Reusability, Separation of Concerns => Split big chunks of code into multiple smaller functions 

```
리액트 코드는 '선언적 방식'으로 작성됐다
```
#### How is a Component built?
- React allows you to create __re-usuable and reactive components__ 
    consisting of __HTML and JavaScript__ (and CSS)    
=> Declarative Approach ('선언 접근 방식' 으로 컴포넌트 생성)
=> Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions __'최종 상태' 만 정의하면 된다__

Build your own, __custom HTML Elements__

<br>
## React Project 생성 및 분석(feat. CRA)
1. CRA  
yarn create react-app react-complete-guide 

2. npm 설치 
npm install 
(완료 후, node_modules 폴더 생성 확인. =로컬 시스템에 다운된 third-part-packages)

3. 프로젝트 실행
yarn start 

#### <!> <U>index.js 파일은 첫 번째로 실행되는 파일</U>
#### 1) src/index.js
- 'react-dom'(third-party library, 목록은 package.json 에서 확인) 에서 ReactDOM 객체를 import 
- package.json 에는 두 개의 리액트 종속성(dependency)가 있음 : __react__, __react-dom__
    이들은 다른 책임을 맡는 두 개의 분리된 package 이지만, 결국 함께 React Library 가 된다
- react 는 리액트 자체를, react-dom 은 리액트의 특성을 이용할 수 있다
- (참고 : third-party library 또는 JS 파일은 import 시, 확장자 생략)
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
#### 2) public/index.html
- 처음 실행 시, 브라우저에서 로드된 single HTML file
- 리액트는 SPA (Single Page App) 를 만들기 때문에 하나의 HTML 파일(index.html)만이 브라우저에 전달되고, 브라우저에 의해 host (or render) 된다
- 하나의 싱글 파일에서는 완성된 React App code 를 가져오지만 이것이 시작 코드는 아니다. 스크린에서 뭘 보게 될지 업데이트되는 일을 한다
- index.js 에서 id=root 인 div 를 <App /> 컴포넌트로 대체
```
 <body>
    <div id="root"></div>
</body>
```
#### 3) src/App.js
##### JSX
- 유효한 JS 코드가 아님에도 작동 : __JSX__ 라는 특성 (리액트의 특별 구문). '변형 과정' 이 있었기 HTML 코드가 JavaScript 코드로 변형됨. 브라우저에서 작동하는 코드로 변형됨
- JSX 코드 : JavaScript 내에 있는 HTML 코드
- JSX stands for '__JavaScript XML__' (HTML 은 결국 XMl 이므로) 
- 자동으로 변환되므로 코드를 쓰기 쉽다! (developer-friendly code)
##### Component
- Component : 전용 HTML 요소 (__custom HTML elements__)
- __Declarative Approach__ (선언적 접근방식) : 선호하는 타겟 상태(or 최종 상태)를 정한 뒤, 실제 돔 지시를 생성 및 실행 
    예) App 의 JSX 코드가 우리가 원하는 타겟 상태. 즉, 화면에 Hello React 를 띄우는 것이 최종 목표.
- 반대되는 __imperative Approach__ (명령형 접근법) : 기존 JavaScript 로 작성했던 방식. JavaScript 와 Browser 가 수행할 일들에 대한 확실한 단계별 지시가 있음
    ```
    const para = document.createElement('p')
    para.textContent = 'This is also visible'
    document.getElementById('root').append(para)
    ```

```
function App() {
  return (
    <div>
        <h2>Hello React</h2>
    </div>
  );
}
export default App;
```

<br>
## Make Own Project
####Build a Component Tree
- 하나의 컴포넌트의 return 명령 당 (혹은 하나의 JSX 코드 당) 하나의 Root 요소만 가져야 한다
```
<App />    : Rendered into single HTML Page (by ReactDOM render instruction)
  |____<Header />
  |
  |
  |____<Tasks />
        |___<Task />
        |___<Task />
        |___<Task />
```

#### <!> <U>React 에서 Component 는 JavaScript 함수 일 뿐이다</U>
