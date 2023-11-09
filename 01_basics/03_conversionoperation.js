let score =NaN

console.log(typeof score)  // number


let valueInNumber=Number(score) // ab value number me convert ho gae ha 
console.log(valueInNumber); // here NaN if score ="33abc"
  // here 0 if score =null 
 // here NaN if score =undefined 
 // here 1 if score =true 
 // here 0 if score =true 
 // here NaN if score =NaN
 // type of NaN is also a number 

 let isLogedIn = 1 // true 

 let booleanIsLoggedIn = Boolean(isLogedIn)
 console.log(booleanIsLoggedIn);

 // 1=> true ; 0=> false 
 // "" => false 
//  "wasam" => true 


let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber);