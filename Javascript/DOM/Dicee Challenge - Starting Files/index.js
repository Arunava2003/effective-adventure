var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

function player1(randomNumber) {
    if (randomNumber === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }else if (randomNumber === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }else if (randomNumber === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }else if (randomNumber === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }else if (randomNumber === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }else{
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
}

function player2(randomNumber) {
    if (randomNumber === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }else if (randomNumber === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }else if (randomNumber === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }else if (randomNumber === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }else if (randomNumber === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }else{
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}

function result(player1, player2) {
    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "🚩Player1 Wins";
    }else if (player1 < player2) {
        document.querySelector("h1").innerHTML = "Player2 Wins🚩";
    }else if (player1 === player2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }else{
        document.querySelector("h1").innerHTML = "Refresh Me";
    }
}

player1(randomNumber1);
player2(randomNumber2);
result(randomNumber1, randomNumber2);

