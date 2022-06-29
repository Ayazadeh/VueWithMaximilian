// this code allow us to print some text !
/*
comment
*/
// document.write("hello world");
// console.log("here is my console!");
// alert("how are you?")
debugger;
let firstname = "let variable";

console.log(firstname);

firstname = "let variable changed!";

console.log(firstname);

let lastname = "ayaz";
let age = 23;

console.log(firstname, lastname, age);

const access = "const variable"; // can't change!
console.log(access);

var field = "var variable";
console.log(field);

var testvar = 10;
let testlet = 20;

var testvar = 30;
// let testlet = 50; // this is false
testlet = 50; // this is true
{
    var testvar = 100;
    let testlet = 200;
}

console.log(testvar);
console.log(testlet);

console.log(myVar);
var myVar = 8888;
console.log(myVar);

console.log(myLet);
let myLet = 900;
console.log(myLet);