// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const error = false
//         if (!error){
//             resolve({userName:"Wasam",email:"ch.wasam@gmail.com"})

//         }
//         else{
//             reject('Error:Something went wrong')
//         }
//     },2000)
// })

// promiseOne.then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((userName)=>{
//     console.log(userName);   
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("Promise is either resolved or rejected"))




// finally matlab yar kam hona tha ho gya error a gya to yar end pa mujha bta do kya hua ha 
// x amout of time ka bad bta do kah jo hona tha ho gya ha kya ?
// matlab by default end pa yeh kam ho jai 











// ************** Asyns Await**********************************

// const promiseTwo = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const error = true
//             if (!error){
//                 resolve({user:'Ali', password:12345})
//             }
//             else{
//                 reject("Error : Something Went Wrong");
//             }
//         },2000)
// })

// async function consumePromiseTwo (){
//            try {
//             const response = await promiseTwo
//             console.log(response);
//            } catch (error) {
//             console.log(error);
//            }
// }
// consumePromiseTwo ()


// ************** fetch **********************************

// async function  getResponse(){
//     try {
//         const response  = await  fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random')

//         const data = await response.json()
    
//         console.log(data);
        
//     } catch (error) {
//         console.log('E :', error);
//     }
// }

// getResponse()

// ************** fetch and then and catch  **********************************
fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random')
.then((response)=>{
        return response.json()     
}).then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log('E:',error)
})

//  Chain of then is known as thenable 