console.dir(document.body.getElementsByTagName("div")[4]) //element as object
console.log(document.body.getElementsByTagName("div")[4]) //element DOM tree

console.log(document.body.firstChild.nodeName) // defined for any node
console.log(document.body.firstElementChild.tagName) //defined for only element Node

console.log(document.getElementById("element1").innerHTML)
console.log(document.getElementById("element1").outerHTML)

