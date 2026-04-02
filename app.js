const emoji = document.getElementById("emoji");
const message = document.getElementById("message");

// Function to show emoji randomly
function showEmoji() {
  const x = Math.random() * 250;
  const y = Math.random() * 250;

  emoji.style.left = x + "px";
  emoji.style.top = y + "px";

  emoji.style.display = "block";

  message.textContent = "Catch me if you can!";
}

// Hide emoji after click
emoji.addEventListener("click", function () {
  emoji.style.display = "none";
  message.textContent = "Nice! You caught it 😎";

  setTimeout(showEmoji, 1000);
});

// Start game loop
setTimeout(showEmoji, 1000);