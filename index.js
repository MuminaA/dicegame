let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

if (randomNumber1 == 1) {
    document.querySelector("img").setAttribute("src", "images/dice1.png")
} else if (randomNumber1 == 2) {
    document.querySelector("img").setAttribute("src", "images/dice2.png")
} else if (randomNumber1 == 3) {
    document.querySelector("img").setAttribute("src", "images/dice3.png")
} else if (randomNumber1 == 4) {
    document.querySelector("img").setAttribute("src", "images/dice4.png")
} else if (randomNumber1 == 5) {
    document.querySelector("img").setAttribute("src", "images/dice5.png")
} else if (randomNumber1 == 6) {
    document.querySelector("img").setAttribute("src", "images/dice6.png")
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML("🚩Player 1 Wins!");
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML("Player 2 Wins!🚩");
} else {
    document.querySelector("h1").innerHTML("Draw!");
}