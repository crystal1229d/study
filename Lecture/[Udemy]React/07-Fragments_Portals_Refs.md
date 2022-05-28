# [Udemy] Prefect REACT Guide (with Redux, Next.js, TypeScript)

---

## Section 7. Fragments, Portals & Refs
#### More Tools for your Toolbox!

7-1 Fragment

7-2 Portal

7-3 Ref

---


## <span style='font-weight:700;background:#D3D3D3'>What to Learn</span>
##### < Module Content >
- JSX Limitations & Fragments 
- Getting a cleaner DOM with Portals
- Working with Refs
---

<br>

## <span style='font-weight:700;background:#D3D3D3'>JSX Limitations & Fragments </span>
### JSX Limitations
* JSX 
    * 컴포넌트에서 반환 (return)하는 코드
    * 리액트가 이 코드를 실제 DOM 으로 render 
    (JSX code => React createElement)
* JSX Limitations
    * <strong>Only one Root JSX element (No nested!)</strong> 
    you <strong>can't return more than one 'root' JSX element</strong> (you also can't store more than one 'root' JSX element in a varialbe)
    Because you can't return more than one thing in JavaScript 
    단 한개의 React.createElment 호출만 반환되어야 한다
    ```js
    // ** invalid
    return (
        <h2>Hi!</h2>
        <p>This does not work</p>
    )
    ```
    ```js
    // ** invalid
    // Because this also isn't valid JavaScript
    return (
        React.createElement('h2',{}, 'Hi!')
        React.createElement('p', {}, 'This does not work')
    )
    ```

    <br>

### The Solutuion : Always Wrap Adjacent Elements

    ```
    // ** valid 
    return (
        <div>
            <h2>Hi!</h2>
            <p>This does work</p>
        </div>
    )
    ```

* <strong>Important</strong> : Doesn't have to be a ```<div>``` - ANY element will do the trick. 

* ```<div>``` 대신, native JavaScript 배열을 사용하는 방법도 존재
    * 하지만 배열의 각 값 마다 key 를 추가하고 배열로 감싸는 것이 번거롭기 때문에 잘 사용하지 않음 
    ```js
    return [
        <h2 key='h2'>Hi!</h2>, 
        <p key='paragraph'>Thie does work</p>
    ]
    ```

<br>

### A New Problem: "```<div>``` Soup" 
```js
<div>
    <div>
        <div>
            <div>
                <h2>Some content</h2>
            </div>
        </div>
    </div>
</div>
```
In bigger apps, you can easily end up with <strong>tons of unnecessary</strong> ```<div>```s (or other elements) which add <strong>no semantic meaning of structure</strong> to the page but are <strong>only there because of React's/ JSX' requirement.</strong>

### Introducing Fragments 
예제 ) Wrapper component
* DOM 에 아무것도 렌더링하지 않는 빈 component
* props.children 만을 반환한다
* Wrapper component 로 여러 component 들을 감싸면 JSX 의 요구사항을 만족시키면서도 의미없는 nested div 를 render하지 않을 수 있다 (=div soup 에 빠지지 않을 수 있다)
* 개발자도구에서 확인해보면, Wrapper Component 로 감쌌을 때 추가적으로 div 가 render 되지 않는 것을 확인할 수 있다.
```js
// components/Helpers/Wrapper.js
// JSX 사용하지 않을 것이기 때문에 import 문 사용 X 

const Wrapper = props => {
    return props.children;
}

export default Wrapper
```

```js
return (
    <Wrapper>
        <h2>Hi!</h2>
        <p>This does not work</p>
    </Wrapper>
)
```

<br>

<strong>React.Fragment</strong> 
* It's an <strong>empty wrapper component</strong>: It <strong>doesn't render</strong> any real HTML element to the DOM. But if <strong>fulfills React's / JSX' requirement</strong>
* React 에서 Fragment 라는 이름으로 Wrapper Component 과 같은 형태를 기본 제공하는 기능
* 프로젝트 설정에 따라 아래 두 가지 방식 중 하나를 채택해 사용
    (첫 번째 방법은 항상 작동한다)
* ```import React from 'react'``` => ```<React.Fragment>```
    ```import React, { Fragment } from 'react'``` =>  ```<Fragment>```
```js
return (
    <React.Fragment>
        <h2>Hi!</h2>
        <p>This does not work</p>
    </React.Fragment>
)
```
```js
return (
    <>
        <h2>Hi!</h2>
        <p>This does not work</p>
    </>
)
```

<br>

## <span style='font-weight:700;background:#D3D3D3'>Portals</span>

### Understanding React Portals 
```js
// 사용 예시 : index.js 
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

* <strong>Semantically</strong> and from a 'clean HTML structure' perspective, having this nested modal isn't ideal. It is an <strong>overlay to the entire page</strong> after all (that's similar for side-drawers, other dialogs etc).
* 기본적으로 모달은 페이지 위에 표시되는, 즉 전체 페이지에 대한 오버레이이다.
    따라서 모든 요소 위에 있다.
    따라서 모달이 다른 HTML 코드 안에 중첩되어 있다면, 기술적으로 스타일링 덕분에 작동할 지는 몰라도 좋은 코드, 좋은 구조인 것은 아니다.
* 스타일링이나 접근성의 관점에서 문제가 생길 수 있다.
```js
// code 
return (
    <React.Fragment>
        <MyModal />
        <MyInputForm />
    </React.Fragment>
)
```
<br>
Real DOM
```html
<section>
    <h2>Some other content ...</h2>
    <div class='my-modal'>
        <h2>A modal title</h2>
    </div>
    <form>
        <label>Username</label>
        <input type='text' />
    </form>
</section>
```

<br>

* It's a bit like styling a ```<div>``` like a ```<button>``` and adding an event listener to it: It'll work, but it's not a good practice.
```js 
<div onClick={clickHandler}>Bad button</div>
```

<br>

* HTML, CSS, JavaScript 는 너무나 유연하기 때문에 너무나 많은 것이 가능하다. 하지만 그렇다고 해서 '작동'한다고 해서 좋은 코드라고 생각해서는 안된다. 

<br>

### Using Portals

* 2가지 필요 요소 
    1) 컴포넌트를 이동시킬 장소
    2) 컴포넌트에게 포털을 가져야 한다고 알림 
* 모달 전체가 렌더링 되는 곳에 실제로 렌더링 되어서는 안되기 때문에 아래와 같이 수정한다.


1) 컴포넌트를 이동시킬 장소 지정
    public/index.html 의 root 의 자매 div 를 생성
    여러 개의 root div 를 생성하여 여기로 여러 다른 종류의 컴포넌트들이 포털될 수 있게끔 한다. (모든 종류의 오버레이, 모달, 사이드 드로어 등을 가져온다)

```html
<body>
    <div id='backdrop-root'></div>
    <div id='overlay-root'></div>
    <div id='root'></div>
</body>
```

2) 컴포넌트에게 포털을 가져야 한다고 알림
    Modal Component 에게 실제로 어딘가로 포탈되어야 한다고 알려야 한다.
    2-1) Modal Component 를 두 개의 컴포넌트로 쪼갠다 => Backdrop , Overlay 
    2-2) react-dom 라이브러리에 정의되어 있는 메소드 createPortal 호출 
        * createPotal 의 인수 2개 : 
        인수1 : 렌더링되어야 하는 리액트 노드(JSX 이어야 함!!!!) 
        ```ReactDOM.createPortal(<Backdrop />)``` (O)
        ```ReactDOM.createPortal(Backdrop)``` (X)
        인수2 : 포인터 (요소가 렌더링되어야 하는 실제 DOM의 컨테이너를 가리키는 포인터)
        이 때, DOM API 를 사용! (document.getElementById...)
        * 참고 : react 는 일종의 라이브러리. 모든 리액트 기능, state 관리 애드온, 베이크 인 등이 있다. react-dom 은 그러한 로직과 기능들을 웹 브라우저로 가져오기 위해 react 사용.
        즉, 그것들이 DOM 에서의 작업들과 호환되도록 해주는 라이브러리 
        즉, react 라이브러리 자체는 리액트를 DOM 이 있는 환경에서 실행하는지, 네이티브 앱을 빌드하는데 사용하는지 신경쓰지 않는다. 
        따라서, <strong>react-dom 은 브라우저에 대한 리액트용 어댑터의 일종</strong>
```json 
"dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.1",
    "@testing-library/user-event": "^7.2.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
```

```js
import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'

import classes from './ErrorModal.module.css'

const ErroModal = props => {
    return (
    <>
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </>
      
  )
}

export default ErroModal
```

```js
import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../Button/Button'
import Card from '../Card/Card'

import classes from './ErrorModal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErroModal = props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
    </>
      
  )
}

export default ErroModal
```

<br>

* Portal 의 핵심 : 렌더링된 HTML content 를 JSX 코드 내에서 다른 곳으로 옮긴다 

<br>

## <span style='font-weight:700;background:#D3D3D3'>Ref</span>
### How to Use Ref

* Ref (reference, 참조) : 다른 DOM 요소에 접근해서 작업할 수 있게 한다 
* Ref 를 사용하 마지막에 렌더링되는 HTML elements 와 다른 JavaScript 코드의 연결을 설정할 수 있다.

1) useRef (React hook) 을 사용하여 ref 생성 
2) 연결하려는 HTML element(요소) 에 관한 이름 명명 
    예) ```<input type='text' id='userName' />``` 와 연결할 경우, nameInput 
3) 초기값 : undefined (default)
4) 생성한 ref 를 대상 element 의 요소로 추가함으로써 React 에 해당 ref 와 HTML elemnt 를 연결한다고 알림
    어떤 HTML elment 라도 ref 와 연결할 수 있다 (주로 input 과 많이 연결)
```js
const nameInputRef = useRef();

return (
    <input type='text' id='username' ref={nameInputRef} />
)
```

* nameInputRef : ref 를 저장하는 상수
* ref 를 컴포넌트가 렌더링하는 JSX 코드와 연결
* React 가 이 코드에 처음 도달하여 해당 코드를 렌더링할 때, nameInputRef 에 저장된 값(예: undefined)을 렌더링된 native DOM elment(예: input 태그) 에 설정한다 
* 즉, <strong>nameInputRef 안에 있는 값은 나중에 실제 DOM 요소가 됨</strong>
* ref 에서 생성되는 값은 항상 Object(객체) 이며, current prop을 갖는다. 
    current prop 은 그 ref 가 연결된 실제 값을 갖는다 
    즉, default value = undefined 이지만, 
    코드가 실행되자마자 ref 의 current prop 에 값으로써 저장된 element (=DOM node) 와 연결된다. 
    따라서 이를 조작하거나 여러 가지 작업을 할 수 있다 
* 하지만 조작하지 않는 것이 좋다. DOM 은 리액트에 의해서만 조작되어야 한다!
    Ref 로는 element (예를 들어 input) 에서 데이터를 읽어오는 작업을 하자. (읽어오는 것으로는 아무것도 변경시키지 않기 때문)
    ```nameInput.current.value```
* 이로써, State 없이도 모든 요소에 접근할 수 있다!

1) 값 추출 : ref의 ```current``` 를 이용해 input 의 값을 가져온다
2) 재설정(reset) : ref 로 DOM 을 조작하는 방법 (일반적으로는 권장되지 않고, 해서는 안되지만, 사용자가 입력한 값을 재설정하는 경우에는 가능) ```nameInputRef.current.value = '' ```
    -> 실제로 DOM 을 조작한 것이 아님(새로운 element 추가 또는 CSS 클래스 변경이 아님)
    -> 사용자의 입력값을 바꾼 것 뿐

<br>


### Differences between State & Ref

<strong>State : 더 깔끔하고, 예외적인 상황 X /  코드를 더 많이 써야 함
Ref : 더 적은 코드, 편하게 요소에 접근 / DOM 을 조작한다는 상당히 예외적인 일을 해야 함
값만 읽어야 하고, 아무런 것도 바꾸지 않는다면 State 가 굳이 필요치 않다. 
불필요한 코드작업만 많아질 뿐.
따라서 값을 읽어야 하는 작업만 있다면, Ref 를 사용! </strong>

<br>

State 를 사용하던 기존 코드
```js
import React, { useState } from 'react'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import ErrorModal from '../UI/ErrorModal/ErroModal'

import classes from './AddUsers.module.css'

const AddUser = (props) => {

    const [EnteredUserName, setEnteredUserName] = useState('')
    const [EnteredUserAge, setEnteredUserAge] = useState('')
    const [Error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        if (EnteredUserName.trim().length === 0 || EnteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        if (+EnteredUserAge < 1) {
            setError({
                title: 'Invalid input', 
                message: 'Please enter a valid age (bigger than 0).'
            })
            return 
        }

        props.onAddUser(EnteredUserName, EnteredUserAge)

        setEnteredUserName('')
        setEnteredUserAge('')
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
        {Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={EnteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor='userage'>Age</label>  
                <input id='userage' type='number' value={EnteredUserAge} onChange={userAgeChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser
```

Ref 를 사용한 새로운 코드
```js
import React, { useRef, useState } from 'react'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import ErrorModal from '../UI/ErrorModal/ErroModal'

import classes from './AddUsers.module.css'

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [Error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input', 
                message: 'Please enter a valid age (bigger than 0).'
            })
            return 
        }

        props.onAddUser(enteredName, enteredAge)

        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
        {Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    type='text'
                    ref={nameInputRef} />
                <label htmlFor='userage'>Age</label>  
                <input
                    id='userage'
                    type='number'
                    ref={ageInputRef}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser
```

<br>

### Controlled Component & Uncontrolled Component 
제어되는 컴포넌트와 제어되지 않는 컴포넌트

* Uncontrolled Component 
    * ref 를 사용해 DOM 요소 (특히 input 요소)와 상호작용하는 위의 방법, 즉 ref 로 값에 접근하는 경우 접근된 해당 요소(=입력 컴포넌트)는 제어되지 않는 컴포넌트가 된다.
    ```<input type='text' id='username' ref={nameInputRef} />```    
    * 그것들이 internal state (내부 state) 이기 때문이다! 요소들 안으로 반영되는 값은 React 에 의해 제어되지 않는다
    * 즉, 우리는 기본적인 input 의 작동법을 따르고 있을 뿐이다. 사용자가 input 에 값을 입력하고 입력된 값이 해당 요소에 반영되면 우리는 그 값을 가져오고 있을 뿐, 요소에 다시 데이터를 보내지는 않는다. 
    * (```nameInputRef.current.value = ''```) 이 방법에서 React 는 쓰이지 않았으며, Ref 를 이용하는 것은 native DOM 요소에 접근하기 위함일 뿐이다.
    * <strong> Uncontrolled : React 로 이 입력 요소의 state 를 제어하지 않음</strong>

    <br>

    * 일반적으로 input 컴포넌트 = form 컴포넌트. 
    form component 는 기본적으로 Browser 에 의해 내부 state 를 갖는 경향이 있다.
    (사용자 입력을 받아 저장하고 반영하는 input element)

    <br>
    
* <strong>State 를 이용했던 방식 = Controlled (제어된 접근 방식). 해당 input 은 제어된 컴포넌트라고 할 수 있다. 내부 state 가 리액트에 의해 제어되기 때문</strong>
```<input id='username' type='text' value={EnteredUserName} onChange={userNameChangeHandler} />```
