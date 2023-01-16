let a = prompt("Enter your age: ")
a = Number.parseInt(a)

if(a<0){
    alert("Invalid age: ")
}
else if(a>=0 && a<=14){
    alert("You cannot drive.")
}
else if(a>14 && a<18){
    alert("You can drive on minor license.")
}
else{
    alert("You can drive on major license.")
}

//Switch Case
let b = prompt("Enter a day: ")
switch(b){
    case "Sunday":
        console.log("This is Sunday.")
        break
    case "Monday":
        console.log("This is Monday.")
        break
    case "Tuesday":
        console.log("This is Tuesday.")
        break
    case "Wednesday":
        console.log("This is Wednesday.")
        break
    case "Thursday":
        console.log("This is Thursday.")
        break
    case "Friday":
        console.log("This is Friday.")
        break
    case "Saturday":
        console.log("This is Saturday.")
        break
    default:
        console.log("Wrong Day.")
}
