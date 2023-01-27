function joke() {
    let array_of_joke = ["What’s the best thing about Switzerland? - I don’t know, but the flag is a big plus.",
    "I invented a new word! - Plagiarism!",
    "What do you call an ant who fights crime? - A vigilANTe!",
    "Why are snails slow? Because they’re carrying a house on their back.",
    "What’s the smartest insect? A spelling bee!"];

    let random_joke = array_of_joke[Math.floor(Math.random()*array_of_joke.length)]

    document.getElementById("joke").innerHTML = random_joke;
}