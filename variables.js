console.log("Variables in JS ")

var a = 12          // var is globally copied
var a = 5

let b = "Chaitanya" //let is declared only once but we can change the value later
{
    let b = "Rutvik"  // block specific
    console.log(b);  // prints Rutvik
}   
console.log(b) // prints Chaitanya

const pi = 3.141    // Just like let but we cannot change the value , Declare and initalize at the same time

