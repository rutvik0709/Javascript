let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)

let obj = {
  rutvik: 90,
  chaitanya: 45,
  aarya: 56,
  yash: 57
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Rutvik") {
  console.log(b)
}
