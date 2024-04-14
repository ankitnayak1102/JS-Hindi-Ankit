// primitive

// 7 types : string , number, boolean,  null, undefined, symbol, BigInt

// Reference (  Non Primitive )

// Array, objects, Functions


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId =  Symbol('123')

// console.log( id === anotherId);

const bigNumber = 234567876544567n  

//Reference ( Non Primitive )

// Array, Objects, Functions

const heroes =  ["Shaktiman", "Doremon", "Shinchan"];
 let myObj = {
    name : "Ankit",
    age :  21,  
}

const myFunction = function(){
    // console.log("hello world");
    
}

// *********************** 

// stack (Primitive), Heap (Non - Primtive)

let myCollegename = "SRMCollegeRmp"

let anothername = myCollegename
anothername = srmeashwaricollege


console.log(myCollegename);
// console.log(anothername);

let userOne = {
    email : "ankit@google.com",
    upi : "user@oksbi"
}

let userTwo = userOne

userTwo.email = "ankitnayak@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

useremail1 = "an9720@srmist.edu.in"