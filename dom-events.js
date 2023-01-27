// document.getElementById("second").onclick = function() {
//     myFunction()
// };
// function myFunction() {
//     document.getElementById("second").innerHTML = "dablo gelo"
// }

let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello World!";
};


let btn = document.getElementById("btn");
let x = function () {
  alert("Hello World 1")
}

let y = function () {
  alert("Hello World 2")
}
btn.addEventListener('click',x)

btn.addEventListener('click',y)

// console.log("Hello World")

let a = prompt("Enter the number: ")
if(a=="2"){
  btn.removeEventListener('click',y)
}