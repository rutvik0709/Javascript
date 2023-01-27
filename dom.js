console.log(document.body.firstChild) //text node if given space
console.log(document.body.lastChild)
console.log(document.body.childNodes) //Node list
console.log(document.body.hasChildNodes())

let arr = Array.from(document.body.childNodes) //Array list
console.log(arr)

let a = document.body
console.log(a.firstChild)
console.log(a.firstElementChild) //Element only navigations use word 'Element'
// console.log(a.firstChild.nextSibling)
console.log(a.previousElementSibling)
console.log(a.nextElementSibling)
console.log(a.firstElementChild)
console.log(a.lastElementChild)

//Searching the DOM
let b = document.getElementById('para').style.color = "red";
let c = document.querySelectorAll('p')
let d = document.getElementsByTagName('ul')
let e = document.getElementsByName('bold')
let f = document.getElementsByClassName('nav')

//matches, closet, contains
let id1 = document.getElementById('e1')
let d1 = document.getElementById('d1')
let p1 = document.getElementById('para')
console.log(id1)
console.log(id1.matches(".box"))
console.log(id1.matches(".class"))

console.log(d1.contains(p1))
console.log(p1.closest(".bigdiv"))