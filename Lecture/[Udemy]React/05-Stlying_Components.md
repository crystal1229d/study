# [Udemy] Prefect REACT Guide (with Redux, Next.js, TypeScript)

---

## Section 6. Styling Components
#### Make Your Apps Look Good

5-1 What to Learn

5-2 

---


## <span style='font-weight:700;background:#D3D3D3'>What to Learn</span>
#### Working With Really Dynamic Content
##### < Module Content >
- Conditional & Dynamic Styles
    - 1. Styled Components
    - 2. CSS Modules 
---

<br>
## <span style='font-weight:700;background:#D3D3D3'>Dynamic Data</span>
#### 이벤트 리스닝 및 이벤트 핸들러 수행
dynamic content = dynamic data. 
정적 데이터는 코드 상에서 갖고 있는 데이터를 의미한다. 

### 1) 동적 인라인 스타일 설정
```
// CourseInput.js 

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
    console.log(event.target.value.trim().length, isValid)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input style={{ borderColor: !isValid ? 'red' : '#ccc', background: !isValid ? 'salmon' : 'transparent' }} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```

### 2) 동적 CSS 클래스 설정
<!> 참고 : CSS 파일에서 ```.form-control .invalid``` 와 ```.form-contorl.invalid``` 의 차이
```
// CourseInput.css 

.form-control {
  margin: 0.5rem 0;
}

.form-control label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

.form-control input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

.form-control.invalid input {
  border-color: red;
  background: #ffd7d7;
}

.fomr-control.invalid label {
  color: red;
}
```

```
// CourseInput.js 

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
    console.log(event.target.value.trim().length, isValid)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```

### 3) styled components 
* 특정 스타일이 첨부된 컴포넌트를 구축할 수 있도록 돕는 package 
이 스타일이 첨부되는 컴포넌트에만 영향을 미치고 다른 컴포넌트에는 전혀 영향을 미치지 않는다.
* styled-components 설치 필요
```
// Button.css

.button {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
```

```
// Button.js

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

##### styled components 적용 후
```styled.button`` ``` 
* tagged template literal 문법 
* button : styled 객체의 method
    styled 는 styled-components 에서 import 한 객체 
    흔히 메서드 뒤에 붙이는 괄호 () 대신, 백틱 `` 을 붙인다
* 이는 JS 에서 지원하는 기본적인 JavaScript 구문
* 백틱 사이에 전달하는 것이 결국 Button 메서드로 전달된다
* Button 메서드는 새로운 button 컴포넌트를 반환한다. 
    이 때, 개발자모드에서 보면 클래스 이름이 이상한데, 이는 styled-components 패키지에 의해 동적으로 생성된 클래스이다
<br>
* styled 패키지는 모든 HTML element(요소) 에 대한 메서드를 갖고 있다
    예: p, h1, h2, div, ...
<br>
* & 연산자 : 생성한 컴포넌트에 대해 특별한 가상 선택자를 사용하겠다고 패키지에 선언 
    ```&:focus``` : 이 컴포넌트에 focus 가 있으면 이 style 을 적용해!
<br>
<!> 참고 : style component 를 적용하여 더 이상 JSX 코드를 사용하지 않게된 아래 예시의 경우, ```import React from 'react'``` 구문은 삭제해도 된다.
```
import styled from 'styled-components'

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
```