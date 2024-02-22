const myArray =[ 
{
    name:"Wasam",
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
let missingDesignation = "(Missing in Database)";
let personNumber = 0;
myArray.forEach((value) => {
    
    console.log(`Designation of Person no : ${++personNumber} who is ${value.name} appointed as ${value.Designation? value.Designation:missingDesignation }`);
    
});