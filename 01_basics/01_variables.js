// memory space required to store data 

const  accountId = 144553   // zyada tar cheezain change nahi honi chahia is lia const zyada use hota ha
let    accountEmail ="wasam@gmail.com"
// let has scope 
var    accountCity = "Islamabad"
// scope issue in var
accountPassword="223344555" // yeh tariqa bilkul bhi acha nahi ha 
let accountState; // undefined 
console.log(accountId) // 144553
console.table([accountId,accountEmail,accountCity,accountState,accountPassword])
// Result


// ┌─────────┬───────────────────┐
// │ (index) │      Values       │
// ├─────────┼───────────────────┤
// │    0    │      144553       │
// │    1    │ 'wasam@gmail.com' │
// │    2    │    'Islamabad'    │
// │    3    │     undefined     │
// │    4    │    '223344555'    │
// └─────────┴───────────────────┘





// blockscope  means written in  {}

// prefer not to use var 
// because of issue in block scope and functional scope  