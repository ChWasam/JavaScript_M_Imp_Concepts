//  data types 

// two types 
// premitive
// non primitive 

// difference in bases pa kia gya ha kah 
// 1 => yeh data memory me kis tarha store hota han aur 
// 2=> inha kis tarha sa access kia ja sakta ha 

// 1st primitive 
// call by value 
// Data => whenever you copy => not given reference of memory/ original data 
// data copy kar kah dya jata ha 
// jo bhi changes karta han wo copy me changes karta han 


// 7 categories 
// string,number,boolean,null,undefined, Symbol, BigInt 

const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34567827364654748595955279 // zyada bara number ban gya ha 
const anotherBigNumber = 34567827364654748595955279n // by placing n it has become BigInt

// null ka type object hota ha 


// 2nd non-premitive + reference types 
// original value milti ha copy nahi milti
// all non-premitive dataTypes has type objects 
// only type of function is known as function object 
// Arrays, Objects, Functions

let heroes = ['wasam', 'ali']

let hero = {
    height : '10cm',
    color : "brown"
}

let action = function(){
    console.log('dancing');

}



//********************************************************************* 
// Js is dynamically typed languages 




// call by value 
// call by reference 


