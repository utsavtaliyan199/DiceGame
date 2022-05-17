var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "./images/" + randomDiceImage1;

// because we have 2 images that we wanna change rather than just selecting the first one
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}




// if (randomNumber1 == 1) {
//     document.querySelector("img").setAttribute("src", "./images/dice1.png");
// } else if (randomNumber1 == 2) {
//     document.querySelector("img").setAttribute("src", "./images/dice2.png");
// } else if (randomNumber1 == 3) {
//     document.querySelector("img").setAttribute("src", "./images/dice3.png");
// } else if (randomNumber1 == 4) {
//     document.querySelector("img").setAttribute("src", "./images/dice4.png");
// } else if (randomNumber1 == 5) {
//     document.querySelector("img").setAttribute("src", "./images/dice5.png");
// } else if (randomNumber1 == 6) {
//     document.querySelector("img").setAttribute("src", "./images/dice6.png");
// }