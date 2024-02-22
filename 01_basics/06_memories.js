// memories
// 2 types 
// 1.Stack Memory (contains  Primitive datatypes) => From stack we get copy
// 2. Heap Memory (non-primitive) => From Heap we get reference/ actual value 


// Example of stack

let myYoutubename = "wasamCh"

let myNewYoutubeName = myYoutubename

myNewYoutubeName = "Chwasam"

//check

console.log(myYoutubename); // WasamCh
console.log(myNewYoutubeName);// Chwasam

// here in stack only we get copy that's why no change in actual value 


// Example of heap 

let userOne = {
    name : "wasam",
    id : "61101-0943874-1"
}
let userTwo = userOne

userTwo.name = "Ali"

// check 
// we will get change in userOne.name 

console.log(userOne.name); // Ali
console.log(userTwo.name); // Ali
// we will get same result 
// here in heap  we get actual reference that's why  change in actual value 