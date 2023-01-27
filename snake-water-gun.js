let choices = ["S", "W", "G"];
let compC = 0,
  userC = 0;
game = true;
while (game) {
  let compChoice = choices[Math.floor(Math.random() * choices.length)];
  let userChoice = prompt("Enter your choice 'S' or 'W' or 'G': ");
  let confirmation = confirm("Are you sure you want to select " + userChoice);
  if (!confirmation) {
    userChoice = prompt("Enter your choice 'S' or 'W' or 'G': ");
  }
  if (userChoice == "S" && compChoice == "G") {
    compC++;
  } else if (userChoice == "S" && compChoice == "W") {
    userC++;
  } else if (userChoice == "W" && compChoice == "S") {
    compC++;
  } else if (userChoice == "W" && compChoice == "G") {
    userC++;
  } else if (userChoice == "G" && compChoice == "W") {
    compC++;
  } else if (userChoice == "G" && compChoice == "S") {
    userC++;
  }
  game = confirm("Do you want to continue: ");
}
console.log(userC,compC)