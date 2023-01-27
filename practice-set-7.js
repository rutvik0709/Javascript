//Question 1
let a = (document.body.childNodes[1].firstElementChild.style.backgroundColor = "red");

//Question 2
//yes automatically added

//Question 3
document.body.childNodes[9].firstElementChild.style.color = "blue";
document.body.childNodes[9].lastElementChild.style.color = "yellow";

//Question 4
Array.from(
  document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan";
  });
