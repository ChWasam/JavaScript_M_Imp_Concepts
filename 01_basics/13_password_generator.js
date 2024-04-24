let pass = ""
const isNumber = false
const isSpecialCharacter = true
const passwordLength = 15
let collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const number = "123456789"
const SpecialCharacter = "~!@#$%^&*()_-+={[}]|:;'<,>.?/"

const generatePassword = ()=>{
    if(isNumber&&isSpecialCharacter ){
        collectionOfLetters += number;
        collectionOfLetters += SpecialCharacter;
    }
    else if(isNumber){
        collectionOfLetters += number;
        // console.log(isNumber);
        // console.log(collectionOfLetters);
    }
    else if(isSpecialCharacter){
        collectionOfLetters += isSpecialCharacter;
    }


    for(let i =0; i<=passwordLength; i++){
        let randomNumber = Math.round((Math.random() *collectionOfLetters.length)+1)
        pass += collectionOfLetters.charAt(randomNumber)
    }
    return pass
}

console.log(generatePassword());
