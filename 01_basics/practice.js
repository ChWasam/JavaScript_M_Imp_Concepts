const myArray =[ 
{
    name:"Wasam,",
    age:25,
    Designation:"AC"
},
{
    name:"Zain",
    age:33,

},
{
    name:"Mujahid",
    age:35,
    Designation:"DD"
}
]
// let missingDesignation = "(Missing in Database)";
let personNumber = 0;
myArray.forEach((value) => {
    
    // console.log(`Designation of Person no : ${++personNumber} who is ${value.name} appointed as ${value.Designation? value.Designation:missingDesignation }`);
    console.log(`Designation of Person no : ${++personNumber} who is ${value.name} appointed as ${value.Designation?? "(Missing in Database)"}`);
    
});


// sum of all the ages given in the array given above

const sumOfAges = myArray.reduce((accumulator,currentvalue)=>{ return accumulator+currentvalue.age},0)
console.log(sumOfAges)

// make an array of ages

const newArrayOfAges = myArray.map((value)=>(value.age))
console.log(newArrayOfAges);

// Generate array of individuals elder than 30

const elderThan30 = myArray.filter((value)=>value.age>30).map((value)=>value.name)
console.log(elderThan30);