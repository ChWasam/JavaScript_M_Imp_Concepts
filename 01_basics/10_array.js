// array is an object 

// Array copy operations create shallow copies ==>> IMP 

// shallow copy == jo change karain ga original array me bhi change ho ga=> same reference point 

// deep copy=> properties donot share the same reference 

let myArr = [9,8,7,6,5,4];
// console.log(myArr); // [ 9, 8, 7, 6, 5, 4 ]
// console.log(myArr[1]);//8
// console.log(myArr[0]);//9

// let myArr1 = new Array (11,12,13,14,15);
// console.log(myArr1); // [ 11, 12, 13, 14, 15 ]
// console.log(myArr1[1]);//12
// console.log(myArr1[0]);//11

// as a programmer computer pa load nahi ana dana ha 
// jasa unshift ha 

// console.log(myArr.unshift(10));// yahan to 5 values han lakin agar
//  lakhon me  values hoti to computer pa load ata 
// wo is lia ku kah baqi sab aga shift hoti
// lakin optimization bad me ati ha pehla code chalna to chahia 

// push pop shift unshift 
// indexof (agar mojod nahi ha to -1 return ai ga )

// join

const newArr = myArr.join();
// console.log(newArr); // converted to simple string  9,8,7,6,5,4
// console.log(myArr); // [ 9, 8, 7, 6, 5, 4 ]

// slice 
// console.log("A",myArr); // A [ 9, 8, 7, 6, 5, 4 ]
// let mNA1 = myArr.slice(1,3); 
// console.log(mNA1);// [ 8, 7 ]
// console.log("B",myArr);// B [ 9, 8, 7, 6, 5, 4 ]
// // splice 
// let mNA2 = myArr.splice(1,3);
// console.log("C",myArr);// C [ 9, 5, 4 ]
// console.log(mNA2); // [ 8, 7, 6 ]


//
// question methods 
// include 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 



const my_friends = ['sardar', 'ahsan','fakher'];
const ali_friends = ['basit', 'zubair', 'saad'];

my_friends.push(ali_friends);// push update existing array

// console.log(my_friends); // [ 'sardar', 'ahsan', 'fakher', [ 'basit', 'zubair', 'saad' ] ]

//  array within a array 

// How to correct it ?

const total_Friends = my_friends.concat(ali_friends); // concat update in new array
//console.log(total_Friends);   // [ 'sardar', 'ahsan', 'fakher', 'basit', 'zubair', 'saad' ]


// spread operator  ...\

const all_Friends = [...my_friends,...ali_friends];
//console.log(all_Friends); // [ 'sardar', 'ahsan', 'fakher', 'basit', 'zubair', 'saad' ]


// array within array 

const given_array = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
const new_array = given_array.flat(Infinity);
// console.log(new_array); 
//Result // [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]


// Array 

//console.log(Array.isArray("WASAM")); // false
//console.log(Array.isArray(["WASAM"])); // true
//console.log(Array.from("WASAM"));  // [ 'W', 'A', 'S', 'A', 'M' ]

//console.log(Array.from({name:"WASAM"})); // Interesting (will be disscussed in future )


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]














