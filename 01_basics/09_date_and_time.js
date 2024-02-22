// date ka start time  =  MIDNIGHT AT THE BEGINING OF JANUARY 1, 1970, UTC (the epoch)
// DATE IS AN OBJECT  ==>>> Very IMP 
// DATE REPRESENTS IN MILI SECONDS  
// date object gives long string which is a mili second time 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// In future 
// Temporal (used for date)  will be a global object like math 
// to get the current system exact time => Temporal.Now.instant()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myDate = new Date ();
// console.log(myDate); // 2023-12-17T07:51:13.744Z
// console.log(myDate.toDateString()); // Sun Dec 17 2023
// console.log(myDate.toISOString()); // 2023-12-17T07:53:26.865Z
// console.log(myDate.toJSON());  // 2023-12-17T07:54:55.291Z
// console.log(myDate.toLocaleDateString()); // 12/17/2023
// console.log(myDate.toLocaleString()); //12/17/2023, 12:58:00 PM
// console.log(myDate.toLocaleTimeString());  //12:58:00 PM
// console.log(myDate.toString());// Sun Dec 17 2023 12:58:00 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toTimeString()); // 12:58:00 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toUTCString());// Sun, 17 Dec 2023 07:58:00 GMT

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myCreatedDate = new Date (2023,0,12) // month and day start with zero here 
//2023-01-11T19:00:00.000Z
// let myCreatedDate = new Date (2023,0,12);
// console.log(myCreatedDate.toString()); // Thu Jan 12 2023 00:00:00 GMT+0500 (Pakistan Standard Time)

// let myCreatedDate1 = new Date (2023,0,12, 5,50);
// console.log(myCreatedDate1.toString());  //Thu Jan 12 2023 05:50:00 GMT+0500 (Pakistan Standard Time)

// let myCreatedDate2 = new Date ("2023-01-20");
// console.log(myCreatedDate2.toLocaleString());  // 1/20/2023, 5:00:00 AM
// let myCreatedDate3 = new Date ("1-20-2023");
// console.log(myCreatedDate3.toLocaleString());  // 1/20/2023, 12:00:00 AM

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Quizes and poles where time matters 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1702801074148 IN MILI SECOND 

// // JANUARY 1, 1970 YAHAN SA LA KAH ABHI TAK KA MILI SECOND VALUE HA 

// // CONVERTING myCreatedDate to mili seconds 

// console.log(myCreatedDate.getTime()); // 1673463600000 ms


// // Converting ms to sec

// console.log(myTimeStamp/1000); // 1702801661.593
// // but we don't need value after decimal

// console.log(Math.floor(myTimeStamp/1000)); // 1702801661

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Few get functions 

let newDate = new Date();
console.log(newDate); // 2023-12-17T08:35:05.678Z
console.log(newDate.getDate()); // (17)
console.log(newDate.getDay()); // Gets the day of the week, using local time (0), see detail below
// mon, tues, wed, thur, fri, sat, sun
// 1      2     3    4    5    6    0


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// we can define lot of parameters in locale string 
// we can set kah hama konsa internationalization chahia 

// is me object me ja kah jasa hi ctrl+space press karain ga to sab properties show ho jai ge 

console.log(newDate.toLocaleString('default',{
weekday: "long"
}));


 