//Question 1
let age = prompt("Enter the age: ");
age = Number.parseInt(age);
if (age > 18) {
  alert("You can drive.");
} else {
  alert("You cannot drive.");
}

//Question 2
let runagain = true;
while (runagain) {
  let age = prompt("Enter the age: ");
  age = Number.parseInt(age);
  if (age > 18) {
    alert("You can drive.");
  } else {
    alert("You cannot drive.");
  }
  runagain = confirm("Are you sure you want to play?");
}

//Question 3
let age1 = prompt("Enter the age: ");
age1 = Number.parseInt(age);
if (age1 < 0) {
  console.error("You have entered a negative age.");
} else if (age1 >= 18) {
  alert("You can drive.");
} else {
  alert("You cannot drive.");
}

//Question 4
let num = prompt("Enter the number: ");
number = Number.parseInt(number);
if(number > 4){
    location.href ="http://google.com"
}else{
    console.log("Nothing")
}

//Question 5
let color = prompt("Enter the color: ");
document.body.style.background = color;
