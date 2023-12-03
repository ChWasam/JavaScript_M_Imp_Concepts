// Strig Interpolation where you make placeholders in backtics
// backtik ~ 
//  ~ ~  
// placeholder => ~ ${} ~

// Synonyms:

// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax


const anotherName = new String("Wasam-ur-rehman"); // object
const name = 'wasam';// Behind the scene yeh bhi object hi invoke kar raha ha 

//const anotherName = new String("Wasam");// write this on console(browser) as well 

// #################################################################################

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.



// ####################################################################################



//console.log(anotherName); //browser pa console kar kah yeh acha sa nazar ata ha 
 // [String: 'Wasam'] yahan string ak object ha 
// we get length property and lot of other methods 
// we must master these methods 
//console.log(name);     // wasam

//console.log(anotherName.__proto__); // access prototypes{} // protype me buhat sara methods hota han 
// console.log(anotherName[1]);
// console.log(anotherName.length);
// console.log(anotherName.charAt(3));
// console.log(anotherName.indexOf('a'));



//console.log(anotherName.substring(-1,3)); // substring me ham negative value nahi da sakta han 
// negative value ko ignore kar kah zero sa start kar de ga 
const newString = anotherName.slice(-11,-1); // keep in mind it will move from left to right 
//                                  L to R
// console.log(newString); // is me ham negative values bhi da sakta han 

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let str = "Apple, Banana, Kiwi";
// console.log(str.substr(7, 6));


// trim
//  replace
//include
//split
                //  ###############################################


// trim 
const newStringOne = "  wasam   ";
// trim removes starting space and end space 
// it works on white spaces and line terminators
// console.log(newStringOne.trim());
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.





// *********************************************************************
// Replace 

const url = "https://wasam.com/wasam%20Chaudhry";
// console.log(url.replace("%20", "-"));

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. 

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// By default, the replace() method is case sensitive.
// To replace case insensitive, use a regular expression with an /i flag (insensitive):

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");








// *************************************************************************
// includes
// console.log(url.includes("wasam"));
// *****************************************************************************
// split 
// means 
// Converting a String to an Array

const newStringTwo = "Ch Wasam Ur Rehman";
// console.log(newStringTwo.split(" ")); // [ 'Ch', 'Wasam', 'Ur', 'Rehman' ]

// console.log(newStringTwo.split("")); 
// [
//     'C', 'h', ' ', 'W', 'a',
//     's', 'a', 'm', ' ', 'U',
//     'r', ' ', 'R', 'e', 'h',
//     'm', 'a', 'n'
//   ]

//console.log(newStringTwo.split()); // [ 'Ch Wasam Ur Rehman' ]

// split and converted to array on the basis of value given 
// **********************************************************************************
// charat

// console.log(newStringTwo.charAt(3));
// or 
// console.log(newStringTwo[0]);

//When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed.

// *************************************************************************************

// We can Use the less-than and greater-than operators to compare strings
// Note that all comparison operators, including === and ==,compare strings case-sensitively. 
// A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) 
// before comparing them.

// The choice of whether to transform by toUpperCase() or toLowerCase() is mostly arbitrary,
//  and neither one is fully robust when extending beyond the Latin alphabet.
//  For example, the German lowercase letter ß and ss are both transformed to SS by toUpperCase(),
//   while the Turkish letter ı would be falsely reported as unequal to I by toLowerCase()
//    unless specifically using toLocaleLowerCase("tr").

// use  localeCompare() method 

// ***********************************************************************************

// String primitives and String objects
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"

// console.log(eval(s2.valueOf())); // returns the number 4
// ************************************************************************************
// Note : Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results

// **************************************************************************************


// Note: Comparing two JavaScript objects always returns false.

// ************************************************************************************
// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():
// ***********************************************************************************


const firstName = "Chaudhry";
const secondName = "Wasam Ur Rehman"

const fullName = firstName.concat(" ",secondName);
// console.log(fullName);


// ######################################################################################
// JavaScript String Padding

// JavaScript String padStart()

// Examples
// Pad a string with "0" until it reaches the length 4:

let text = "5";
let padded = text.padStart(4,"0");
// console.log(padded);


// padEnd() Examples
// let text = "5";
// let padded = text.padEnd(4,"0");

// Note
// The padStart() and padEnd() methods are  string method.

// To pad a number, convert the number to a string first.

// Example 

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");

// ####################################################################################
// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// console.log(fullName.charAt(1));


// charCodeAt(position)
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).
// console.log(fullName.charCodeAt(1));


// Property access [ ]
// console.log(fullName[1]);


// Note
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)


// ########################################################################################

// String Search Methods

// String indexOf() and String lastIndexOf()

const myName = "Ch Wasam Ur Rehman Wasam ";
// console.log(myName.indexOf("Wasam"));3

// console.log(myName.lastIndexOf("Wasam"));19


//   IMP: Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// console.log(myName.lastIndexOf("ali")); // -1

// Both methods accept a second parameter as the starting position for the search:

// The lastIndexOf() methods searches backwards (from the end to the beginning),
//  meaning: if the second parameter is 19, 
//  the search starts at position 19, and searches to the beginning of the string.

// console.log(myName.lastIndexOf("Wasam",18));// 3

// String search()
// console.log(fullName.search("Wasam"));

// String match()
const sentence = "The rain in SPAIN stays mainly in the plain";
// [
//console.log(sentence.match("ain"));
// Result 
// [
//     'ain',
//     index: 5,
//     input: 'The rain in SPAIN stays mainly in the plain',
//     groups: undefined
//console.log(sentence.match(/ain/g));
// Result 

// [ 'ain', 'ain', 'ain' ]



//console.log(sentence.match(/ain/gi));
// Result 
// [ 'ain', 'AIN', 'ain', 'ain' ]


// String includes()
// The includes() method returns true if a string contains a specified value.

// Otherwise it returns false.
console.log(sentence.includes("ain")); // true 

console.log(sentence.includes("ain",23)); // true 
// String startsWith()
console.log(sentence.startsWith("The")); // true
// A start position for the search can be specified:

console.log(sentence.startsWith("ain",4)); // true

console.log(sentence.startsWith("ain",5)); // false

// String endsWith()
console.log(sentence.endsWith("plain"));  // true

// Check if the 20 first characters of a string ends with "rain":
console.log(sentence.endsWith("rain",8)); // true

console.log(sentence.endsWith("rain",7)); // false

// ##############################################################################




