"use strict";

// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const doubleBtn = document.getElementById("doubleBtn");
/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", diceGame);

function diceGame() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    message.innerHTML = "Player 1 turn";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player1Dice.innerHTML = randomNumber;
    player1Scoreboard.innerHTML = player1Score += randomNumber;
    player1Turn = false;
  } else {
    message.innerHTML = "Player 2 turn";
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    player2Dice.innerHTML = randomNumber;
    player2Scoreboard.innerHTML = player2Score += randomNumber;
    player1Turn = true;
  }
  if (player2Score > 20) {
    message.innerHTML = "Player 1 wins!!😊";
    resetBtn.style.display = "inline-block";
    rollBtn.style.display = "none";
    doubleBtn.style.display = "none";
  }
  if (player1Score > 20) {
    message.innerHTML = "Player 2 wins!!😊";
    resetBtn.style.display = "inline-block";
    rollBtn.style.display = "none";
    doubleBtn.style.display = "none";
  }
}

// 1. Find out which players turn it is
// 2. log out the value e.g. "Player 1 rolled 5"
// 3. Switch the turn back to the other player"

resetBtn.addEventListener("click", function () {
  player1Scoreboard.innerHTML = 0;
  player1Dice.innerHTML = "-";
  player2Scoreboard.innerHTML = 0;
  player2Dice.innerHTML = "-";
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  message.innerHTML = "Player 1 turn";
  resetBtn.style.display = "none";
  rollBtn.style.display = "inline-block";
  doubleBtn.style.display = "inline-block";
});

document.querySelector("#doubleBtn").addEventListener("click", doublerNothing);

function doublerNothing() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player2Dice.classList.remove("active");
    message.innerHTML = "Player 1 has double rolled!🐱‍🚀";
    player1Dice.classList.add("active");
    player1Dice.innerHTML = randomNumber;
    player1Scoreboard.innerHTML = player1Score += randomNumber * 2;
    player1Turn = false;
  } else {
    player1Dice.classList.remove("active");
    message.innerHTML = "Player 2 has double rolled!🐱‍👓 ";
    player2Dice.classList.add("active");
    player2Dice.innerHTML = randomNumber;
    player2Scoreboard.innerHTML = player2Score += randomNumber * 2;
    player1Turn = true;
  }
  if (player1Score > 20) {
    message.innerHTML = "Player 1 has gone bust!🤦‍♂️ Player 2 wins!";
    rollBtn.style.display = "none";
    doubleBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  } else if (player2Score > 20) {
    message.innerHTML = "Player 2 has gone bust!🤦‍♂️ Player 1 wins!";
    rollBtn.style.display = "none";
    doubleBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  }
}
