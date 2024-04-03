let companyProfile1 = {
    companyName1 : " ibuildsoft",
    CEO1 : "Umair",
    "projectDirector" : "Rehan",
    businessHead1 : "Kashif",
    hrManager1 : "Ribbat",
    developmentTeam1: {
        teamLead1 : " Mujahid",
        frontEndDeveloper1 : "Bilal",
        backEndDeveloper1 : "Wasam"
    },
    companyExperties1 : ["Hospital Management System","Logistics Management System", "Travel and Tour"],

    welcomeMessage1 : function (){

        // if we will use arrow fuction insted of function(){}, this keyword won't work 

        console.log(`${this}`);
        console.log(`Welcom to ${this.companyName1}, where the CEO is ${this.CEO1},
        Development TeamLead is ${this.developmentTeam1.teamLead1},
        FrontEnd Developer is ${this.developmentTeam1.frontEndDeveloper1},
        and the BackendDeveloper is ${this["developmentTeam1"].backEndDeveloper1}.
        This Company also has a unique product i.e. ${this["companyExperties1"][0]}`);

    },
    
}

let companyProfile2 = {
    companyName2 : " Virtual Aspire",
    CEO2 : "Wasam",
    "projectDirector2" : "Ali",
    businessHead2 : "Adnan",
    hrManager2 : "Nisha",
    developmentTeam2 : {
        teamLead2 : " waqas",
        frontEndDeveloper2 : "Usama",
        backEndDeveloper2 : "shabbir"
    },
    companyExperties2 : ["CRM","E-commerce", "ERP"],

    welcomeMessage2 : function (){

        // if we will use arrow fuction insted of function(){}, this keyword won't work 
        console.log(`${this}`);
        console.log(`Welcom to ${this.companyName2}, where the CEO is ${this.CEO2},
        Development TeamLead is ${this.developmentTeam2.teamLead2},
        FrontEnd Developer is ${this.developmentTeam2.frontEndDeveloper2},
        and the BackendDeveloper is ${this["developmentTeam2"].backEndDeveloper2}.
        This Company also has a unique product i.e. ${this["companyExperties2"][0]}`);
    
    }
}
console.log(companyProfile1.welcomeMessage1())



const allCompanies = Object.assign({},companyProfile1,companyProfile2);
// console.log(allCompanies);

let allCompanies1 = {...companyProfile1,...companyProfile2};
// console.log(allCompanies1);

// console.log(companyProfile1.welcomeMessage1());


const extractingkeys = Object.keys(companyProfile1);
const extractEntries = Object.entries(companyProfile1);
const extractValues = Object.values(companyProfile1);
// console.log(extractingkeys);
// console.log(...extractEntries);
// console.log(extractValues);


// console.log(companyProfile1.hasOwnProperty("CEO1"));
// true



// Destructuring 

function destructuringArguments ( {CEO1}) {

    // console.log(CEO1);
}


destructuringArguments(companyProfile1)




























// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let mySymbol = Symbol("key1")
// console.log(typeof(mySymbol));

let letsUseSymbol = {
[mySymbol] : "mykey1",
}
// console.log(letsUseSymbol[mySymbol]);
// console.log(typeof(letsUseSymbol[mySymbol]));
