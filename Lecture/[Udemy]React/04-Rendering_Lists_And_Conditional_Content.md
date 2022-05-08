# [Udemy] Prefect REACT Guide (with Redux, Next.js, TypeScript)

---

## Section 5. Rendering Lists & Conditional Content
#### Working With Really Dynamic Content

5-1 What to Learn

5-2 Conditionally Rendering Data

---


## <span style='font-weight:700;background:#D3D3D3'>What to Learn</span>
#### Working With Really Dynamic Content
##### < Module Content >
- Outputting Dynamic Lists of Content (목록과 조건부 컨텐츠를 렌더링하는 방법)
- Rendering Content Under Certain Conditions (페이지에서 데이터 배열을 출력하는 방법, 다양한 조건에서 다양한 컨텐츠들을 보여줄 수 있는 방법)
---

<br>
## <span style='font-weight:700;background:#D3D3D3'>Dynamic Data</span>
#### 이벤트 리스닝 및 이벤트 핸들러 수행
dynamic content = dynamic data. 
정적 데이터는 코드 상에서 갖고 있는 데이터를 의미한다. 

```
const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2022')

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear 
  })

  return ( 
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> 
    </Card>
  )
}

export default Expenses
```

<br>
동적 데이터 출력 : map 메서드 사용
```
return ( 
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        { filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) 
        }
    </Card>
)
```

<br>
조건부 내용 출력 : 3항 연산자 사용
```
return ( 
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        { filteredExpenses.length === 0  
            ? (<p>No Expenses Found</p>) 
            : filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) 
        }
    </Card>
)
```

<br>
조건부 내용 출력 : && (and)연산자 + 3항 연산자 사용 => 두 개의 표현식으로 나누어 조건 체크 
```
return ( 
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        { filteredExpenses.length === 0 && (<p>No Expenses Found</p>) }
        { filteredExpenses.length > 0 &&
            filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) 
        }
    </Card>
)
```

<br>
가장 깔끔한 방식(Lean JSX) : JSX 코드 내에 너무 많은 내용이 있으므로 <strong>JSX content 를 저장하는 변수 추가</strong> 
```
const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2022')

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear 
  })

  let expensesContent = <p>No expenses found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
  }

  return ( 
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        { expensesContent }
    </Card>
  )
}

export default Expenses
```

<br>
위에서 추가한 로직을 컴포넌트로 추출 
```
// Expenses.js 
const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2022')

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear 
  })

  return ( 
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
    </Card>
  )
}


// ExpensesList.js
const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }

    return (
        <ul className='expenses-list'>
            { props.items.map((expense) => (
                <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                /> ) 
            )}
        </ul>
    )
}
```