// -----------------------------
// VARIABLES (Tracking Data)
// -----------------------------
let randomNumber;
let attempts = 0;
let maxNumber = 10; // default

// -----------------------------
// AJAX - Load Config
// -----------------------------
function loadConfig() {
  fetch("config.txt")
    .then(res => res.text())
    .then(data => {
      maxNumber = parseInt(data);
      startGame();
    });
}

// -----------------------------
// FUNCTION: Start Game
// -----------------------------
function startGame() {
  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  console.log("Secret number:", randomNumber); // for testing
}

// -----------------------------
// FUNCTION: Check Guess
// -----------------------------
function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  attempts++;
  document.getElementById("attempts").textContent = attempts;

  if (guess === randomNumber) {
    message.textContent = "Correct! 🎉";
  } else if (guess > randomNumber) {
    message.textContent = "Too high!";
  } else {
    message.textContent = "Too low!";
  }
}

// -----------------------------
// EVENT
// -----------------------------
document.getElementById("guessBtn")
  .addEventListener("click", checkGuess);

// Load config when page starts
loadConfig();