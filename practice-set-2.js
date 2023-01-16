//QUESTION 1
let age = prompt("Enter the age: ");
age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
  alert("7 CRORE");
} else {
  alert("WRONG ANS");
}

//QUESTION 2
let a = prompt("Enter Name: ");
switch (a) {
  case "rutvik":
    alert("RUTVIK IT IS.");
  case "chaitanya":
      alert("CHAITANYA IT IS.");
  default:
    alert("NUHH DUSRA DALO");
}

//QUESTION 3
let num = prompt("Enter the num: ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    alert("It is divisible by 2 and 3");
} else {
    alert("It is not divisible by 2 and 3");
}

//QUESTION 4
let num1 = prompt("Enter the num: ");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0 || num1 % 3 == 0) {
    alert("It is divisible by 2 or 3");
} else {
    alert("It is not divisible by 2 or 3");
}

// QUESTION 5
let age1 = prompt("Enter the age: ");
age1 = Number.parseInt(age1);
(age1 >=10)? alert("You can drive") : alert("You cannot drive")
