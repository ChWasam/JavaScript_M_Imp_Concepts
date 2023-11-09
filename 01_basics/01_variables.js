// memory space required to store data 

const  accountId = 144553   // zyada tar cheezain change nahi honi chahia 
let    accountEmail ="wasam@gmail.com"
// let has scope 
var    accountCity = "Islamabad"
// scope issue in var
accountPassword="223344555" // yeh tariqa bilkul bhi acha nahi ha 
let accountState; // undefined 
console.log(accountId)
console.table([accountId,accountEmail,accountCity,accountState,accountPassword])



// blockscope {}

// prefer not to use var 
// because of issue in block scope and functional scope  