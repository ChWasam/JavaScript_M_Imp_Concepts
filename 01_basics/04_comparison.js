console.log(null > 0); // false 
console.log(null == 0);// false 
console.log(null >= 0);// true

// The reason is that an equality check == and comparisons > ,<, >= , <= work differently in JS.

// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null >0 is false 


console.log(undefined == 0);// false 
console.log(undefined > 0);// false 
console.log(undefined <= 0);//false

// aupar wala sab code ko avoid hi karna chahia 

// strict check === 
// check (value and  datatype) both

// Note: we always do clean code isi ka sab sa zyada value ha 


