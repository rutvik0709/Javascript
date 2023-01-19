//Question 1
let n = prompt("How many numbers do u want to enter: ");
let array1 = [];
n = Number.parseInt(n);
for (var i = 0; i < n; i++) {
  array1[i] = prompt("Enter the number: ");
}
console.log(array1);

//Question 2
let array2 = [];
do{
    n1 = prompt("Enter the number: ")
    n1 = Number.parseInt(n1);
    array2.push(n1);
}while(n1!=0)
console.log(array2);

//Question 3
let array3 = [5,10,12,15,20,60,79];
let finalarray = array3.filter((element)=>{
    if(element%10==0){
        return element
    }
})
console.log(finalarray)

//Question 4
const t = [1,2,3,4,5,6]
let arr = t.map((value) =>{  //creates a new array
    console.log(value)
    return value*value
})
console.log(arr)

//Question 5
const x = [1,2,3,4,5,6]
let k = x.reduce((k1,k2) =>{  //creates a new array
    return k1*k2
})
console.log(k)