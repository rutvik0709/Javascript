const different = ["rutvik",7,true]

const fruits = ["banana","apple","orange"]
console.log(fruits[0])

console.log(fruits.length)

console.log(typeof fruits) //type of array is object

//Array Methods
let a1 =[1,2,3]
let a2 =[4,5,6]
let a3 =[7,8,9]
let a4 = [4,3,5,1,2]

console.log(a1.toString())

console.log(a1.join("-"))

// console.log(a2.pop())

// console.log(a1.push(10)) //returns the length of the array

// console.log(a3.shift()) //removes first element and returns it

// console.log(a2.unshift(10)) //returns the length of the array

// delete a2[1]

console.log(a1.concat(a2,a3))

console.log(a4.sort())

console.log(a1.splice(2,1,22,23)) // start index, delete how many elements, value of element
//this returns the deleted element of the array
console.log(a1)

console.log(a1.slice(1))

console.log(a1.reverse())

//Looping through array

const n = [1,2,3,4,5]
n.forEach((element)=>{
    console.log(element);
})

//Array.from() is use to create an array from the object

// for(let i of n){
//     console.log(i)
// }

// for(let j in n){
//     console.log(j)
// }

let arr = n.map((value,index,array) =>{  //creates a new array
    console.log(value,index,array)
    return value*value
})
console.log(arr)

let m = [45,32,18,76,9,0,4]
let y = m.filter((val)=>{
    return val<20
})
console.log(y)

//reduce array to a single value
let h = n.reduce((a,b) =>{
    return a+b
})
console.log(h)