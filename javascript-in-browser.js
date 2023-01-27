console.log("Hello")  // Print anything on console
console.assert(5>53)  //tests if a given expression is true or not
console.info()  //writes a message to the console
console.clear()  //clears the console
console.warn()  //gives warning
console.error() //gives error
console.table() //writes a table to the console

console.time("forLoop")
for (let i = 0; i < 10; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

let write = confirm("Yes or No")
if(write) {
    console.log("Yes")
}else{
    console.log("No")
}