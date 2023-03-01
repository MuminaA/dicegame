// getting random number
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// one way of solving
if (randomNumber1 == 1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
} else if (randomNumber1 == 6) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}

//other way of solving
let randomImageSource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute("src", randomImageSource);

// Deciding winner/ changing html
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}