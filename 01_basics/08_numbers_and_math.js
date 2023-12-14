const score = 123;
const balance = new Number(456);

// console.log(score); // 123
//console.log(balance); //[Number: 456]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(3)); // 456.000

const otherNumber = 12.56;
// console.log(otherNumber.toPrecision(2));//13
// console.log(otherNumber.toPrecision(3));//12.6

// use precision function cautiously

const hundreds = 100000000;
// console.log(hundreds.toLocaleString()); // 100,000,000 usa standards
// console.log(hundreds.toLocaleString('en-IN')); //10,00,00,000 indian standards

// +++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

// console.log(Math.round(4.4));//4
// console.log(Math.abs(-4.4)); //4.4
// console.log(Math.ceil(4.6));//5
// console.log(Math.floor(4.4)); //4
// console.log(Math.min(4,7,2,9,3));//2
// console.log(Math.max(4,7,2,9,3));//9


// ++++++++++++++Math.random++++++++++++++++++++++++++
// console.log(Math.random()); // always between 0 and 1

// console.log(Math.round((Math.random())*10) + 1);


// Imp formula 
// To get value between given range 

const min = 5;
const max = 20;

console.log(Math.round((Math.random())*(max-min+1)) + min);// imp formula 

// keepmthis formula in mind 











