## WIL : JavaScript 로 날짜 다루기


#### toLocaleString
```
const date = new Date(2022, 4, 01)

const month = date.toLocaleString('en-US', { month:'long' })
const day = date.toLocaleString('en-US', { day:'2-digit' })
const year = date.getFullYear()
```