// 1) Premitive datatype
// call by value 
// stack memory
// matlab is me copy ati ha 
// String,number,boolean,null,undefine,symbol,BigInt

// ****************************************************************

// 2) Non premitive datatype
// call by Reference
// heap memory
// matlab value khud ati ha aus ke copy nahi ati 
// array , object, function

// ****************************************************************

// 3)string (check whether a particular method of string returns another string or change in original value )

// pehla string ka nam phir . aur phir method 
// nameOfString.method()

// ****************************************************************

//4) Slice => Returns a sliced string 
// const myName = " Chaudhry Wasam-ur-rehman "
// const slice1 = myName.slice(1,9) //L to R
// const slice2 = myName.slice(-17,-25) //L to R // Empty
// const slice3 = myName.slice(-25,-17) //L to R

// console.log(myName) // Chaudhry Wasam-ur-rehman 
// console.log(slice1) //Chaudhry
// console.log(slice2) // Empty
// console.log(slice3) // Chaudhry


// ****************************************************************

//5) trim => Returns a trimed whitespace string 
// const myName = " Chaudhry Wasam-ur-rehman "
// const slice1 = myName.trim() 
// const slice2 = myName.trimStart() 
// const slice3 = myName.trimEnd() 

// console.log(myName) //  Chaudhry Wasam-ur-rehman 
// console.log(slice1) //Chaudhry Wasam-ur-rehman
// console.log(slice2) //Chaudhry Wasam-ur-rehman 
// console.log(slice3) //  Chaudhry Wasam-ur-rehman

// ****************************************************************

//6) replace => Returns string after replacement
// const myName = "https://wasam.com/wasam%20ChaudhryWasaM"
// const slice1 = myName.replace('%20','-')
// const slice2 = myName.replace(/wasam/g,'ali')
// const slice3 = myName.replace(/wasam/gi,'ali')

// console.log(myName) //https://wasam.com/wasam%20ChaudhryWasaM
// console.log(slice1) //https://wasam.com/wasam-ChaudhryWasaM
// console.log(slice2) //https://ali.com/ali%20ChaudhryWasaM
// console.log(slice3) //https://ali.com/ali%20Chaudhryali

// ****************************************************************

//7) includes => returns boolean
// const myName = "https://ali.com/ali%20ChaudhryWasaM"
// const slice1 = myName.includes('wasam')


// console.log(myName) // https://ali.com/ali%20ChaudhryWasaM
// console.log(slice1) // false



// ****************************************************************

//8) split => Returns splitted values in arrayy
// const myName = "ch wasam ur rehman"
// const slice1 = myName.split()
// const slice2 = myName.split(" ")
// const slice3 = myName.split("")

// console.log(myName) //ch wasam ur rehman
// console.log(slice1) //[ 'ch wasam ur rehman' ]
// console.log(slice2) //[ 'ch', 'wasam', 'ur', 'rehman' ]
// console.log(slice3) //[
// //     'c', 'h', ' ', 'w', 'a',
// //     's', 'a', 'm', ' ', 'u',
// //     'r', ' ', 'r', 'e', 'h',
// //     'm', 'a', 'n'
// //   ]

// ****************************************************************

//9) charAt => Returns string after replacement
// const myName = "https://wasam.com/wasam%20ChaudhryWasaM"
// const slice1 = myName.charAt(3)
// const slice2 = myName[3]
// const slice3 = myName.replace(`${myName[3]}`,'t')
// console.log(myName) //https://wasam.com/wasam%20ChaudhryWasaM
// console.log(slice1) //p
// console.log(slice2) //p
// console.log(slice3) //httts://wasam.com/wasam%20ChaudhryWasaM

