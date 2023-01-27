let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fifth = document.getElementById("fifth");

let a = first.getAttribute("class");
console.log(a);

console.log(first.hasAttribute("style"));

first.setAttribute("style", "color: red;");

first.setAttribute("class", "new div");

first.removeAttribute("class");

console.log(second.dataset);

let b = document.getElementsByTagName("div")[2];
// b.innerHTML = b.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement("div");
div.innerHTML = "<h1>Hello World!</h1>";
// b.appendChild(div);
// b.append(div);    // at the end of the dicv//
// b.prepend(div);   // at the start of the div
// b.before(div);
// b.after(div);
// b.replaceWith(div);

third.insertAdjacentHTML("beforebegin", '<div class="test">Before begin</div>');
third.insertAdjacentHTML("beforeend", '<div class="test">Before end</div>');
third.insertAdjacentHTML("afterbegin", '<div class="test">After begin</div>');
third.insertAdjacentHTML("afterend", '<div class="test">After end</div>');

let fourth = document.getElementById("fourth");
// fourth.className = "text-color red"  //add class
fourth.classList.add("red");
fourth.classList.add("text-color");
fourth.classList.remove("red");
fourth.classList.toggle("red"); //adds if not present ..removes if present

// let c = setTimeout(function(){
//     alert("I am inside time out")
// },5000)

// let d = prompt("Do you want to clear timeout")
// if(d=="yes"){
//     clearTimeout(c)
// }
// console.log(c)  //Timer id

// const sum = (a,b,c) => {
//   console.log("Yes i am running", a+b+c);
// };
// setTimeout(sum, 5000, 1, 2, 4);

function sum1(a, b, c) {
  sum = 0;
  sum = a + b + c;
  console.log("the addition of number is " + sum);
}

setInterval(function () {
  sum1(1, 2, 3);
}, 5000);

clearInterval()
