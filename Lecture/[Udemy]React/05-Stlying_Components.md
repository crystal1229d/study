# [Udemy] Prefect REACT Guide (with Redux, Next.js, TypeScript)

---

## Section 6. Styling Components
#### Make Your Apps Look Good

5-1 What to Learn

5-2 Styled-Components

5-3 CSS Module 

---


## <span style='font-weight:700;background:#D3D3D3'>What to Learn</span>
#### Working With Really Dynamic Content
##### < Module Content >
- Conditional & Dynamic Styles
    - 1. Styled Components
    - 2. CSS Modules 
---

<br>
## <span style='font-weight:700;background:#D3D3D3'>Styled-Components</span>

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
```js
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

### 4) Styled Components & 동적 props
```css
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
```js
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
      <div className={`form-control ${!isValid ? 'invalid' : ''} ` }>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput; 
```

<b>

#### styled-component 적용 후 

```js
import React, { useState } from 'react';
import styled from 'styled-components'

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
    
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

    &.invalid input {
      border-color: red;
      background: #ffd7d7;
    }

    &.invalid label {
      color: red;
    }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
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
      <FormControl className={!isValid && 'invalid' }>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```

<br>

#### styled-component 에 props 를 추가하기
FormControl 에 invalid 라는 이름의 props 를 추가하고, 값으로 isValid 를 넘겨준다.
백틱 내에서 props 에 접근할 수 있다. 아래와 같이 수정한다.
<u>styled component 에서 설정한 props 에 기반해서 스타일의 일부를 동적으로 바꾸는 기능</u>

```js
import React, { useState } from 'react';
import styled from 'styled-components'

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
    
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color: ${props => props.invalid ? 'red' : 'black'}
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
      background: ${props => props.invalid ? '#ffd7d7' : 'transparent'}
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
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
      <FormControl invalid={!isValid}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```

<br>

### 5) styled-components & media query
모바일 기기와 같이 너비가 작은 화면에서는 [Add Goal] 버튼이 화면 너비에 맞춰 커지게하고,이외의 경우에는 작게 유지하려고 한다 : 미디어 쿼리 
```js
// Button.js 

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

<b>

#### styled-component 에 미디어쿼리 적용 후

```js
import styled from 'styled-components'

const Button = styled.button`
  width: 100%; 
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

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


<br>

## <span style='font-weight:700;background:#D3D3D3'>CSS Module</span>
위에서 사용한 styled-components 는 기능면에서 훌륭하나, CSS 파일과 JS 파일의 분리를 선호하는 경우도 있을 수 있다.
기본 CSS 를 사용할 수 있다. (이 경우, 범위가 정해지지 않은 전역 스타일을 사용하기 때문에 클래스명 중복과 다른 스타일에 영향을 주는 것에 주의해야 한다)
이 경우, <u>CSS 모듈</u> 이라는 기능을 사용하여 CSS를 다음 단계로 발전시킬 수 있다.

CSS Module 은 이 기능을 지원하도록 설정된 프로젝트에서만 사용가능하다.
브라우저에서 코드가 실행되기 전에 코드의 변환이 필요하기 때문이다.
(CRA(Creat-React-App) 에는 이미 CSS 모듈을 지원하도록 설정되어 있다)

<br>

### 1) CSS module 적용하기 

```js
// Button.js

import React from 'react';

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

<b>

<CSS module 을 사용하는 법>
1) CSS 파일 이름 수정 : Button.css => Button.module.css 
2) CSS import 문을 아래와 같이 수정
3) className 의 값 수정 
  import 된 styles 객체는 CSS 파일 내에 정의된 모든 클래스를 property 로 갖는다.
  따라서 className 을 styles 객체의 프로퍼티명으로 수정한다.
  예를 들어, Button.module.css 에 .button { ... } 이 있으므로, 아래에서 import 된 styles 객체는 button 을 property 로 갖는다.

#### css module  적용 후

개발자모드에서 button 요소를 보면, 클래스명의 규칙은 다음과 같다 : '컴포넌트명_클래스명_고유 해시값'
css module 은 css 클래스명을 고유하게 바꾸는 작업을 하여 위에서 언급했던 문제를 해결하는 것! (스타일은 유지하면서 새로운 클래스명으로 이름만 wrapping)
=> CSS 스타일의 적용 범위가 해당 CSS 파일을 import 하는 컴포넌트에만 한정되게끔 함

```js
import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

<br>

### 2) CSS module 을 사용한 동적 스타일

1. CSS 파일명 변경 : CourseInput.css => CourseInput.module.css
2. CSS import 문 수정 : import './CourseInput.css' => import styles from './CourseInput.moduel.css'
3. className 의 값 수정
  <!> className={styles.form-control}     (X) 
      className={styles['form-control']}  (O)

```js
// CourseInput.js 
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
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
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```