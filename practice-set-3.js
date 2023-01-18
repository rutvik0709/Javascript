//Question 1
obj = {
    rutvik: 72,
    chaitanya: 71,
    yash: 78,
    aarya: 75
}
for(let student in obj) {
    console.log("Marks of "+student+" are "+obj[student])
}

//Question 2
let obj = {
    rutvik: 72,
    chaitanya: 71,
    yash: 78,
    aarya: 75
}
for(let i=0;i<Object.keys(obj).length;i++) {
    console.log("Marks of "+Object.keys(obj)[i]+" are "+obj[Object.keys(obj)[i]])
}

//Question 3
let correctAnswer = 5
while(true){
    let a = prompt("Enter a correct number: ")
    a = Number.parseInt(a)
    if(a == correctAnswer){
        console.log("Correct answer")
        break;
    }else{
        console.log("Invalid")
    }
}

//Question 4
sum=0;
function mean(...a){
    for(let i=0;i<a.length;i++){
        sum=sum + a[i]
    }

    console.log(sum/a.length)
}
mean(1,2,3,4,5)